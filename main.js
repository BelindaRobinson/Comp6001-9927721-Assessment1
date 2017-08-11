const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

let createWindow = () => {
    
    win = new BrowserWindow({frame: false, titleBarStyle:'hidden', width: 600, height: 400, minWidth: 400, minHeight: 400})

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    
    win.on('closed', () => {
    win = null
    })
}

app.on('ready', createWindow)

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})