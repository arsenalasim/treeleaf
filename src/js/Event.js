const { ipcRenderer } = window.require('electron');
class Event {
    static closeWindow() {
        console.log('OKKK')
        ipcRenderer.send('close:login-window');
    }
}

module.exports = Event;