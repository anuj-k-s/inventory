import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverId: number=10;

  isEnabled:boolean = false;
  serverCreation="No server is there";
  serverName='';
  userName: string="";
  serverCreated: boolean=false;
  servers= ['Server1' ,'Servre2'];
  toggleValue: boolean = false;
  clickCount=0;
  
  getEnabledStatus(){
      setTimeout(() =>{
  this.isEnabled=true;
      },2000);
      return this.isEnabled;
      }
      
  onClickServer(){
  this.serverCreation ="server was created";
  this.servers.push(this.serverName);
  this. serverCreated=true;
  }
  
  onRevese(){
    this.toggleValue = !this.toggleValue;
    this.clickCount ++;
  }
  
  

  
  onInput(event: Event){
      this.serverName = (<HTMLInputElement>event.target).value; 
  }
  
  onClickReset(){
      this.userName="";
  }
  
  isEmpty(){
      return (!this.userName || 0 === this.userName.length);
  }

  ngOnInit() {
  }

  returnColor(){
    return this.clickCount >= 5 ? 'green' :'blue'  ;
};
returnC(){
    return this.clickCount >= 5 ? 'white' :'black'  ;
};

}
