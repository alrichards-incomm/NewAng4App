import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created !';
  serverName = 'Test Server';
  userName = 'Click here first Babe!';
  userNameSection: false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }
  onServerCreation() {
    this.serverCreationStatus = 'This server was created ! Name of the server is ' + this.serverName + '.';
  }
  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  clearUserName(){
    this.userName = '';
  }
}
