import { Component, OnInit, TemplateRef } from '@angular/core';
// import { IDropdownSettings } from 'ng-multiselect-dropdown';

import {  FormControl, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl  } from '@angular/forms';
import { setupService } from '../services/setupService';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  dropdownList:any = [];
  selectedItems = [];
  dropdownSettings:any;

  modalRef: BsModalRef;

  userForm : FormGroup; teamForm : FormGroup; editForm : FormGroup; editTeamForm : FormGroup; 
    submitted = false; subsecond = false; subthird = false; subfour = false;
    list:any;

  teamsList : any; tList : any; uList : any;  userList : any; dList : any; deptList : any; tmList : any; tl : any;

  regId : any;  userData : any; userId : any; userName : any; dl : any; ul : any;  usList : any;

  user_name: ''; deprt_id: '';  user_gender : '';  user_admin_access : '';
  team_name : ''; team_head : ''; team_members : '';
  userDtlId : ''; usName: ''; dptName:''; gndr : ''; admn:'';
  tmId : ''; tm_name: ''; tm_head: ''; tm_no:''; tmuser:'';
  role:'';


  depid:'';
  uname:'';
  adm:'';
  gnd:'';
  ro:'';
  id:'';


 constructor(private formBuilder: FormBuilder, public setupService : setupService, private modalService: BsModalService) { 



 }

 edit_user(edi_user_tmodal: TemplateRef<any>, usrdtId, usrName, dName, usGndr,admnacs,roleu) {
   
    this.modalRef = this.modalService.show(edi_user_tmodal,{ backdrop: 'static', keyboard: false });
    this.userDtlId = usrdtId;
    this.usName = usrName;  
    this.dptName = dName;
    this.gndr = usGndr;
    this.admn = admnacs;
    this.role=roleu; 

    }

    editTeam(editTeammodal: TemplateRef<any>, TId, TName, THead, TMemebers) {
     
      this.modalRef = this.modalService.show(editTeammodal,{ backdrop: 'static', keyboard: false });
      this.tmId = TId;
      this.tm_name = TName;  
      this.tm_head = THead;
      this.tm_no = TMemebers; 
      }

deleteuser(deleteusermodal: TemplateRef<any>, usrdtId) {
 
  
  this.modalRef = this.modalService.show(deleteusermodal,{ backdrop: 'static', keyboard: false });
  this.userDtlId = usrdtId;
  

  }
  deleteTeam(deleteTeammodal: TemplateRef<any>, TId) {
  
    this.modalRef = this.modalService.show(deleteTeammodal,{ backdrop: 'static', keyboard: false });
    this.tmId = TId;
    // alert(this.tmId);
  
    }

  ngOnInit() {


    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.userId = localStorage.getItem('user_Id');

    // this.regId = localStorage.getItem('registeredId');
    // console.log(this.regId);

    this.userForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      dename: ['', [Validators.required]],
      gndr: ['', [Validators.required]],
      role:['',[Validators.required]], //modification
      admacs : ['', [Validators.required]]
     });

     this.teamForm = this.formBuilder.group({
      teamname: ['', [Validators.required]],
      teamhead: ['', [Validators.required]],
      teammbrs: ['', [Validators.required]],
      memname: ['', [Validators.required]]
     });
     this.editForm = this.formBuilder.group({
      uname: ['', [Validators.required]],
      dpname: ['', [Validators.required]],
      gnr: ['', [Validators.required]],
      role:['',[Validators.required]],
      aacs : ['', [Validators.required]]
     });

     this.editTeamForm = this.formBuilder.group({
      tname: ['', [Validators.required]],
      thname: ['', [Validators.required]],
      nom: ['', [Validators.required]]
      
     });

    

    this.setupService.getDeptByUser(this.userId).subscribe((data: {}) => {
      console.log(data);
      this.dl = data;
      this.deptList = this.dl.data;
  }, (err) => {
   console.log(err);
  });


    this.getUsersData();
      
    this.getTeamsData();

}
getUsersData(){
  this.setupService.getUserByUser(this.userId).subscribe((data: {}) => {
    console.log(data);
    this.ul = data;
    this.usList = this.ul.data;
     }, (err) => {
      console.log(err);
    });


this.dropdownSettings = {
  singleSelection: false,
  idField: 'user_dtls_Id',
  textField: 'User_Name',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  itemsShowLimit: 3,
  allowSearchFilter: true
};
}
getTeamsData(){

  this.setupService.getTeamByUser(this.userId).subscribe((data: {}) => {
    console.log(data);
    this.tl = data;
    this.tmList = this.tl.data;
     }, (err) => {
      console.log(err);
    });
}
get f() { return this.userForm.controls; }


