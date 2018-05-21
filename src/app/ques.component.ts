import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { TestComponent } from './test.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-demo',
    templateUrl: "./question.html"
})

export class QuesComponent {
    private userAns: '';
    private testId;
    private questions: any;
    private currentQuestion: any;
    private index = 0;
    private total: any = 0;
    private flag: any = 0;
    private btnFlag: any = 0;
    private question: any = 0;


    constructor(private http: Http, private route: ActivatedRoute) {
        this.route.params.subscribe((v: any) => {
            if (v._id)
                this.testId = v._id
        })
    }
    ngOnInit() {
        this.http.get('assets/data/data.json').subscribe(
            (data: any) => {
                data = data.json().tests;
                // console.log("data",data)                   
                this.questions = data.find((q) => q._id === this.testId).questions;
            }
        );
    }

    updateCurrentQuestion() {
        if (this.index <= this.questions.length - 1) {
            if (this.questions[this.index].correctOptionIndex == this.userAns) {
                // console.log("====true====>", this.questions[this.index].correctOptionIndex == this.userAns)
                this.total++;
            }
            if (this.index == this.questions.length - 1) {
                this.btnFlag = '1';
            } else {
                this.index++;
            }
        }
        else {
            this.btnFlag = '1';
        }
    }
    SaveOption(optionName) {
        this.userAns = optionName;
    }
    endTest() {
        if (this.userAns) {
            console.log("bhushan");
        }
        this.flag = 1;
    }
}
