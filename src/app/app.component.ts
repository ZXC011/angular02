// 引入ViewChild组件
import { Component, ViewChild, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit() {
  }
  constructor() { }
  //利用ViewChild获取div对象赋值给“mybox”
  @ViewChild('mybox', { static: true }) mybox: any;
  //利用ViewChild获取子组件对象赋值给“myhome”
  @ViewChild('myhome', { static: true }) myhome: any;
  title = 'angular02';
  ngAfterViewInit(): void {
  }
  // 调用子组件的方法
  ok() {
    this.myhome.getlog();
  }

}