<template>
  <div class="sidebar">
    <ul id="sidebar-ul">
      <li v-for="website in websites" :data-id="website.id" :key="website.id" @click="onItemClickHandler">{{ website.group }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
    props: ['websites'],
    data() {
      return {
        childrenArr: null,
        groupOffsetTop: {}
      }
    },
    methods: {
      onItemClickHandler(e) {
        const clickId = e.toElement.dataset.id;

        // 删除所有li节点的className
        const children = e.target.parentNode.children;
        const childrenArr = Array.from(children);
        for (const item of childrenArr) {
          item.className = '';
        }

        // 当前Element为active
        e.target.className = 'active';
        const toElement = document.getElementById(clickId);
        document.body.scrollTop = toElement.offsetTop;
      },
      throttle(fn, wait) {
        let timeout, context, args;
        let previous = 0;

        const later = () => {
          previous = +new Date();
          timeout = null;
          fn.apply(context, args);
        };

        const throttled = (..._args) => {
          const now = +new Date();
          const remaining = wait - (now - previous);
          context = this;
          args = _args;
          if (remaining <= 0 || remaining > wait) {
            if (timeout) {
              clearTimeout(timeout);
              timeout = null;
            }
            previous = now;
            fn.apply(context, args);
          } else if (!timeout) {
            timeout = setTimeout(later, remaining);
          }
        };
        return throttled;
      },
      onScrollHandler() {
        const _scrollTop = document.body.scrollTop + 21;
        let currentGroupId;
        let minOffset;

        // 判断当前滚动条的位置与group的offset距离
        for (const [groupId, offsetTop] of Object.entries(this.groupOffsetTop)) {
          if (_scrollTop > offsetTop) {
            if (!minOffset) {
              minOffset = _scrollTop - offsetTop;
              currentGroupId = groupId;
            } else {
              if (_scrollTop - offsetTop < minOffset) {
                minOffset = _scrollTop - offsetTop;
                currentGroupId = groupId;
              }
            }
          }
        }

        // 设置符合条件的li为active状态
        for (const item of this.childrenArr) {
          if (item.dataset.id === currentGroupId) {
            item.className = 'active';
          } else {
            item.className = '';
          }
        }
      }
    },
    mounted() {
      const sidebarUl = document.getElementById('sidebar-ul');
      const children = sidebarUl.children;
      this.childrenArr = Array.from(children);
      for (const item of this.childrenArr) {
        const id = item.dataset.id;
        const el = document.getElementById(id);
        this.groupOffsetTop[id] = el.offsetTop;
      }

      // 初始化active状态
      this.onScrollHandler();

      window.addEventListener('scroll', this.throttle(this.onScrollHandler, 100));
    }
  }

</script>

<style lang="scss" scope>
  @import '../assets/styles/common.sass';

  @media (min-width: 481px) {
    .sidebar {
      width: $sidebar-width;
      height: 100vh;
      background-color: $sidebar-bgColor;
      position: fixed;
      top: 0;
      z-index: 1000;

      ul {
        margin-left: 50px;
        margin-top: 50px;

        li {
          font-size: $sub-font-size;
          padding: 10px 0;
          color: #6b7386;

          &:hover {
            color: $sidebar-li-hover;
            cursor: pointer;
          }
        }

        li.active {
          color: $sidebar-li-active;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .sidebar {
      display: none;
    }
  }

</style>
