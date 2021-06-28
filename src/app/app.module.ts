import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng5SliderModule } from "ng5-slider";
import { TooltipModule } from "ng2-tooltip-directive";
import { UiSwitchModule } from "ngx-toggle-switch";
import { SidebarModule } from "ng-sidebar";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalModule, BsModalRef } from "ngx-bootstrap/modal";
import { DataTablesModule } from "angular-datatables";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
} from "@angular/material/";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { NgxDocViewerModule } from "ngx-doc-viewer";

import { NgxLoadingModule } from "ngx-loading";

import { HttpClientModule } from "@angular/common/http";

import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FirstloginComponent } from "./firstlogin/firstlogin.component";
import { ProfilesetupComponent } from "./profilesetup/profilesetup.component";
import { OrgComponent } from "./org/org.component";
import { TeamComponent } from "./team/team.component";
import { TemplateComponent } from "./template/template.component";
import { JobInfoComponent } from "./job-info/job-info.component";
import { HiringteamComponent } from "./hiringteam/hiringteam.component";
import { HirinstagesComponent } from "./hirinstages/hirinstages.component";
import { PromoteComponent } from "./promote/promote.component";
import { JbdashboardComponent } from "./jbdashboard/jbdashboard.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ApprovalComponent } from "./approval/approval.component";
import { CongratsComponent } from "./congrats/congrats.component";
import { CandidatesComponent } from "./candidates/candidates.component";
import { CandidateslistComponent } from "./candidateslist/candidateslist.component";
import { JbReportsComponent } from "./jb-reports/jb-reports.component";
import { CandreportsComponent } from "./candreports/candreports.component";
import { HirperformanceComponent } from "./hirperformance/hirperformance.component";
import { DndDirective } from "./dnd.directive";
import { ProgressComponent } from "./progress/progress.component";
import { Sidebar2Component } from "./sidebar2/sidebar2.component";
import { NewsidebarComponent } from "./newsidebar/newsidebar.component";
import { PasswordComponent } from "./password/password.component";
import { JobdescComponent } from "./jobdesc/jobdesc.component";
import { LocationComponent } from "./location/location.component";
import { NotificationComponent } from "./notification/notification.component";
import { Sidebar3Component } from "./sidebar3/sidebar3.component";
import { AuthGuard } from "./auth.guard";
import { SimpleNotificationsModule } from "angular2-notifications";
import { MatChipsModule } from "@angular/material/chips";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { BnNgIdleService } from "bn-ng-idle";

// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { MappingComponent } from "./mapping/mapping.component";
import { InterviewStagesComponent } from "./interview-stages/interview-stages.component";
import { ScreeningComponent } from "./screening/screening.component";
import { TelephonicComponent } from "./telephonic/telephonic.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FirstloginComponent,
    ProfilesetupComponent,
    OrgComponent,
    TeamComponent,
    TemplateComponent,
    JobInfoComponent,
    HiringteamComponent,
    HirinstagesComponent,
    PromoteComponent,
    JbdashboardComponent,
    SidebarComponent,
    ApprovalComponent,
    CongratsComponent,
    CandidatesComponent,
    CandidateslistComponent,
    JbReportsComponent,
    CandreportsComponent,
    HirperformanceComponent,
    DndDirective,
    ProgressComponent,
    Sidebar2Component,
    NewsidebarComponent,
    PasswordComponent,
    JobdescComponent,
    LocationComponent,
    NotificationComponent,
    Sidebar3Component,
    MappingComponent,
    InterviewStagesComponent,
    ScreeningComponent,
    TelephonicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    TooltipModule,
    UiSwitchModule,
    MatChipsModule,
    MatInputModule,
    SidebarModule.forRoot(),
    ModalModule.forRoot(),
    PdfViewerModule,
    NgxDocViewerModule,
    NgxLoadingModule.forRoot({}),
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    SimpleNotificationsModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [AuthGuard, BnNgIdleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
