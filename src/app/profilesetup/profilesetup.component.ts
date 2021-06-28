import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
} from "@angular/forms";
import { formControlBinding } from "@angular/forms/src/directives/ng_model";
import { setupService } from "../services/setupService";
@Component({
  selector: "app-profilesetup",
  templateUrl: "./profilesetup.component.html",
  styleUrls: ["./profilesetup.component.css"],
})
export class ProfilesetupComponent implements OnInit {
  profileForm: FormGroup;
  locationForm: FormGroup; //modified

  subsecond = false;
  subpro = false;

  submitted = false;
  regId: any;
  profData: any;
  profId: any;
  firstName: " ";
  lastName: " ";
  email: " ";
  phone: " ";
  designation: " ";
  image: "";
  date: "";
  status: "";

  constructor(
    private formBuilder: FormBuilder,
    public setupService: setupService
  ) {}

  ngOnInit() {
    this.regId = localStorage.getItem("registeredId");
    console.log(this.regId);

    this.profileForm = this.formBuilder.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      mobile: ["", [Validators.required]],
    });

    //modified
    this.locationForm = this.formBuilder.group({
      locname: ["", [Validators.required]],
      city: ["", [Validators.required]],
      cntry: ["", [Validators.required, Validators.email]],
      zone: ["", [Validators.required]],
    });
    if (this.regId != "null") {
      this.setupService.getProfByReg(this.regId).subscribe(
        (data: {}) => {
          this.profData = data;
          console.log(this.profData.data);

          this.profId = this.profData.data.Profile_Id;
          this.firstName = this.profData.data.Profile_FirstName;
          this.lastName = this.profData.data.Profile_LastName;
          this.email = this.profData.data.Profile_Email;
          this.phone = this.profData.data.Profile_Mobile;
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
    }
  }
  get f() {
    return this.profileForm.controls;
  }

  get d() {
    return this.locationForm.controls;
  }

  onSubmit() {
    alert("submit");
    this.submitted = true;
    if (this.profileForm.valid) {
      if (this.profId) {
        window.location.href = "/org";
      } else {
        var params = {
          regId: this.regId,
          first_name: this.firstName,
          last_name: this.lastName,
          mobile: this.phone,
          email: this.email,
          image: "some image",
          status: "0",
        };
        if (params) {
          console.log(params);
          this.setupService.addProfile(params, "/api/profiles").then(
            (result) => {
              console.log(result);
              alert("Profile Saved Successfully");
              window.location.href = "/org";
            },
            (err) => {
              console.log(err);
              //  this.connectForm.reset();
              //  this.toast.error("Something went wrong!");
            }
          );
        }
      }
    }
  }

  onEditProfile() {
    this.subpro = true;
    if (this.profileForm.valid) {
      var params = {
        first_name: this.firstName,
        last_name: this.lastName,
        mobile: this.phone,
        email: this.email,
        image: "123",
        profileId: this.profId,
      };
      console.log(params);
      if (params) {
        this.setupService.editu(params, "/api/profiles").then(
          (result) => {
            console.log(result);
            alert("Profile Updated Successfully");
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }
  }

  onsave() {
    if (this.profileForm.valid) {
      this.onEditProfile();
    } else {
      this.onSubmit();
    }
  }
}
