import { app, BrowserWindow } from 'electron';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false, // usually false with Vite
      contextIsolation: true,
    },
  });

  win.loadURL('http://localhost:5173'); // this opens in the Electron window
}

app.whenReady().then(() => {
  createWindow();
});
