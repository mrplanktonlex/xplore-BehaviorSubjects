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
    // this.aServ.BSAsObservable().subscribe( x => this.dataFromAService = x );
  }

  ngOnInit() {
    this.aServ.BSAsObservable.subscribe( x => this.dataFromAService = x );

    setTimeout(() => {
    this.aServ.behaviorSubject.next('Are you there???');
    }, 6000);
  }

}
