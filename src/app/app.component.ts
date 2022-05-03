import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
}) // implements OnInit
export class AppComponent{
   

  /*intervalSub: any;
  // log in values to the console, we save th function so that we clean it at the end
  // when it gets destroyed we will use de destroy  method so that we clean de interval method
  ngOnInit() {
    this.intervalSub = setInterval(() => {
      console.log('Hello from ngOnInit');
    }, 1000);   // console log every second in our component
  }
  ngOnDestroy() {
    clearInterval(this.intervalSub);  // we clean the comoponent
  }*/

  /*title = 'Hello!';

  // we create the method here, the application logic should be coded in the component
  getMin(a: any, b: any) {
    if (a < b) {
      return a;
    }
    return b;
  }

  showText= false;

    toggleText(event: any): void {
        this.showText = !this.showText;
        console.log(event);
    }*/

    //PIPE USE
   // todaysDate = new Date();
}
