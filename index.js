const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const Window = require('./Window');
const log = require('electron-log')

let win = new Window(350, 250, 'http://localhost:1234/login.html');
app.on('ready', win.openWindow.bind(win));


//listen to open dashboard event from the renderer process
let dashboardWindow;

ipcMain.on('open:dashboard', async () => {
    dashboardWindow = new BrowserWindow({ width: 1000, height: 1000, fullscreenable: true, resizable: true, minHeight: 600, minWidth: 600 });
    dashboardWindow.loadURL('http://localhost:1234/home.html');
    dashboardWindow.on("closed", () => (dashboardWindow = null));
    win.close();
    // dWin.openWindow.bind(dWin)
})


ipcMain.on('close:login-window', async () => {
    win.close();
})


// CREATING THE MENU FOR THE APPLICATION

const template = [
    {
        label: "File", submenu: [{
            label: 'Home',
            accelerator: 'CmdOrCtrl+H',
            click() {
                dashboardWindow.loadURL(`http://localhost:1234/home.html`)
            },

        }, {
            label: 'Dashboard',
            accelerator: 'CmdOrCtrl+D',
            click() {
                dashboardWindow.loadURL(`http://localhost:1234/index.html`)
            },


        }, {
            role: 'close'
        }]
    }
]

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

