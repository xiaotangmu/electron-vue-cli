import { app, BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 463,
    useContentSize: true,
    width: 600,
      frame: false,/*去除边框，包括全屏，缩小，关闭 ，要重写*/
      // webPreferences: {
      //     nodeIntegration: true
      // }

  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

let ipcMain = require('electron').ipcMain;
//接收最小化命令
ipcMain.on('window-min', function() {
    mainWindow.minimize();
})
//接收最大化命令
ipcMain.on('window-max', function() {
    if (mainWindow.isMaximized()) {
        mainWindow.restore();
    } else {
        mainWindow.maximize();
    }
})
//接收关闭命令
ipcMain.on('window-close', function() {
    mainWindow.close();
})


//定义新窗口
// 定义calendar窗体
let calendarWin
// 创建calendar窗口方法
function openCalendarWindow () {
    calendarWin = new BrowserWindow({
        width: 400,
        height: 550,
        parent: mainWindow, // win是主窗口
        webPreferences: {
            nodeIntegration: true
        }
    })
    calendarWin.loadURL(winURL + '#/New')
    calendarWin.on('closed', () => { calendarWin = null })
}
ipcMain.on('openCalendarWindow', e =>
    openCalendarWindow()
)

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
