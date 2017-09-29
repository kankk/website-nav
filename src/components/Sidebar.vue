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
      }
    },
    mounted() {
      const sidebarUl = document.getElementById('sidebar-ul');
      const children = sidebarUl.children;
      const childrenArr = Array.from(children);
      for (const item of childrenArr) {
        const id = item.dataset.id;
        const el = document.getElementById(id);
        this.groupOffsetTop[id] = el.offsetTop;
      }

      window.addEventListener('scroll', () => {
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
        for (const item of childrenArr) {
          if (item.dataset.id === currentGroupId) {
            item.className = 'active';
          } else {
            item.className = '';
          }
        }
      });
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
