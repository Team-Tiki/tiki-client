import { BrowserWindow, app, dialog, shell } from 'electron';
import log from 'electron-log';
import { autoUpdater } from 'electron-updater';
import path from 'path';

let win: BrowserWindow | null = null;

const preload = path.join(__dirname, '../preload/index.js');
const createWindow = async () => {
  win = new BrowserWindow({
    title: 'Tiki',
    width: 1366,
    height: 875,
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',

    // attach preload file to renderer process
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    // You can use `process.env.VITE_DEV_SERVER_URL` when the vite command is called `serve`
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    // Load your file
    win.loadFile('dist/index.html');
  }
};

app.whenReady().then(() => {
  createWindow();

  setAutoUpdater();

  app.on('activate', () => {
    const allWindows = BrowserWindow.getAllWindows();
    if (allWindows.length) {
      allWindows[0].focus();
    } else {
      // create Window and Error handling
      createWindow().catch((err) => {
        dialog.showErrorBox('오류가 발생하여 실행에 실패했습니다', err);
      });
    }
  });
});

// quitting the app when no windows are open on non-macOS platforms
app.on('window-all-closed', () => {
  win = null;
  if (process.platform !== 'darwin') app.quit();
});

app.on('second-instance', () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore();
    win.focus();
  }
});

const setAutoUpdater = async () => {
  log.transports.file.level = 'debug';
  autoUpdater.logger = log;

  if (process.platform === 'darwin') {
    const checks = await autoUpdater.checkForUpdates();

    if (!checks) return;

    const { updateInfo } = checks;

    if (!win) return;

    const { response } = await dialog.showMessageBox(win, {
      message: `업데이트가 존재합니다.\n버전: ${updateInfo.version}\n날짜: ${updateInfo.releaseDate}`,
      buttons: ['취소', '다운로드 페이지로 이동'],
      defaultId: 1,
    });

    if (response === 1) {
      // 랜딩 페이지를 별도의 도메인으로 프로덕트를 분리한다면 해당 URL이 들어감.
      shell.openExternal('https://ti-kii.com');
    }
  }

  autoUpdater.checkForUpdatesAndNotify();
};
