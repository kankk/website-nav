const defaultIconMap = [{
  bgColor: '#4e4e4e',
  color: '#ffffff'
}, {
  bgColor: '#2c9e4b',
  color: '#ffffff'
}, {
  bgColor: '#226b80',
  color: '#ffffff'
}, {
  bgColor: '#a34a28',
  color: '#ffffff'
}, {
  bgColor: '#900048',
  color: '#ffffff'
}, {
  bgColor: '#113f67',
  color: '#ffffff'
}, {
  bgColor: '#421b9b',
  color: '#ffffff'
}, {
  bgColor: '#00a8b5',
  color: '#ffffff'
}, {
  bgColor: '#e14594',
  color: '#ffffff'
}]

export default {
  getDefaultIcon () {
    const randomIndex = Math.floor(Math.random() * defaultIconMap.length)
    return defaultIconMap[randomIndex]
  }
}
