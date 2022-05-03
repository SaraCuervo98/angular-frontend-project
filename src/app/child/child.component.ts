/*  PARENT TO CHILD USING INPUT DECORATOR

import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  childMessage!: string;
  

  constructor() { }

  ngOnInit(){
  }

} */

/* CHILD TO PARENT USING OUTPUT DECORATOR
import {Component, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
  })
  
  export class ChildComponent implements OnInit {

    @Output() messageEvent = new EventEmitter<string>();
  
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
  
    sendMessage() {
        this.messageEvent.emit('Hello from another child');
    }
  } */

  /* CHILD TO PARENT USING VIEWCHILD  */
  import {Component, OnInit, ViewEncapsulation } from '@angular/core';
 

  @Component({
      selector: 'app-child',
      templateUrl: './child.component.html',
      styleUrls: ['./child.component.css'],  // sass also 
      encapsulation: ViewEncapsulation.None  // global styles
     /* styles: [`h2 {
        color: red}`] */
    })
    
    export class ChildComponent implements OnInit {
      // message = "Message from child";
      ngOnInit(): void {
        throw new Error('Method not implemented.');
      }
    
    }