import { Component } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import {
  shareReplay,
  publishReplay,
  refCount,
  take,
  mapTo,
  tap,
  takeUntil
} from "rxjs/operators";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
  name = 'Angular';
  intervals = new Observable<string>();

  ngOnInit(){
    this.intervals = interval(1000).pipe(
     tap(console.log),
     mapTo('nextValue'),
    //shareReplay(1),
    publishReplay(1),
    refCount(),
    );

    let subscription = this.intervals.subscribe(console.log);

    setTimeout(() => {
    subscription.unsubscribe();
  }, 3000);
  
  }

  

}
