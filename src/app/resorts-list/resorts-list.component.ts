import { Component, Input, Output, EventEmitter } from '@angular/core';
import Resort from '../entities/resort';

@Component({
  selector: 'weather-resorts-list',
  templateUrl: './resorts-list.component.html',
  styleUrls: ['./resorts-list.component.css']
})
export class ResortsListComponent  {
  @Input()
  public resorts:Resort[];
  @Output()
  public changeResort:EventEmitter<Resort> = new EventEmitter();

  constructor() { }

  public emitChangeResort(resort:Resort){
    this.changeResort.emit(resort);
  }
}
