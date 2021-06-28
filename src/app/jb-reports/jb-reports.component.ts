import { Component, ViewChild, OnInit } from "@angular/core";
declare var $;
import { Chart } from "node_modules/chart.js";

@Component({
  selector: "app-jb-reports",
  templateUrl: "./jb-reports.component.html",
  styleUrls: ["./jb-reports.component.css"],
})
export class JbReportsComponent implements OnInit {
  @ViewChild("dataTable") table;
  dataTable: any;
  dtOption: any = {};
  email: any;
  fname: any;
  lname: any;
  opened1 = false;
  constructor() {}

  toggleprofile() {
    this.opened1 = !this.opened1;
  }

  public data = [
    {
      name: "Shahid",
      dept: "UI/UX",
      loc: "Hyderabad",
      status: "Hired",
      profMatch: "80%",
      score: "85%",
      phone: "9876543201",
      email: "Shahid@gmail.com",
    },
    {
      name: "Virat",
      dept: "UI/UX",
      loc: "Hyderabad",
      status: "Hired",
      profMatch: "80%",
      score: "85%",
      phone: "9876543201",
      email: "Shahid@gmail.com",
    },
    {
      name: "Sachin",
      dept: "UI/UX",
      loc: "Hyderabad",
      status: "Hired",
      profMatch: "80%",
      score: "85%",
      phone: "9876543201",
      email: "Shahid@gmail.com",
    },
    {
      name: "Dhoni",
      dept: "UI/UX",
      loc: "Hyderabad",
      status: "Hired",
      profMatch: "80%",
      score: "85%",
      phone: "9876543201",
      email: "Shahid@gmail.com",
    },
    {
      name: "Abhi",
      dept: "UI/UX",
      loc: "Hyderabad",
      status: "Hired",
      profMatch: "80%",
      score: "85%",
      phone: "9876543201",
      email: "Shahid@gmail.com",
    },
  ];
  title = "angulardatatables";
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.email = localStorage.getItem("email");
    this.fname = localStorage.getItem("fullname");
    this.lname = localStorage.getItem("lastname");

    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 5,
      processing: true,
    };

    var ctx = document.getElementById("myChart1");
    console.log("=======================================");
    console.log(ctx);
    console.log("=======================================");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Green", "Yellow"],
        datasets: [
          {
            label: ["Rejected", "offered", "hired"],

            data: [12, 19, 3],
            backgroundColor: ["rgb(255,0,0)", "rgb(0,255,0)", "rgb(255,255,0)"],

            borderWidth: 0,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                offsetGridLines: false,
              },
            },
          ],
        },
      },
    });
    console.log("===========================");
    console.log(myChart);
    console.log("===========================");
  }
}
