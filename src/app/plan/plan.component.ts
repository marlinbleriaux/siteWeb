import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
course= [
  {'id':1,'name':'learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/angular.jpeg'},
  {'id':2,'name':'learn nodejs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/node.png'},
  {'id':3,'name':'learn react','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/react.png'},
  {'id':4,'name':'learn ionic','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/ionic.jpg'}
]

}
