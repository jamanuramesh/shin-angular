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
  selector: "app-interview-stages",
  templateUrl: "./interview-stages.component.html",
  styleUrls: ["./interview-stages.component.css"],
})
export class InterviewStagesComponent implements OnInit {
  StageForm: FormGroup;
  subsecond = false;

  public userId;
  public userData;
  public userData1;
  Locform: FormGroup;
  subf = false;
  userData2: any;
  stage_name: any;
  modalRef: BsModalRef;
  hir_id: any;
  hir_name: any;
  hir_status: any;

  isMasterSel: boolean;
  categoryList: any;
  isDisabled: true;
  checkedCategoryList: any;

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
  }

  checkUncheckAll() {
    for (var i = 0; i < this.userData2.length; i++) {
      this.userData2[i].HiringStage_Status = this.isMasterSel;
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.isMasterSel = this.userData2.every(function (item: any) {
      return item.HiringStage_Status == true;
    });
    this.getCheckedItemList();
  }

  ngOnInit() {
    this.StageForm = this.formBuilder.group({
      deptname: ["", [Validators.required]],
    });

    this.userId = localStorage.getItem("user_Id");
    this.getHsatge();

    this.Locform = this.formBuilder.group({
      loc_name: ["", [Validators.required]],
    });

    this.getCheckedItemList();
  }
  getHsatge() {
    this.setupService.getHStages(this.userId).subscribe((data: {}) => {
      this.userData1 = data;
      this.userData2 = this.userData1.data;
      console.log(this.userData2);
    });
  }
  getCheckedItemList() {
    this.checkedCategoryList = [];
    for (var i = 0; i < this.userData2.length; i++) {
      if (this.userData2[i].HiringStage_Status)
        this.checkedCategoryList.push(this.userData2[i]);
    }
    this.checkedCategoryList = JSON.stringify(this.checkedCategoryList);
  }

  editLocation(editLoc: TemplateRef<any>, HId, HName, Hstatus) {
    // alert(Hstatus)
    this.modalRef = this.modalService.show(editLoc, {
      backdrop: "static",
      keyboard: false,
    });
    this.hir_id = HId;
    this.hir_name = HName;
    this.hir_status = Hstatus;
  }

  deleteStage(deleteApproveStagemodal: TemplateRef<any>, HId) {
    this.modalRef = this.modalService.show(deleteApproveStagemodal, {
      backdrop: "static",
      keyboard: false,
    });
    this.hir_id = HId;
  }

  onDeleteApproveStage() {
    if (this.hir_id) {
      this.setupService.deleteApproveStage(this.hir_id).subscribe(
        (result) => {
          alert("Approve Stage Deleted Successfully");
          this.getHsatge();
          window.location.reload();
        },
        (err) => {
          console.log(err);
        }
      );
    }
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
        this.setupService.addFunction(params, "/api/hiringStages").then(
          (result) => {
            console.log(result);
            alert("Hiring Stage Saved Successfully");
            this.getHsatge();
            window.location.reload();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }
  }

  get f() {
    return this.Locform.controls;
  }

  onEditLocation() {
    this.subf = true;
    if (this.Locform.valid) {
      if (this.hir_status == true) {
        var stat = 0;
      } else {
        var stat = 1;
      }
      var params = {
        userId: this.userId,
        stage_name: this.hir_name,
        status: stat,
        hiringStage_Id: this.hir_id,
      };
      console.log(params);
      if (params) {
        this.setupService.editFunction(params, "/api/hiringStages").then(
          (result) => {
            console.log(result);
            alert("Hiring Stage Updated Successfully");
            this.getHsatge();
            window.location.reload();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }
  }
}
