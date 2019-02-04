const {BrowserWindow} = require('electron')
const log = require('electron-log');

class Window{
    constructor(height,width,url,frame=false){
        this.height = height;
        this.width = width;
        this.url = url;
        this.frame = frame
    }
    openWindow(){
       this.window = new BrowserWindow({height:this.height,width:this.width,frame:this.frame,webPreferences:{
            devTools:true
        }});
        log.info(this.width,this.height)
        this.window.loadURL(`http://localhost:1234/login.html`);
        this.window.on("closed", () => (this.window = null));
    }
    async close(){
        await this.window.close();
    }
}

module.exports  = Window;