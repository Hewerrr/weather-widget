import { Component, Input } from '@angular/core';
import Resort from '../entities/resort';

@Component({
  selector: 'weather-resort-temperature',
  templateUrl: './resort-temperature.component.html',
  styleUrls: ['./resort-temperature.component.css']
})
export class ResortTemperatureComponent {
  @Input()
  public resort: Resort;

  constructor() { }
}
