const defaultIconMap = [{
  bgColor: '#2F4F4F',
  color: '#ffffff'
}]

export default {
  getDefaultIcon () {
    const randomIndex = Math.floor(Math.random() * defaultIconMap.length)
    return defaultIconMap[randomIndex]
  }
}
