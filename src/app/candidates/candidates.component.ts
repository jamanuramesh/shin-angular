import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ViewChildren,
} from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
} from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { setupService } from "../services/setupService";
import { MatFormFieldBase } from "@angular/material";
declare var $;
import { Chart } from "node_modules/chart.js";
@Component({
  selector: "app-candidates",
  templateUrl: "./candidates.component.html",
  styleUrls: ["./candidates.component.css"],
})
export class CandidatesComponent implements OnInit {
  //  src = `D:/SHIN-20TH-MARCH-master/src/Uploads/Sriram NodeJS.pdf`;

  // src = `http://192.168.1.5:8081/Sriram%20NodeJS.pdf`;

  public loading = false;
  deptForm: FormGroup;
  popupForm: FormGroup;
  rankForm: FormGroup;
  subsecond = false;
  subthird = false;
  opened1 = false;

  sub = false;

  email: any;
  fname: any;
  win: any = window;

  lname: any;

  userId: any;
  res_id: any;
  res_name: any;
  rs_data: any;
  path: any;
  resmId: any;
  fle_data: any;
  fle: any;
  cnd_resume: any;
  viw_res_modal: any;
  tl: {};
  cname: any;
  cemail: any;
  cno: any;
  cloc: any;
  source: any;
  public isCollapsed = false;
  dept_id: 0;
  selectedDept: number = 0;
  deptList: any;
  dl: any;
  Candidate_Name: "";
  Candidate_Edu: any;
  Candidate_Exp: any;
  Candidate_Skls: any;
  Candidate_Phone: "";
  Candidate_Email: "";
  Candidate_Location: "";
  Candidate_Id: "";
  FileLocation: "";
  Candidate_Education: "";
  Candidate_Skills: "";
  User_Id: any;
  JobPosition_Id: "";
  Candidate_Summary: "";
  Candidate_Exp_Months: "";
  Candidate_Exp_Years: "";
  jobpid: any;
  expyear: any;
  candid: any;
  floc: any;
  csum: any;
  edu: any;
  cskills: any;
  expmonth: any;
  JobPostion_Name: string;
  pdf_fle: any;
  doc: any;
  userData1: any;
  userData2: any;
  rnk_mdl: any;
  edt_mdl: any;
  c_name: "";
  c_email: "";
  c_phone: "";
  c_location: "";
  c_filelocation: "";
  c_yexp: "";
  c_mexp: "";
  c_edu: "";
  c_summary: "";
  c_skills: "";
  c_id: "";
  c_jbid: "";
  c_uid: "";
  viewer: any;
  selectedType: any; //'docx';
  rnk_res: any;
  rnk_msg: any;
  jd: any;
  skill: any;
  summary: any;
  role: any;
  responsibility: any;

  toggleprofile() {
    this.opened1 = !this.opened1;
  }

  onlogout() {
    localStorage.removeItem("registeredId");
    localStorage.removeItem("email");
  }
  morestat(morestatmodal: TemplateRef<any>) {
    this.modalRef = this.modalService.show(morestatmodal, {
      backdrop: "static",
      keyboard: false,
    });
  }

