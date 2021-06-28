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
  selector: "app-telephonic",
  templateUrl: "./telephonic.component.html",
  styleUrls: ["./telephonic.component.css"],
})
export class TelephonicComponent implements OnInit {
  StageForm: FormGroup;
  subsecond = false;
  TelephonicForm: FormGroup;
  public userId;
  public userData;
  public userData1;
  userData2: any;
  stage_name: any;
  subf = false;
  name = "Angular";
  isMasterSel: boolean;
  categoryList: any;
  checkedCategoryList: any;
  modalRef: BsModalRef;
  Telephonic_StageId: any;
  User_Id: any;
  Telephinic_name: any;
  Stage_status: any;
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
      this.userData2[i].Stage_status = this.isMasterSel;
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.isMasterSel = this.userData2.every(function (item: any) {
      return item.Stage_status == true;
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
    this.getTstages();
    this.TelephonicForm = this.formBuilder.group({
      Telephinic_name: ["", [Validators.required]],
    });
  }

  getTstages() {
    this.setupService.getTStages(this.userId).subscribe((data: {}) => {
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
        this.setupService.addFunction(params, "/api/telephonicStages").then(
          (result) => {
            console.log(result);
            alert("Telephonic Stage Saved Successfully");
            this.getTstages();
            window.location.reload();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }
  }

  editTelephonic(editTelephonicModal: TemplateRef<any>, item) {
    this.modalRef = this.modalService.show(editTelephonicModal, {
      backdrop: "static",
      keyboard: false,
    });
    this.Telephonic_StageId = item.Telephonic_StageId;
    this.User_Id = item.User_Id;
    this.Telephinic_name = item.Telephinic_name;
    this.Stage_status = item.Stage_status;
  }

  deleteTelephonic(deleteTelephonicModal: TemplateRef<any>, item) {
    this.modalRef = this.modalService.show(deleteTelephonicModal, {
      backdrop: "static",
      keyboard: false,
    });
    this.Telephonic_StageId = item.Telephonic_StageId;
  }

  onEditTelephonic() {
    this.subf = true;
    if (this.TelephonicForm.valid) {
      var params = {
        Telephonic_StageId: this.Telephonic_StageId,
        Telephinic_name: this.Telephinic_name,
        User_Id: this.User_Id,
        Stage_status: this.Stage_status,
      };
      console.log(params);
      if (params) {
        this.setupService.editFunction(params, "/api/telephonicStages").then(
          (result) => {
            console.log(result);
            alert("Telephonic Stage Updated Successfully");
            this.getTstages();
            window.location.reload();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }
  }

  onDeleteTelephonic() {
    if (this.Telephonic_StageId) {
      this.setupService
        .deleteTelephonicStage(this.Telephonic_StageId)
        .subscribe(
          (result) => {
            alert("Telephonic Stage Deleted Successfully");
            this.getTstages();
            window.location.reload();
          },
          (err) => {
            console.log(err);
          }
        );
    }
  }
}
