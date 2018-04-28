import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AServService {
  behaviorSubject = new BehaviorSubject<string>('helloworld');
  // behaviorSubject = new Subject();
  BSAsObservable = this.behaviorSubject.asObservable();

  constructor() {
    setTimeout(() => {
      this.behaviorSubject.next('goodbye world');
      }, 3000);

  } // constructor ends

} // class ends
