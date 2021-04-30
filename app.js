const {app, BrowserWindow} = require('electron')
const url = require("url");
const path = require("path");
const express = require('express');
const server = express();
const os = require('os');
const storage = require('electron-json-storage');
let mainWindow

storage.setDataPath(os.tmpdir());

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/remote-control/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(3000);