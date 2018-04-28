import { Component, OnInit } from '@angular/core';
import { AServService } from '../a-serv.service';

@Component({
  selector: 'app-b-comp',
  templateUrl: './b-comp.component.html',
  styleUrls: ['./b-comp.component.css'],
  providers: [ AServService ]
})
export class BCompComponent implements OnInit {
  dataFromAService: string;

  constructor (
    private aServ: AServService
  ) { }

  ngOnInit() {
    this.aServ.BSAsObservable.subscribe( x => this.dataFromAService = x );
  }

}
