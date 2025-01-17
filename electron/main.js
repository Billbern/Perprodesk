const { app, BrowserWindow } = require('electron');
const path = require('node:path');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Load the React app
  win.loadURL('http://localhost:3000'); // During development, load from dev server
  // For production, you might want to load from a local file:
  // win.loadFile(path.join(__dirname, '../dist/index.html'));

  // Open DevTools for debugging
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});