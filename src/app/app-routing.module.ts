import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";
import { FirstloginComponent } from "./firstlogin/firstlogin.component";
import { ProfilesetupComponent } from "./profilesetup/profilesetup.component";
import { OrgComponent } from "./org/org.component";
import { TeamComponent } from "./team/team.component";
import { TemplateComponent } from "./template/template.component";
import { JobInfoComponent } from "./job-info/job-info.component";
import { HiringteamComponent } from "./hiringteam/hiringteam.component";
import { HirinstagesComponent } from "./hirinstages/hirinstages.component";
import { PromoteComponent } from "./promote/promote.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ApprovalComponent } from "./approval/approval.component";
import { CongratsComponent } from "./congrats/congrats.component";
import { JbdashboardComponent } from "./jbdashboard/jbdashboard.component";
import { CandidatesComponent } from "./candidates/candidates.component";
import { CandidateslistComponent } from "./candidateslist/candidateslist.component";
import { CandreportsComponent } from "./candreports/candreports.component";
import { HirperformanceComponent } from "./hirperformance/hirperformance.component";
import { JbReportsComponent } from "./jb-reports/jb-reports.component";
import { Sidebar2Component } from "./sidebar2/sidebar2.component";
import { PasswordComponent } from "./password/password.component";
import { JobdescComponent } from "./jobdesc/jobdesc.component";
import { LocationComponent } from "./location/location.component";
import { NotificationComponent } from "./notification/notification.component";
import { Sidebar3Component } from "./sidebar3/sidebar3.component";
import { AuthGuard } from "./auth.guard";
import { AuthGuard1 } from "./auth.guard1";
import { MappingComponent } from "./mapping/mapping.component";
import { InterviewStagesComponent } from "./interview-stages/interview-stages.component";
import { ScreeningComponent } from "./screening/screening.component";
import { TelephonicComponent } from "./telephonic/telephonic.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent, canActivate: [AuthGuard1] },

  { path: "navbar", component: NavbarComponent, canActivate: [AuthGuard] },
  {
    path: "firstlogin",
    component: FirstloginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "profilesetup",
    component: ProfilesetupComponent,
    canActivate: [AuthGuard],
  },
  { path: "org", component: OrgComponent, canActivate: [AuthGuard] },
  { path: "team", component: TeamComponent, canActivate: [AuthGuard] },
  { path: "template", component: TemplateComponent, canActivate: [AuthGuard] },
  { path: "job-info", component: JobInfoComponent, canActivate: [AuthGuard] },
  { path: "hiringteam", component: HiringteamComponent },
  { path: "hirinstages", component: HirinstagesComponent },
  { path: "promote", component: PromoteComponent, canActivate: [AuthGuard] },
  { path: "sidebar", component: SidebarComponent, canActivate: [AuthGuard] },
  { path: "approval", component: ApprovalComponent, canActivate: [AuthGuard] },
  { path: "congrats", component: CongratsComponent, canActivate: [AuthGuard] },
  {
    path: "jbdashboard",
    component: JbdashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "candidates",
    component: CandidatesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "candidateslist",
    component: CandidateslistComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "candreports",
    component: CandreportsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "hirperformance",
    component: HirperformanceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "jb-reports",
    component: JbReportsComponent,
    canActivate: [AuthGuard],
  },
  { path: "sidebar2", component: Sidebar2Component, canActivate: [AuthGuard] }, //modified
  { path: "password", component: PasswordComponent, canActivate: [AuthGuard] },
  { path: "jobdesc", component: JobdescComponent, canActivate: [AuthGuard] },
  { path: "location", component: LocationComponent, canActivate: [AuthGuard] },
  {
    path: "notification",
    component: NotificationComponent,
    canActivate: [AuthGuard],
  },
  { path: "sidebar3", component: Sidebar3Component, canActivate: [AuthGuard] },
  { path: "mapping", component: MappingComponent, canActivate: [AuthGuard] },
  {
    path: "interview-stages",
    component: InterviewStagesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "screening",
    component: ScreeningComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "telephonic",
    component: TelephonicComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
