import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-demo',
  template: `<h5 style="color:green; margin-left:50px;">Interview Test</h5>  
  <div class="card" class="col-sm-10">     
  <div class="card-body">
  <table class="table" style="margin-top:80px; margin-left:100px;">
              <tr style="background-color:green ">
                  <th style="color:white"><h6>No</h6></th>
                  <th style="color:white"> <h6>Name</h6></th>
                  <th style="color:white"><h6>No of ques</h6></th> 
                  <th style="color:white"><h6>Start test</h6></th>
              </tr>
              <tr *ngFor="let type of types; let i = index">
                  <td><b>{{i + 1}}</b></td>
                  <td><b>{{type.name}}</b></td>
                  <td><b>{{type.questions.length}}</b></td>
                  <td><a [routerLink]="['../start',type._id]" class="btn btn-success">Start Test</a></td>
                  </tr>
          </table>
          </div>
          </div>`
})
export class TestComponent {
  types = [];
  constructor(private http: Http) { }
  ngOnInit() {
    this.http.get('assets/data/data.json').subscribe(
      (data: any) => {
        data = data.json();
        console.log("===========> response <================", data);
        this.types = data.tests;
        // console.log(data)
      }, err => {
        console.log("================> Error <=========================", err);
      });
  }
}

