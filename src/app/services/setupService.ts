import { Component, Injectable, ViewChild } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

//   CODE FOR FILE UPLOADING
let headers1 = new HttpHeaders();
headers1 = headers1.set("content-type", "application/json");
headers1 = headers1.set("Access-Control-Allow-Origin", "*");
console.log(headers1);

//Define API

let apiURL = "http://localhost:3001"; //Local-API
// let apiURL = "http://rest-api.smarthirein.ai"; // Live-API

@Injectable({
  providedIn: "root",
})
export class setupService {
  //CODE FOR FILE UPLOADING

  httpClient: any;
  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = "/jd";
    const formData: FormData = new FormData();
    formData.append("fileKey", fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData, { headers: headers1 })
      .map(() => {
        return true;
      })
      .catch((e) => this.handleError(e));
  }
  handleError(e: any) {
    throw new Error("Method not implemented.");
  }

  constructor(public http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  addProfile(params, type) {
    // console.log(apiURL+type);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http
        .post(apiURL + type, JSON.stringify(params), this.httpOptions)
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  addFunction(params, type) {
    // console.log(apiURL+type);
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http
        .post(apiURL + type, JSON.stringify(params), this.httpOptions)
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }
  getProfByReg(regId) {
    return this.http.get(apiURL + "/api/profiles/" + regId).pipe(retry(1));
  }

  getlocByReg(user_Id) {
    return this.http
      .get(apiURL + "/api/officeLocations/byUser/" + user_Id)
      .pipe(retry(1));
  }

  getOrgByUser(userId) {
    return this.http.get(apiURL + "/api/orgs/" + userId).pipe(retry(1));
  }
  getOrgByReg(regId) {
    return this.http.get(apiURL + "/api/orgs/getdata/" + regId).pipe(retry(1));
  }

  getDeptByUser(userId) {
    return this.http
      .get(apiURL + "/api/departments/byUser/" + userId)
      .pipe(retry(1));
  }
  getUserByUser(userId) {
    return this.http
      .get(apiURL + "/api/users/getUser/" + userId)
      .pipe(retry(1));
  }
  getTeamByUser(userId) {
    return this.http
      .get(apiURL + "/api/teams/getTeams/" + userId)
      .pipe(retry(1));
  }

  getJobByReg(regId) {
    return this.http
      .get(apiURL + "/api/jobInfos/getUserJobs/" + regId)
      .pipe(retry(1));
  }

  getJobByUser(userId) {
    return this.http
      .get(apiURL + "/api/jobInfos/getUserJobs/" + userId)
      .pipe(retry(1));
  }

  getMappingByUser(userId) {
    return this.http
      .get(apiURL + "/api/candidates/map/" + userId)
      .pipe(retry(1));
  }

  getHStages(userId) {
    return this.http.get(apiURL + "/api/hiringStages/" + userId).pipe(retry(1));
  }
  getSStages(userId) {
    return this.http
      .get(apiURL + "/api/screeningStages/" + userId)
      .pipe(retry(1));
  }
  getTStages(userId) {
    return this.http
      .get(apiURL + "/api/telephonicStages/" + userId)
      .pipe(retry(1));
  }

  getJdByJob(userId) {
    return this.http
      .get(apiURL + "/api/jobInfos/getJD/" + userId)
      .pipe(retry(1));
  }

  deleteloc(loc_id) {
    return this.http
      .delete(apiURL + "/api/officeLocations/" + loc_id)
      .pipe(retry(1));
  }

  deleteApproveStage(hir_id) {
    return this.http
      .delete(apiURL + "/api/hiringStages/" + hir_id)
      .pipe(retry(1));
  }

  deleteScreeningStage(scr_id) {
    return this.http
      .delete(apiURL + "/api/screeningStages/" + scr_id)
      .pipe(retry(1));
  }

  deleteTelephonicStage(tele_id) {
    return this.http
      .delete(apiURL + "/api/telephonicStages/" + tele_id)
      .pipe(retry(1));
  }

  deletetm(tm_ID) {
    alert(tm_ID);
    return this.http.delete(apiURL + "/api/teams/" + tm_ID).pipe(retry(1));
  }

  getData(type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.get(apiURL + type).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
  login(data): Observable<any> {
    return this.http.post(apiURL + "/api/login/", data);
  }

  editFunction(params, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http
        .patch(apiURL + type, JSON.stringify(params), this.httpOptions)
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  editu(params, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http
        .put(apiURL + type, JSON.stringify(params), this.httpOptions)
        .subscribe(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  getResume(rsId) {
    return this.http
      .get(apiURL + "/api/candidates/getResume/" + rsId)
      .pipe(retry(1));
  }
}
