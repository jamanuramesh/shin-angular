import { Component, OnInit, TemplateRef } from '@angular/core';
import {  FormControl, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl  } from '@angular/forms';
import { setupService } from '../services/setupService';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locationForm : FormGroup; 
  LocData:any;
  Locform: FormGroup;
  deleteform: FormGroup;
  
  subsecond = false; 
  subf=false;
  LocId:any;
  regId : any
  loc_name:" ";
  loc_city:" ";
  loc_state:" ";
  loc_country:" ";
  loc_zip:" ";
  tl:any;
  dl:any;
  tmloc:any;
  userId:any;

  loc_id:any;

  locid:any;
  name:"";
  city:"";
  state: "";
  zip:"";
  country:"";

  userName:any;
  user_Id:any;
  userData:any;
  userID:any;

  modalRef: BsModalRef;

  constructor(private formBuilder: FormBuilder, public setupService : setupService, private modalService: BsModalService) { }

  editLocation(editLoc: TemplateRef<any>, LId, LName, Lcity, Lstate,Lcountry,Lzip) {
    this.modalRef = this.modalService.show(editLoc,{ backdrop: 'static', keyboard: false });
    this.name = LName;
    this.city = Lcity;
    this.state = Lstate; 
    this.country=Lcountry;
    this.zip=Lzip;
   
    this.locid = LId;
      
  
    
    
   

    }



    
    deletelocation(editLoc: TemplateRef<any>, LId, LName, Lcity, Lstate,Lzip,Lcountry) {
      this.modalRef = this.modalService.show(editLoc,{ backdrop: 'static', keyboard: false });
      this.locid = LId;
      this.name = LName;  
      this.city = Lcity;
      this.state = Lstate; 
      this.country=Lcountry;
      this.zip=Lzip;
     
      }
  


  ngOnInit() {

    this.regId = localStorage.getItem('registeredId');
    console.log(this.regId);

    this.locationForm = this.formBuilder.group({
      locname: ['', [Validators.required]],
      state:['', [Validators.required]],
      zip: ['',[Validators.required]],
      city: ['', [Validators.required]],
      cntry: ['', [Validators.required]],
      zone : ['', [Validators.required]]
    


   }); 


   this.Locform = this.formBuilder.group({
    loc_name: ['', [Validators.required]],
    loccity: ['', [Validators.required]],
    locstate: ['', [Validators.required]],
    cntry:['',[Validators.required]],
    loczip:['', [Validators.required]]
   

   });

   this.setupService.getOrgByReg(this.regId).subscribe((data: {}) => {
   
    this.userData = data;
   console.log(this.userData);
   this.user_Id = this.userData.data.User_Id; 
    console.log(this.user_Id);
  this.userName = this.userData.data.Profile_FirstName;
 


    
  this.setupService.getlocByReg(this.user_Id).subscribe((data: {}) => {
   
    this.LocData = data;
   console.log(this.LocData);

   this.LocId = this.LocData.data.Loc_Id;
   this.loc_name=this.LocData.data.loc_name;
   this.loc_city=this.LocData.data.loc_city;
   this.loc_state=this.LocData.data.loc_state;
   this.loc_country=this.LocData.data.loc_country;
   this.loc_zip=this.LocData.data.loc_zip;

   this.tl = data;
   this.tmloc = this.tl.data;

  }, (err) => {
    console.log(err);
  });
});
 }

 getLocation(){
  this.setupService.getlocByReg(this.user_Id).subscribe((data: {}) => {
    console.log(data);
    this.dl = data;
    this.tmloc = this.dl.data;
     }, (err) => {
      console.log(err);
    });
}





  get d() { return this.locationForm.controls; }
  get f() { return this.Locform.controls; }

  
onlocSubmit(){
  this.subsecond=true;
 if(this.locationForm.valid )
 {
   if(this.LocId){

     window.location.href="/org";

   }else{
     var params={
       userId:this.user_Id,
       loc_name:this.loc_name,
       loc_city:this.loc_city,
       loc_country:this.loc_country,
       loc_state:this.loc_state,
       loc_zip:this.loc_zip
     }
     if(params){
       console.log(params);
      this.setupService.addProfile(params, "/api/officeLocations").then((result) =>{
        console.log(result);
         alert("Location Saved Successfully");
         this.getLocation();
      
    }, (err) => {
      console.log(err);
     //  this.connectForm.reset();
     //  this.toast.error("Something went wrong!");
    });

    

       }
     }
   }


 }



  

 onEditLocation(){
  this.subf = true;
  if (this.Locform.valid) {
    var params = {

      userId:this.user_Id,
      loc_name:this.name,
      loc_city:this.city,
      loc_state:this.state,
      loc_country:this.country,
      loc_zip:this.zip,
      loc_id:this.locid
      }
    console.log(params);
    if(params){
     
      this.setupService.editFunction(params, "/api/officeLocations").then((result) =>{
        console.log(result);
         alert("Location Updated Successfully");
        this.getLocation();
       
    }, (err) => {
      console.log(err);
    });
   }
  }
}



onDeleteLocation(){

  alert(this.locid)
  
    console.log(this.locid);
    if(this.locid){
     
      this.setupService.deleteloc(this.locid).subscribe((result) =>{
        console.log(result);
         alert("Location Deleted  Successfully");
        
       
    }, (err) => {
      console.log(err);
    });
   }
  }
}