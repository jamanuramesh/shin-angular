import { Component } from "@angular/core";
import { BnNgIdleService } from "bn-ng-idle";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "SHINWPORTAL";
  constructor(private bnIdle: BnNgIdleService) {}
  ngOnInit() {
    this.bnIdle.startWatching(360).subscribe((isTimedOut: boolean) => {
      // if (isTimedOut) {
      //   localStorage.removeItem("registeredId");
      //   localStorage.removeItem("email");
      //   alert("Session Time Out");
      //   window.location.href = "login";
      // } else {
      //   this.bnIdle.resetTimer();
      // }
      this.bnIdle.resetTimer();
    });
  }
}
