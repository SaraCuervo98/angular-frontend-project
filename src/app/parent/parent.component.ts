import { Component, OnInit, ViewChild} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  
  //@ViewChild(ChildComponent)
  //child: any;

  constructor() { }

  ngOnInit(): void {
  }

  //ngAfterViewInit() {
  //  console.log(this.child.message);
  //}
  /* the parent will receive the message only for demonstration purposes
  receiveMessage(msg: any) {
    alert(msg);
  } */
}
