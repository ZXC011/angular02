import { Component, OnInit } from '@angular/core';
// 引入ViewChild组件
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  getlog() {
    alert('子组件的方法');
  }
}
