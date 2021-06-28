import { Component, OnInit } from '@angular/core';
import { setupService } from '../services/setupService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jobdesc',
  templateUrl: './jobdesc.component.html',
  styleUrls: ['./jobdesc.component.css']
})
export class JobdescComponent implements OnInit {

  public userData;
  public userId;
  public userData1;
  userData2:any;
  jobtype: any;
  regId:any;
  index: any;

  constructor(private http: HttpClient, public setupService : setupService) { }

  show:boolean=false;

  ngOnInit() {
    this.regId = localStorage.getItem('registeredId');
    this.index = localStorage.getItem('index');

    console.log(this.regId);
    console.log(this.index);

    this.setupService.getOrgByReg(this.regId).subscribe((data: {}) => {
   
      this.userData = data;
     this.userId = this.userData.data.User_Id; 
      console.log(this.userId);
    

     this.setupService.getJobByUser(this.userId).subscribe((data: {})=>{
       this.userData1=data;
       this.userData2=this.userData1.data[this.index];
       console.log(this.userData2);
     })
    })
  
  }

  toggle()
  {
      this.show=!this.show
  }
}
