import { Component, OnInit } from "@angular/core";
import { setupService } from "../services/setupService";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-mapping",
  templateUrl: "./mapping.component.html",
  styleUrls: ["./mapping.component.css"],
})
export class MappingComponent implements OnInit {
  public userId;
  public userData;
  public isCollapsed = false;
  public userData1;
  userData2: any;

  constructor(private http: HttpClient, public setupService: setupService) {}

  ngOnInit() {
    this.userId = localStorage.getItem("user_Id");
    this.setupService.getMappingByUser(this.userId).subscribe((data: {}) => {
      this.userData1 = data;
      this.userData2 = this.userData1.data;
      console.log(this.userData2);
    });
  }
}
