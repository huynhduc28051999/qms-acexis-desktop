export const dotNotify = ({ title, content}) => {
  Notification.requestPermission().then(res => {
    let notification = new Notification(title, {
      body: content,
      icon: ''
    })
    notification.onclick = () => {
      console.log('Notification clicked')
    }
  })
}