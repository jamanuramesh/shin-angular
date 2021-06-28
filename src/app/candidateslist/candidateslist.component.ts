import {Component, ViewChild, OnInit} from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {  FormControl, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl  } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { setupService } from '../services/setupService';


declare var $;

@Component({
  selector: 'app-candidateslist',
  templateUrl: './candidateslist.component.html',
  styleUrls: ['./candidateslist.component.css']
})
export class CandidateslistComponent implements OnInit {

  @ViewChild('dataTable') table;
  // dataTable: any;
  // dtOption: any = {};
  candsList: any;
  tList: any;

  constructor( public setupService : setupService ) { }


//   public data = [
//     {name: 'Shahid', email: 'Shahid@gmail.com', website:'Shahid.com'},
//     {name: 'Dayana', email: 'Dayana@gmail.com', website:'Dayana.com'},
//     {name: 'Rose', email: 'Rose@gmail.com', website:'Rose.com'},
//     {name: 'Abhimanyu', email: 'Jack@gmail.com', website:'Jack.com'},
//     {name: 'Stella', email: 'Jack@gmail.com', website:'Jack.com'},
//     {name: 'Mary', email: 'Jack@gmail.com', website:'Jack.com'},
//     {name: 'Ganesh', email: 'Jack@gmail.com', website:'Jack.com'},
//     {name: 'Vignesh', email: 'Jack@gmail.com', website:'Jack.com'},
//     {name: 'Devi', email: 'Jack@gmail.com', website:'Jack.com'},
//     {name: 'Jessi', email: 'Jack@gmail.com', website:'Jack.com'},
// ];
  // title = 'angulardatatables';
 dtOptions: DataTables.Settings = {};


  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
   
    };
    
    this.getCands()
    //{}

    
}



getCands(){
  this.setupService.getData("/api/candidates").then((result) =>{
    this.tList = result;
    this.candsList = this.tList.data;
    console.log(this.candsList);
  }, (err) => {
    console.log(err);
  });
  }

}



