import { Component, OnInit, TemplateRef } from '@angular/core';
import {  FormControl, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl  } from '@angular/forms';
import { setupService } from '../services/setupService';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {
  modalRef: BsModalRef;
  
  urllink:string ="/assets/img/profile.png"
  selectFiles(event)
  {
    console.log("Hello World");
    if(event.target.files)
    {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.urllink = event.target.result
      }
    }
  }

     oneOrg : any; deptList : any; regId : any; userData : any; userId : any; dept_name: any; orgID : any;
     ord_id:any;
     userName : any; dl : any;

 org_name: '';  org_website: '';  mobile: ''; org_industry : '' ; orgLogo : '' ;
             org_about : '';
   deptname : ''; dname : ''; did : '';

   orgForm : FormGroup; deptForm : FormGroup; editForm : FormGroup;
    submitted = false; subsecond = false; subthird = false;
    subpro=false;

  constructor(private formBuilder: FormBuilder, public setupService : setupService, private modalService: BsModalService) { }

  edit(editmodal: TemplateRef<any>, name, id) {
    this.modalRef = this.modalService.show(editmodal,{ backdrop: 'static', keyboard: false });
    this.dname = name;  
    this.deptname = this.dname;
    this.did = id; 
    }
   

  ngOnInit() {

    this.userId = localStorage.getItem('user_Id');

    // this.regId = localStorage.getItem('registeredId');
    // console.log(this.regId);

    this.orgForm = this.formBuilder.group({
      cmpname: ['', [Validators.required]],
      website: ['', [Validators.required]],
      mobile : ['', [Validators.required]],
      industry : ['', [Validators.required]]
     });

     this.deptForm = this.formBuilder.group({
      deptname: ['', [Validators.required]]
     });
     this.editForm = this.formBuilder.group({
      dept: ['', [Validators.required]]
     });

    // this.setupService.getOrgByReg(this.regId).subscribe((data: {}) => {
    //       this.userData = data;
    //      console.log(this.userData.data.User_Id);
    //      this.userId = this.userData.data.User_Id; 
    //     this.userName = this.userData.data.Profile_FirstName;

         this.setupService.getOrgByUser(this.userId).subscribe((data: {}) => {
           this.oneOrg = data;
           console.log(data);
          
           this.orgID = this.oneOrg.data.Org_Id;
           this.org_name = this.oneOrg.data.Org_CompName;
           this.org_website = this.oneOrg.data.Org_Website;
           this.mobile = this.oneOrg.data.Org_Phone;
           this.org_industry = this.oneOrg.data.Org_Industry;

           this.setupService.getDeptByUser(this.userId).subscribe((data: {}) => {
            console.log(data);
            this.dl = data;
            this.deptList = this.dl.data;
        }, (err) => {
         console.log(err);
        });

     
         }, (err) => {
           console.log(err);
         });

    // }, (err) => {
    //   console.log(err);
    // });
   
  
  }


get f() { return this.orgForm.controls; }



onSubmit() {
//  alert();
  this.submitted = true;
  if (this.orgForm.valid) {
    if(this.orgID){
      alert('Org already saved')
    }
    else{
    var params = {
                userId :this.userId ,
                regId : this.regId,
                 org_name : this.org_name ,
                org_website: this.org_website,
                mobile : this.mobile  ,
                org_industry : this.org_industry ,
                orgLogo: 'logo',
                org_about : 'dummy'
    }
    console.log(params);
 
    if(params){
     
     this.setupService.addFunction(params, "/api/orgs").then((result) =>{
       console.log(result);
        alert("Org Saved Successfully");
        // window.location.href = "/org";
   }, (err) => {
     console.log(err);
   });
  }
}
  }

}
get d() { return this.deptForm.controls; }
onAdd(){
  this.subsecond = true;
  if (this.deptForm.valid) {

    var params = {
      userId : this.userId , dept_name: this.dept_name, dept_createdBy: this.userName
    }
    console.log(params);
 
    if(params){
     
     this.setupService.addFunction(params, "/api/departments").then((result) =>{
       console.log(result);
        alert("Department Saved Successfully");
        this.setupService.getDeptByUser(this.userId).subscribe((data: {}) => {
          console.log(data);
          this.dl = data;
          this.deptList = this.dl.data;
      }, (err) => {
       console.log(err);
      });
   }, (err) => {
     console.log(err);
   });
  }
    
  }
}
get g() { return this.editForm.controls; }
onEdit(){
  this.subthird = true;
   if (this.editForm.valid) {

    var params = {
      userId : this.userId , dt_name: this.deptname, dt_id: this.did
    }
    console.log(params);
 
    if(params){
     
     this.setupService.editFunction(params, "/api/departments").then((result) =>{
       console.log(result);
        alert("Department Updated Successfully");
        this.setupService.getDeptByUser(this.userId).subscribe((data: {}) => {
          console.log(data);
          this.dl = data;
          this.deptList = this.dl.data;
      }, (err) => {
       console.log(err);
      });
   }, (err) => {
     console.log(err);
   });
  }
    
   }
}

onEditorg(){
 
   
   this.subpro = true;
   if (this.orgForm.valid) {
     var params = {

      userId :this.userId ,
       org_name : this.org_name ,
      org_website: this.org_website,
      mobile : this.mobile  ,
      org_industry : this.org_industry ,
      orgLogo: 'logo',
      org_about : 'dummy',
      orgId:this.orgID
       
     
       }
     console.log(params);
     if(params){
       this.setupService.editFunction(params, "/api/orgs").then((result) =>{
         console.log(result);
         alert("Organization Updated Successfully");
       
        
     }, (err) => {
       console.log(err);
     });
   
  
       
   }
 }
 
 }


 onsave(){


  if (this.orgForm.valid) {
 
   this.onEditorg()
   
  }
   else
 
   { 
     
     
     this.onSubmit()
   }
 
 
 }


}
