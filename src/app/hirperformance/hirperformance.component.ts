import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-hirperformance',
  templateUrl: './hirperformance.component.html',
  styleUrls: ['./hirperformance.component.css']
})
export class HirperformanceComponent implements OnInit {

  constructor() { }





  public data = [
    {name: 'Shahid', dept: 'UI/UX', loc: 'Hyderabad', status: 'Hired',
    profMatch: '80%', score: '85%', phone: '9876543201', email: 'Shahid@gmail.com'},
    {name: 'Virat', dept: 'UI/UX', loc: 'Hyderabad', status: 'Hired',
    profMatch: '80%', score: '85%', phone: '9876543201', email: 'Shahid@gmail.com'},
    {name: 'Sachin', dept: 'UI/UX', loc: 'Hyderabad', status: 'Hired',
    profMatch: '80%', score: '85%', phone: '9876543201', email: 'Shahid@gmail.com'},
    {name: 'Dhoni', dept: 'UI/UX', loc: 'Hyderabad', status: 'Hired',
    profMatch: '80%', score: '85%', phone: '9876543201', email: 'Shahid@gmail.com'},
    {name: 'Abhi', dept: 'UI/UX', loc: 'Hyderabad', status: 'Hired',
    profMatch: '80%', score: '85%', phone: '9876543201', email: 'Shahid@gmail.com'},
   
];

title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

 
  

  
  var ctx = document.getElementById('myChart1');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Green', 'Yellow'],
        datasets: [{
            label: ['Rejected', 'offered', 'hired'],
            
            data: [12, 19, 3],
            backgroundColor: [
                'rgb(255,0,0)',
                'rgb(0,255,0)',
                'rgb(255,255,0)'
                
            ],
            
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                  offsetGridLines: false
              }
            }]
        }
    }
});
      
    }
  
  }
  



