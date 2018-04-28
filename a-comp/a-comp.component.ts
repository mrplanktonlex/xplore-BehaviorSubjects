import { Component, OnInit } from '@angular/core';
import { AServService } from '../a-serv.service';

@Component({
  selector: 'app-a-comp',
  templateUrl: './a-comp.component.html',
  styleUrls: ['./a-comp.component.css'],
  providers: [ AServService ]
})
export class ACompComponent implements OnInit {
  dataFromAService: string;

  constructor (
    private aServ: AServService
  ) {
    // this.aServ.BSAsObservable().subscribe( x => this.dataFromAService = x ); // errors
    // can be used in the constructor, but code should be this.aServ.BSAsObservable and NOT this.aServ.BSAsObservable()
  }

  ngOnInit() {
    this.aServ.BSAsObservable.subscribe( x => this.dataFromAService = x );

    // VIMP: GOTCHA#5.2 in myreadme.txt
    // ONLY aComp will be updated ; bComp and cComp will display "Are you there???"
    // always use .next() in the service itself (if u want all subscribers to be updated)
    
    setTimeout(() => {
    this.aServ.behaviorSubject.next('Are you there???');
    }, 6000);
  }

}
