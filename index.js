const { app, BrowserWindow } = require("electron")
const path = require("path")

let mainWindow

app.on("window-all-closed", () => {
  app.quit()
})

app.setPath("userData", path.join(__dirname, "/saved_recordings"))
app.setName("Caprica")

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 720,
    minWidth: 800,
    minHeight: 600,
    frame: false,
  })

  mainWindow.loadURL("http://localhost:8080")

  mainWindow.on("closed", () => {
    mainWindow = null
  })

  // mainWindow.webContents.openDevTools()
})
