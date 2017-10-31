import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor(){
  this.serverStatus = Math.random() > .05 ? 'online' : 'offline';
}

  getServerStatus() {
    // if(this.serverStatus === 'offline'){  
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
