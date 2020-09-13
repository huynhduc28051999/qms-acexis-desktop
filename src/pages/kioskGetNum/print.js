import moment from 'moment'

function sendCommandToWorker(content) {
  window.ipcRenderer.send('print', content);
}

export async function PrintNumbering({ company, number = 1, curNumber = 1, note = `
Lưu ý:
Bệnh nhân vui lòng nghe gọi STT để vào phòng khám`, content }) {
  const mainContent = content.replace('${date}', moment().format('HH:mm DD/MM/YYYY')) /* eslint-disable-line */
    .replace('${number}', number) /* eslint-disable-line */
    .replace('${curNumber}', curNumber) /* eslint-disable-line */
    .replace('${note}', note) /* eslint-disable-line */
  // const popupWin = window.open('', '_blank')
  // popupWin.document.open()
  // popupWin.document.write(
    const print =
    `
      <div style="display: flex; justify-content: space-between">
        <div>
          <img src=${company.logo} alt=${company.name} loading='lazy' width='200px' />
        </div>
        <div>
        ${company.name}
        </div>
      </div>
      <div style="text-align: center">
        ${mainContent}
      </div>
    `

    // cannot send message to other windows directly https://github.com/electron/electron/issues/991
    sendCommandToWorker(print);
  // popupWin.document.close()
  // popupWin.focus()
  // setTimeout(() => popupWin.print(), 10)
  // setTimeout(() => popupWin.close(), 20)
  return true
}