onSubmit() {
  this.submitted = true;
  if (this.userForm.valid) {

    var params = { 
      user_id : this.userId,
      dept_id : this.deprt_id,
      user_name : this.user_name,
      user_admin_access : this.user_admin_access,
      user_gender : this.user_gender,
      user_role:this.role
      };
    console.log(params);
 
    if(params){

      this.setupService.addFunction(params, "/api/users").then((result) =>{
        console.log(result);
         alert("User Saved Successfully");
         this.getUsersData();
    }, (err) => {
      console.log(err);
    });
     

  }
  }

}
get d() { return this.teamForm.controls; }
onAdd(){
  this.subsecond = true;
  if (this.teamForm.valid) {
     var params = {
      userId: this.userId ,
      team_name : this.team_name,
      team_head : this.team_head ,
      team_members : this.team_members,
      team_users_ids:"2"

     }
     console.log(params);
 
     if(params){
 
         this.setupService.addFunction(params, "/api/teams").then((result) =>{
       console.log(result);
        alert("Team Saved Successfully");
        this.getTeamsData();
   }, (err) => {
     console.log(err);
   });
   
  }
}

}
get g() { return this.editForm.controls; }
onEditUser(){
  
  this.subthird = true;
  if (this.editForm.valid) {
    var params = {
      user_id : this.userId,
       dept_id: this.dptName,
        user_name : this.usName ,
      user_admin_access : this.admn, 
      user_gender : this.gndr,
      user_role:this.role,
       user_detail_Id : this.userDtlId
    }
    console.log(params);
    if(params){
     
      this.setupService.editu(params, "/api/users").then((result) =>{
        console.log(result);
         alert("User Updated Successfully");
       this.getUsersData();
    }, (err) => {
      console.log(err);
    });
   }
  }
}

get h() { return this.editTeamForm.controls; }


onEditTeam(){
  
  var params = {
      userId : this.userId ,
       team_name: this.tm_name, 
       team_head: this.tm_head ,
      team_members: this.tm_no,
     
      team_users_ids:"1",
      TeamId : this.tmId,
    }
    console.log(params);
    if(params){
    
     
      this.setupService.editu(params, "/api/teams").then((result) =>{
        console.log(result);
         alert("Team Updated Successfully");
         this.getTeamsData();
    }, (err) => {
      console.log(err);
    });
   }
  
}

onDeleteTeam(){

  var params = {
    
 
  
    TeamId : this.tmId,
  }
  console.log(params);
  if(params){
  
   
    this.setupService.editu(params, "/api/teams/delete").then((result) =>{
      console.log(result);
       alert("Team UDeleted Successfully");
       this.getTeamsData();
  }, (err) => {
    console.log(err);
  });
 }

}

onDeleteUser(){
 
 var params = {
    user_detail_Id: this.userDtlId,
  }
  console.log(params);
  if(params){

   
    this.setupService.editu(params, "/api/users/delete").then((result) =>{
      console.log(result);
       alert("User Deleted Successfully");
        this.getUsersData();
  }, (err) => {
    console.log(err);
  });
 }

}




}
