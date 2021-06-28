import { Component, OnInit } from '@angular/core';
import {  FormControl, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl  } from '@angular/forms';
import { setupService } from '../services/setupService';
import { MustMatch } from '../_helpers/must-match';
import { CustomValidators } from '../custom-validators'
import { NotificationsService} from 'angular2-notifications'


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  loginForm : FormGroup;  submitted = false; passwordValidity = false;passwordValidity1 = true;


  hasNumber:any;
  hasCapitalCase:any;
  hasSmallCase:any;
  subpass=false;
  psd:'';
  id:'';
  pass:"";
  pass1:"";
  pass2:"";
  regid:any;
  success:any;
  psw_res:any;
  valpass=false;
  valpass1=true;


  constructor(private formBuilder: FormBuilder,public setupService:setupService,private service:NotificationsService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      password1: ['', [Validators.required, Validators.minLength(8), Validators.compose([
        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true })  
      ])]],
      
      password2: ['', Validators.required]
    }, {
      validator: MustMatch('password1', 'password2'),
    });

    console.log(this.loginForm.controls['password1'].hasError('hasNumber'));
}
get f() { return this.loginForm.controls; }

opened = true ;


  toggleSidebar() {
    this.opened = !this.opened;
  }

  tooglepass()
  {
    this.valpass=!this.valpass;
  }

  

onSubmit() {

  this.submitted = true;

  this.hasNumber=this.loginForm.controls['password1'].hasError('hasNumber');
  this.hasCapitalCase=this.loginForm.controls['password1'].hasError('hasCapitalCase');
  this.hasSmallCase=this.loginForm.controls['password1'].hasError('hasSmallCase');
  console.log(this.loginForm.controls['password1'].value);

  let oldpass=localStorage.getItem('oldpass');
  console.log(oldpass);

  this.regid=localStorage.getItem('registeredId');
  console.log(this.regid);

  let currpass=this.loginForm.controls['password'].value;

  console.log(this.loginForm.valid);


  if (this.loginForm.valid)
  {
    console.log("Hello world");
    if(oldpass==currpass)
    {
      var params=
      {
        new_password:this.loginForm.controls['password1'].value,
        reg_id:this.regid
      };
      console.log(params);

      this.setupService.addFunction(params,"/api/login/updatePassword").then((result) =>{
        console.log(result);

        this.psw_res=result;

        if(this.psw_res.success==1)
        {
          this.submitted = false;
          this.loginForm.reset();
          this.valpass=true;
          this.valpass1=false;
        }
        
        
      });
    }
    else
    {
      
    }
  }

} 


}