  modalRef: BsModalRef;
  res_modal: BsModalRef;
  morestatmodal: BsModalRef;
  analysis_modal: BsModalRef;
  // @ViewChild("fileDropRef") fileDropEl: ElementRef;
  files: any[] = [];
  submitted = false;
  candsList: any;
  tList: any;
  ng;
  barchart = [];
  // @ViewChildren("mycharts") allMyCanvas: any;
  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public setupService: setupService
  ) {}

  editcand(
    morestatmodal: TemplateRef<any>,
    candiname,
    candiemail,
    candino,
    candiloc,
    cand_edu,
    cand_exp,
    cand_skls,
    candiid
  ) {
    this.edt_mdl = this.modalService.show(morestatmodal, {
      backdrop: "static",
      keyboard: false,
    });

    this.Candidate_Name = candiname;
    this.Candidate_Email = candiemail;
    this.Candidate_Phone = candino;
    this.Candidate_Location = candiloc;
    this.Candidate_Edu = cand_edu;
    this.Candidate_Exp = cand_exp;
    this.Candidate_Skls = cand_skls;
    this.Candidate_Id = candiid;
  }

  rankcand(analysis_modal: TemplateRef<any>, candiid) {
    this.rnk_mdl = this.modalService.show(analysis_modal, {
      backdrop: "static",
      keyboard: false,
    });
    this.Candidate_Id = candiid;
  }

  registerForm = new FormGroup({
    File: new FormControl(),
  });

  takedemo(demomodal: TemplateRef<any>) {
    this.modalRef = this.modalService.show(demomodal, {
      backdrop: "static",
      keyboard: false,
    });
  }
  resm_modal(resume_modal: TemplateRef<any>) {
    this.res_modal = this.modalService.show(resume_modal, {
      backdrop: "static",
      keyboard: false,
    });
  }
  view_modal(view_res: TemplateRef<any>, candiid, resId) {
    this.viw_res_modal = this.modalService.show(view_res, {
      backdrop: "static",
      keyboard: false,
    });
    this.Candidate_Id = candiid;
    this.resmId = resId;
    this.loading = true;
    this.setupService.getResume(this.resmId).subscribe(
      (data: {}) => {
        this.fle = data;
        this.fle_data = this.fle.data.resume;

        let fle_type = this.fle_data.substring(
          this.fle_data.lastIndexOf(".") + 1
        );

        if (fle_type == "pdf") {
          this.pdf_fle = true;
        } else if (fle_type == "doc" || "docx") {
          alert();
          this.pdf_fle = false;
        }
        //   this.viewer = 'office';
        //  this.selectedType =  'docx';
        //this.cnd_resume = "http://192.168.1.7:8081/" + this.fle_data;
        this.cnd_resume = "assets/dashboard.pdf";
        //this.doc = "http://192.168.1.2:8081/" + this.fle_data;
        this.loading = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.userId = localStorage.getItem("user_Id");
    this.email = localStorage.getItem("email");
    this.fname = localStorage.getItem("fullname");
    this.lname = localStorage.getItem("lastname");

    this.User_Id = localStorage.getItem("user_Id");
    console.log(this.User_Id);

    this.popupForm = this.formBuilder.group({
      cname: ["", [Validators.required]],
      cemail: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        ],
      ],
      cno: ["", [Validators.required]],
      c_exp: ["", Validators.required],
      cskills: ["", Validators.required],
      ceducation: ["", Validators.required],
      cloc: ["", [Validators.required]],
    });

    this.registerForm = this.formBuilder.group({
      profile: ["", [Validators.required]],
    });

    this.rankForm = this.formBuilder.group({
      jbname: ["", [Validators.required]],
      skl_num: ["", [Validators.required]],
      rol_num: ["", [Validators.required]],
      sum_num: ["", [Validators.required]],
      res_num: ["", [Validators.required]],
    });
    this.getCands();
    this.setupService.getJobByUser(this.userId).subscribe((data: {}) => {
      this.userData1 = data;
      this.userData2 = this.userData1.data;
      console.log(this.userData2);
    });

    this.setupService.getDeptByUser(this.userId).subscribe(
      (data: {}) => {
        this.deptList = data;
        this.dl = data;
        this.deptList = this.dl.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCands() {
    this.loading = true;
    this.setupService.getData("/api/candidates").then(
      (result) => {
        this.loading = false;
        this.tList = result;
        this.candsList = this.tList.data;
        setTimeout(() => {
          this.drawChartsforCandidates();
        }, 200);
      },
      (err) => {
        this.loading = true;
        console.log(err);
      }
    );
  }

  search() {
    if (this.JobPostion_Name == "") {
      this.ngOnInit();
    } else {
      this.candsList = this.candsList.filter((res) => {
        if (
          res.Candidate_Name.toLocaleLowerCase().match(
            this.JobPostion_Name.toLocaleLowerCase()
          )
        ) {
          return res.Candidate_Name.toLocaleLowerCase().match(
            this.JobPostion_Name.toLocaleLowerCase()
          );
        }

        if (
          res.Candidate_Location.toLocaleLowerCase().match(
            this.JobPostion_Name.toLocaleLowerCase()
          )
        ) {
          return res.Candidate_Location.toLocaleLowerCase().match(
            this.JobPostion_Name.toLocaleLowerCase()
          );
        }

        if (
          res.Candidate_Skills.toLocaleLowerCase().match(
            this.JobPostion_Name.toLocaleLowerCase()
          )
        ) {
          return res.Candidate_Skills.toLocaleLowerCase().match(
            this.JobPostion_Name.toLocaleLowerCase()
          );
        }
      });
    }
  }

  get d() {
    return this.popupForm.controls;
  }
  get r() {
    return this.rankForm.controls;
  }

  getRank() {
    this.loading = true;
    this.subthird = true;

    if (this.rankForm.valid) {
      var params = {
        jd: this.jd,
        skill: this.skill,
        summary: this.summary,
        role: this.role,
        responsibility: this.responsibility,
      };

      console.log(params);
      this.loading = true;
      this.setupService
        .addFunction(
          params,
          "/api/candidates/rank?&candidate_id=" + this.Candidate_Id
        )
        .then(
          (result) => {
            console.log(result);
            this.rnk_res = result;
            this.rnk_msg = this.rnk_res.message;
            let ab = this.rnk_msg.Overallscore;
            console.log(ab);
            console.log(this.rnk_msg);
            this.loading = false;
            alert("Candidate Profile is" + " " + ab + "%" + " " + "Matching");
            //  alert("Please wait..");
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
    }
  }
  onAdd() {
    this.subsecond = true;

    if (this.popupForm.valid) {
      // alert("hello")

      var params = {
        userId: this.userId,
        jobPosition_id: "5",
        candidate_name: this.Candidate_Name,
        mobile: this.Candidate_Phone,
        email: this.Candidate_Email,
        wrk_exp: this.Candidate_Exp,
        // exp_years: this. c_yexp,
        // exp_months: this.c_mexp ,
        location: this.Candidate_Location,
        skills: this.Candidate_Skls,
        education: this.Candidate_Edu,
        // summary: this.c_summary,
        // file_location: this.c_filelocation,
        candidate_Id: this.Candidate_Id,
      };
      console.log(params);

      if (params) {
        this.setupService.editu(params, "/api/candidates").then(
          (result) => {
            this.modalRef.hide();
            console.log(result);

            alert("Candidate Updated Successfully");
            this.getCands();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }
  }

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
    const file = files[0];
    this.registerForm.get("profile").setValue(file);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */

  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  // deleteFile(index: number) {
  //   if (this.files[index].progress < 100) {
  //     console.log("Upload in progress.");
  //     return;
  //   }
  //   this.files.splice(index, 1);
  // }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.loading = true;
    this.submitted = true;

    if (this.registerForm.valid) {
      const formData = new FormData();

      formData.append("file", this.registerForm.get("profile").value);
      this.modalRef.hide();
      this.registerForm.reset();

      this.http
        .post<any>(
          "http://rest-api.smarthirein.ai/api/login/fileUpload",
          formData
        )
        .subscribe((res) => {
          this.loading = true;

          console.log(res);
          this.rs_data = res;
          this.res_name = this.rs_data.data.resume;
          this.res_id = this.rs_data.data.Id;
          console.log(this.res_name);
          console.log(this.res_id);
          this.path = "http://192.168.1.7:8081/" + this.res_name;
          //  this.path = "D:/rest-api-nodejs-mysql-master/upload/"+this.res_id;
          this.loading = true;
          console.log(this.path);
          // alert(this.path);
          if (this.path) {
            var params = {
              userId: this.userId,
              jobPosition_Id: "5",
              resume_id: this.res_id,
            };

            if (params) {
              this.loading = true;
              this.setupService.addFunction(params, "/api/candidates").then(
                (result) => {
                  console.log(result);
                  alert("Candidates Saved Successfully");
                  this.registerForm.get("profile").setValue("");
                  this.registerForm.reset();
                  this.getCands();
                  window.location.reload();
                  this.loading = false;
                },
                (err) => {
                  console.log(err);
                }
              );
            }
          } else {
            alert("abc");
          }
        });
    } else {
      //  alert('Please Upload Resume')
    }
  }

  OnParse() {
    alert("parse");
    this.loading = true;

    const formData = new FormData();

    formData.append("file", this.registerForm.get("profile").value);

    this.http
      .post<any>("http://rest-api.smarthirein.ai/first/", formData)
      .subscribe((res) => {
        console.log(res);
        // window.location.reload();
        setTimeout(function () {
          this.loading = true;
        }, 10000);

        this.getCands();
        this.loading = false;
        // this.modalRef.hide();
        this.registerForm.reset();
      });
  }

  getRes() {
    this.setupService.getResume(this.resmId).subscribe(
      (data: {}) => {
        console.log(data);
        // this.dl = data;
        // this.deptList = this.dl.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  drawChartsforCandidates() {
    let chartsAry = [];
    this.candsList.forEach(function (candidate, index) {
      let id = "canvas" + index;
      var ctx = document.getElementById(id);
      candidate.barchart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Chat",
            "Experience",
            "Location",
            "Role",
            "Skills",
            "Domain",
            "Culture",
            "Assessment",
          ],
          datasets: [
            {
              data: [60, 100, 35, 80, 25, 50, 60, 35],
              backgroundColor: "rgb(255,255,255)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  //display:false,
                  beginAtZero: true,
                  fontColor: "white",
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: "white", // x-Axes color you want to add
                },
                gridLines: {
                  display: false,
                },
              },
            ],
          },
          animation: {
            duration: 1,
            onComplete: function () {
              var chartInstance = this.chart,
                ctx = chartInstance.ctx;

              ctx.font = Chart.helpers.fontString(
                Chart.defaults.global.defaultFontSize,
                Chart.defaults.global.defaultFontStyle,
                Chart.defaults.global.defaultFontFamily
              );
              ctx.textAlign = "center";
              ctx.textBaseline = "bottom";

              this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function (bar, index) {
                  var data = dataset.data[index] + "%";
                  ctx.fillText(data, bar._model.x, bar._model.y - 5);
                });
              });
            },
          },
          legend: {
            display: false,
          },
        },
      });

      console.log("==================");
      console.log(candidate.barchart);
      console.log("==================");
    });
  }
}
