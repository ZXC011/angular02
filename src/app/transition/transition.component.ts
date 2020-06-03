import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css']
})
export class TransitionComponent implements OnInit {
  //利用ViewChild获取div对象赋值给“mybox”
  @ViewChild('myaside', { static: true }) myaside: any;
  showstatus: any;
  constructor() { }

  ngOnInit() {
  }
  showaside() {
    //  将侧边栏还原到显示位置
    this.showstatus = this.myaside.nativeElement.style.transform = 'translate(0,0)';
  }
  hiddaside() {
    //  将侧边栏向右平移100%的位置
    this.showstatus = this.myaside.nativeElement.style.transform = 'translate(100%,0)';
  }
}
