import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  getServerStatus() {
    if(this.serverStatus === 'offline'){
      return this.serverStatus;
    }else {
      this.serverStatus = 'Online';
      return this.serverStatus;
    }

  }
}
