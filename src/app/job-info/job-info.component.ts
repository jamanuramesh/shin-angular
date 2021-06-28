import { Component, Input, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { setupService } from '../services/setupService';
import {  FormControl, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl  } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
//import{FileSelectDirective, FileUploader} from 'ng2-file-upload';
import {MatIconModule} from '@angular/material/icon';

export interface Fruit{
  name: string;
} 

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.css']
})


export class JobInfoComponent implements OnInit {
    
    visible=true;
    selectable=true;
    removable=true;
    addOnBlur=true; jbResut : any;

    readonly separatorKeysCodes: number[] =[ENTER, COMMA];
    fruits :Fruit[] = [
      
    ];

    add(event : MatChipInputEvent): void {

      const input=event.input;
      const value=event.value;

      if((value || ''). trim()) {
        this.fruits.push({name:value.trim()});
      }

      if(input) 
      {
        input.value='';
      }


    }


    remove(fruit: Fruit): void 
    {
  const index=this.fruits.indexOf(fruit);

  if(index>= 0){
    this.fruits.splice(index, 1);
  }

    }


      //CODE FOR FILE UPLOADING

      fileToUpload: File = null;
      uploadedFiles: Array<File>; //added
      urllink:string ="/assets/img/profile.png"
      modalService: any;
      modalRef: any;
      fileUploadService: any;
      selectFiles(event)
        {​​​​​
      console.log("Hello World");
      if(event.target.files)
          {​​​​​
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {​​​​​
      this.urllink = event.target.result
            }​​​​​
          }​​​​​
        }​​​​​





  value: number = 0;
  highValue: number = 30;
  options: Options = {
    floor: 0,
    ceil: 100
  };
  LocData : any;
  jbList : any;  jobList : any; dl : any; deptList : any;
  regId : any;  userData : any; userId : any; userName : any; vl : any; jbd : any;
  jobInfoForm : FormGroup;  submitted = false;

  JobPostion_Name:'';dept_id : ''; user_id: '';  loc_id: ''; job_category: ''; job_type: ''; hiring_type: '';
  no_of_openings: ''; job_desc: ''; min_salary: ''; max_salary: ''; min_exp: ''; max_exp: ''; skills: '';
  expinmin: ''; expinmax : '';

  constructor(private formBuilder: FormBuilder, public setupService : setupService) { }

  ngOnInit() {
    this.regId = localStorage.getItem('registeredId');
    console.log(this.regId);

    this.jobInfoForm = this.formBuilder.group({
      jobname: ['', [Validators.required]],
      // bsunit: ['', [Validators.required]],
      // email: ['', [Validators.required, Validators.email]],
      jbcategory : ['', [Validators.required]],
      jbtype : ['', [Validators.required]],
      dpname : ['', [Validators.required]],
      location : ['', [Validators.required]],
      htype : ['', [Validators.required]],
      openings : ['', [Validators.required]],
      jobdesc : ['', [Validators.required]],
      jobskill : ['', [Validators.required]],
      mnslry : ['', [Validators.required]],
      mxslry : ['', [Validators.required]],
      mnexp : ['', [Validators.required]],
      mxexp : ['', [Validators.required]],
      inmnexp: ['', [Validators.required]],
      inmxexp : ['', [Validators.required]]
     });

     this.userId = localStorage.getItem('user_Id');
     
      this.setupService.getData("/api/jobInfos/getJobPos").then((result) =>{
      this.jbList = result;
      this.jobList = this.jbList.data;
      console.log(this.jobList);
    }, (err) => {
      console.log(err);
    });

    this.setupService.getDeptByUser(this.userId).subscribe((data: {}) => {
      console.log(data);
      this.dl = data;
      this.deptList = this.dl.data;
  }, (err) => {
   console.log(err);
  });

  this.setupService.getlocByReg(this.userId).subscribe((data: {}) => {
   
    this.LocData = data;
   console.log(this.LocData);
  }, (err) => {
    console.log(err);
  });

// });
}
onSortChange(e) {
  // alert(e.target.value);
  this.vl = e.target.value;
      this.setupService.getJdByJob(this.vl).subscribe((data: {}) => {
      console.log(data);
      this.jbd = data;
      this.job_desc = this.jbd.data.Job_brief;
  }, (err) => {
   console.log(err);
  });
}



get f() { return this.jobInfoForm.controls; }

onSubmit() {
//  alert();
  this.submitted = true;
  if (this.jobInfoForm.valid) {
    // alert();
    var params = {
      JobPostion_Name: this.JobPostion_Name, dept_id : this.dept_id, user_id: this.userId , 
      loc_id: this.loc_id,  job_category: this.job_category , job_type: this.job_type ,
       hiring_type: this.hiring_type ,  no_of_openings: this.no_of_openings , 
      job_desc: this.job_desc , min_salary: this.min_salary , 
      max_salary: this.max_salary, 
      min_exp: this.min_exp + ' ' + this.expinmin, 
      max_exp: this.max_exp + ' ' + this.expinmax,
       skills: this.skills
    }
    console.log(params);
    if(params){
      this.setupService.addFunction(params, "/api/jobInfos").then((result) =>{
        console.log(result);
         alert("Job Saved Successfully");
          this.jbResut = result;
         var jbInfo_id = this.jbResut.Job_Info_Id;
          localStorage.setItem('jbId', jbInfo_id);

        window.location.href = "/approval";
    }, (err) => {
      console.log(err);
    });
    }
    
  }

}


}
