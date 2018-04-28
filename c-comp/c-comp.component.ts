import { Component, OnInit } from '@angular/core';
import { AServService } from '../a-serv.service';

@Component({
  selector: 'app-c-comp',
  templateUrl: './c-comp.component.html',
  styleUrls: ['./c-comp.component.css'],
  providers: [ AServService ]
})
export class CCompComponent implements OnInit {
  dataFromAService: string;

  constructor (
    private aServ: AServService
  ) { }

  ngOnInit() {
    this.aServ.BSAsObservable.subscribe( x => this.dataFromAService = x );
  }


}
