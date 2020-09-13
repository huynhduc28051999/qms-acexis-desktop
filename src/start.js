const electron = require('electron');

const app = electron.app;
const ipcMain = electron.ipcMain

const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
require('electron-reload')(__dirname)

let mainWindow;
let workerWindow;
function createWindow() {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 1200,
		height: 900,
		webPreferences: {
			nodeIntegration: true,
			worldSafeExecuteJavaScript: true,
			preload: __dirname + '/preload.js'
		}
	});
	// and load the index.html of the app.
	 mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, '/../public/index.html'),
        protocol: 'file:',
        slashes: true,
      })
  )

	// mainWindow.loadURL(startUrl);
	// mainWindow.webContents.openDevTools();

	mainWindow.on('closed', function () {
		mainWindow = null
	})
	workerWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,
			worldSafeExecuteJavaScript: true,
			// preload: __dirname + '/preload.js'
		}
	});
	workerWindow.loadURL('file://' + __dirname + '/../public/worker.html');
	workerWindow.hide()
	// workerWindow.webContents.openDevTools();
	workerWindow.on('closed', () => {
		workerWindow = undefined;
	});
}
ipcMain.on('print', (event, content) => {
	if (workerWindow) {
		workerWindow.webContents.send('print', content)
	}
});
ipcMain.on('readyToPrint', (event) => {
	if (workerWindow) {
		workerWindow.webContents.print({})
	}
});

app.on('ready', createWindow);

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit()
	}
});
app.on('activate', function () {
	if (mainWindow === null) {
		createWindow()
	}
});
app.setAppUserModelId("com.myapp.id");