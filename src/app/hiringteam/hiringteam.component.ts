import { Component, OnInit } from '@angular/core';
import { setupService } from '../services/setupService';

@Component({
  selector: 'app-hiringteam',
  templateUrl: './hiringteam.component.html',
  styleUrls: ['./hiringteam.component.css']
})
export class HiringteamComponent implements OnInit {

  regId:any;
  userData:any;
  userId:any;
  tm:any;
  tmList:any;

  constructor(public setupService : setupService) { }

  ngOnInit() {
    this.regId=localStorage.getItem('registeredId');
    console.log(this.regId);

    this.setupService.getOrgByReg(this.regId).subscribe((data: {}) => {
      this.userData = data;
     this.userId = this.userData.data.User_Id;
     console.log(this.userId);

     this.setupService.getUserByUser(this.userId).subscribe((data: {}) => {
      console.log(data);
      this.tm = data;
      this.tmList = this.tm.data;
       }, (err) => {
        console.log(err);
      });
    });

  }
}
