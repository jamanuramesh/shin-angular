import { Component, OnInit, TemplateRef } from '@angular/core';
import {  FormControl, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl  } from '@angular/forms';
import { setupService } from '../services/setupService';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  StageForm : FormGroup; submitted = false;

  public userId; public jobId; usr : any; dept_id : any;  usr_name : any;
  public userData;  
  public userData1; LocData : any;
  userData2:any;
  stage_name : any;  modalRef: BsModalRef;

  name = 'Angular';
  isMasterSel:boolean;
  categoryList:any;
  checkedCategoryList:any; 
  
  constructor(private formBuilder: FormBuilder, public setupService : setupService, private modalService: BsModalService){
      this.isMasterSel = false;
  
      this.categoryList = [
        {id:1, value:'Pool',isSelected:true},
        {id:2,value:'Applied',isSelected:true},
        {id:3,value:'Shortlisted',isSelected:true}
      
      ];
  
      this.getCheckedItemList();
  }
  
  checkUncheckAll() {
    for (var i = 0; i < this.categoryList.length; i++) {
      this.categoryList[i].isSelected = this.isMasterSel;
    }
    this.getCheckedItemList();
  }
   
  isAllSelected() {
    this.isMasterSel = this.categoryList.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }
  
  getCheckedItemList(){
    this.checkedCategoryList = [];
    for (var i = 0; i < this.categoryList.length; i++) {
      if(this.categoryList[i].isSelected)
      this.checkedCategoryList.push(this.categoryList[i]);
    }
    this.checkedCategoryList = JSON.stringify(this.checkedCategoryList);
  }

  ngOnInit() {

    this.StageForm = this.formBuilder.group({
      dpname: ['', [Validators.required]],
      username : ['', [Validators.required]]
     });

    this.userId = localStorage.getItem('user_Id');
    this.jobId = localStorage.getItem('jbId');
    this.setupService.getUserByUser(this.userId).subscribe((data: {}) => {
      console.log(data);
      this.userData1=data;
      this.userData2=this.userData1.data;
      console.log(this.userData2);
       }, (err) => {
        console.log(err);
      });

      this.setupService.getlocByReg(this.userId).subscribe((data: {}) => {
   
        this.LocData = data;
       console.log(this.LocData);
      }, (err) => {
        console.log(err);
      });
  }
  
  editTeam(editTeammodal: TemplateRef<any>,  UserName) {
     
    this.modalRef = this.modalService.show(editTeammodal,{ backdrop: 'static', keyboard: false });
    this.usr = UserName;
  
    }

 get f() { return this.StageForm.controls; }

 onCondition(){
  this.submitted = true;
    if (this.StageForm.valid) {
       var params = { 

        JobInfo_id : this.jobId,
        job_status : 'UNDER_VERIFICATION' ,
        locarion_condition : this.dept_id ,
         reviewer : this.usr_name,
        sent_to_user :  this.usr
       
      }
      console.log(params);

      if(params){

        this.setupService.addFunction(params, "/api/jobInfos/Approval").then((result) =>{
          console.log(result);
           alert("Job Approval Request Sent Successfully");
          //   this.jbResut = result;
          //  var jbInfo_id = this.jbResut.Job_Info_Id;
          //   localStorage.setItem('jbId', jbInfo_id);
  
          //  window.location.href = "/jbdashboard";
      }, (err) => {
        console.log(err);
      });
      }
      }
 }
}



 


