import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { setupService } from "../services/setupService";

@Component({
  selector: "app-jbdashboard",
  templateUrl: "./jbdashboard.component.html",
  styleUrls: ["./jbdashboard.component.css"],
})
export class JbdashboardComponent implements OnInit {
  public userData;
  public userId;
  public userData1;
  userData2: any;
  jobtype: any;
  regId: any;
  id: any;
  email: any;
  fname: any;
  lname: any;
  opened1 = false;
  JobPostion_Name: string;
  public isCollapsed = false;

  constructor(private http: HttpClient, public setupService: setupService) {}

  onclick(i) {
    this.id = i;
    console.log(this.id);
    localStorage.setItem("index", this.id);
  }

  ngOnInit() {
    this.email = localStorage.getItem("email");
    this.fname = localStorage.getItem("fullname");
    this.lname = localStorage.getItem("lastname");

    console.log();
    this.regId = localStorage.getItem("registeredId");
    console.log(this.regId);

    this.userId = localStorage.getItem("user_Id");

    this.setupService.getJobByUser(this.userId).subscribe((data: {}) => {
      this.userData1 = data;
      this.userData2 = this.userData1.data;
      console.log(this.userData2);
    });
  }

  onlogout() {
    localStorage.removeItem("registeredId");
    localStorage.removeItem("email");
  }

  toggleprofile() {
    this.opened1 = !this.opened1;
  }

  search() {
    if (this.JobPostion_Name == "") {
      this.ngOnInit();
    } else {
      this.userData2 = this.userData2.filter((res) => {
        if (
          res.JobPostion_Name.toLocaleLowerCase().match(
            this.JobPostion_Name.toLocaleLowerCase()
          )
        ) {
          return res.JobPostion_Name.toLocaleLowerCase().match(
            this.JobPostion_Name.toLocaleLowerCase()
          );
        }

        if (
          res.JobInfo_Skills.toLocaleLowerCase().match(
            this.JobPostion_Name.toLocaleLowerCase()
          )
        ) {
          return res.JobInfo_Skills.toLocaleLowerCase().match(
            this.JobPostion_Name.toLocaleLowerCase()
          );
        }

        if (
          res.JobInfo_Min_Exp.toLocaleLowerCase().match(
            this.JobPostion_Name.toLocaleLowerCase()
          )
        ) {
          return res.JobInfo_Min_Exp.toLocaleLowerCase().match(
            this.JobPostion_Name.toLocaleLowerCase()
          );
        }
      });
    }
  }
}
