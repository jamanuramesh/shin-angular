import { Component, OnInit, TemplateRef } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
} from "@angular/forms";
import { setupService } from "../services/setupService";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";

@Component({
  selector: "app-screening",
  templateUrl: "./screening.component.html",
  styleUrls: ["./screening.component.css"],
})
export class ScreeningComponent implements OnInit {
  StageForm: FormGroup;
  ScreeningForm: FormGroup;
  subsecond = false;

  public userId;
  public userData;
  public userData1;
  userData2: any;
  stage_name: any;

  name = "Angular";
  isMasterSel: boolean;
  categoryList: any;
  checkedCategoryList: any;
  modalRef: BsModalRef;
  Screening_Id: any;
  Screening_satge_name: any;
  User_Id: any;
  Screening_status: any;
  subf = false;
  constructor(
    private formBuilder: FormBuilder,
    public setupService: setupService,
    private modalService: BsModalService
  ) {
    this.isMasterSel = false;

    this.categoryList = [
      { id: 1, value: "Pool", isSelected: true },
      { id: 2, value: "Applied", isSelected: true },
      { id: 3, value: "Shortlisted", isSelected: true },
    ];

    this.getCheckedItemList();
  }

  checkUncheckAll() {
    for (var i = 0; i < this.userData2.length; i++) {
      this.userData2[i].Screening_status = this.isMasterSel;
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.isMasterSel = this.userData2.every(function (item: any) {
      return item.Screening_status == true;
    });
    this.getCheckedItemList();
  }

  getCheckedItemList() {
    this.checkedCategoryList = [];
    for (var i = 0; i < this.categoryList.length; i++) {
      if (this.categoryList[i].isSelected)
        this.checkedCategoryList.push(this.categoryList[i]);
    }
    this.checkedCategoryList = JSON.stringify(this.checkedCategoryList);
  }

  ngOnInit() {
    this.StageForm = this.formBuilder.group({
      deptname: ["", [Validators.required]],
    });
    this.userId = localStorage.getItem("user_Id");
    this.getSstage();
    this.ScreeningForm = this.formBuilder.group({
      Screening_satge_name: ["", [Validators.required]],
    });
  }

  getSstage() {
    this.setupService.getSStages(this.userId).subscribe((data: {}) => {
      this.userData1 = data;
      this.userData2 = this.userData1.data;
      console.log(this.userData2);
    });
  }

  get d() {
    return this.StageForm.controls;
  }

  onAdd() {
    this.subsecond = true;
    if (this.StageForm.valid) {
      var params = {
        user_id: this.userId,
        stage_name: this.stage_name,
        status: 0,
      };
      if (params) {
        this.setupService.addFunction(params, "/api/screeningStages").then(
          (result) => {
            console.log(result);
            alert("Screening Stage Saved Successfully");
            this.getSstage();
            window.location.reload();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }
  }

  editScreening(editScreeningModal: TemplateRef<any>, item) {
    this.modalRef = this.modalService.show(editScreeningModal, {
      backdrop: "static",
      keyboard: false,
    });
    this.Screening_Id = item.Screening_Id;
    this.Screening_satge_name = item.Screening_satge_name;
    this.User_Id = item.User_Id;
    this.Screening_status = item.Screening_status;
  }

  deleteScreening(deleteScreeningModal: TemplateRef<any>, item) {
    this.modalRef = this.modalService.show(deleteScreeningModal, {
      backdrop: "static",
      keyboard: false,
    });
    this.Screening_Id = item.Screening_Id;
  }

  onEditScreening() {
    this.subf = true;
    if (this.ScreeningForm.valid) {
      var params = {
        Screening_Id: this.Screening_Id,
        Screening_satge_name: this.Screening_satge_name,
        User_Id: this.User_Id,
        Screening_status: this.Screening_status,
      };
      console.log(params);
      if (params) {
        this.setupService.editFunction(params, "/api/screeningStages").then(
          (result) => {
            console.log(result);
            alert("Screening Stage Updated Successfully");
            this.getSstage();
            window.location.reload();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }
  }

  onDeleteScreening() {
    if (this.Screening_Id) {
      this.setupService.deleteScreeningStage(this.Screening_Id).subscribe(
        (result) => {
          alert("Screening Stage Deleted Successfully");
          this.getSstage();
          window.location.reload();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
