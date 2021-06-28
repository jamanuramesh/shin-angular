import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
} from "@angular/forms";
import { setupService } from "../services/setupService";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  success1 = false;

  constructor(
    private formBuilder: FormBuilder,
    private setupService: setupService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      work_mail: ["", [Validators.required, Validators.email]],
      psw: ["", [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.setupService.login(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          console.log(result.success);
          this.success1 = false;

          if (result.success == 1) {
            alert("Login Successfully");
            let regId = result.data.Reg_Id;
            let fname = result.data.Full_name;
            let lname = result.data.Last_name;
            let Userid = result.data.User_Id;
            console.log(Userid);
            let pass = this.loginForm.controls["psw"].value;
            localStorage.setItem("oldpass", pass);
            localStorage.setItem("fullname", fname);
            localStorage.setItem("lastname", lname);
            localStorage.setItem("registeredId", regId);
            localStorage.setItem("user_Id", Userid);
            if (result.data.Org_Id != null) {
              localStorage.setItem("email", this.f.work_mail.value);
              window.location.href = "/jbdashboard";
            } else {
              window.location.href = "/profilesetup";
            }
          } else {
            this.success1 = true;
            console.log("Hello world");
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
