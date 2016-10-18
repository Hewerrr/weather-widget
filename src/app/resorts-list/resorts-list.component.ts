import { Component, Input, Output, EventEmitter } from '@angular/core';
import Resort from '../shared/entities/resort';
import { ResortType } from '../shared/entities/resort-type';

@Component({
  selector: 'weather-resorts-list',
  templateUrl: './resorts-list.component.html',
  styleUrls: ['./resorts-list.component.css']
})
export class ResortsListComponent  {
  @Input()
  public resorts:Resort[];
  @Input()
  public resortType:ResortType;
  @Output()
  public changeResort:EventEmitter<Resort> = new EventEmitter();

  constructor() { }

  public emitChangeResort(resort:Resort){
    this.changeResort.emit(resort);
  }
}
