import { Component, Input } from '@angular/core';
import Resort from '../shared/entities/resort';

@Component({
  selector: 'weather-resort-followers',
  templateUrl: './resort-followers.component.html',
  styleUrls: ['./resort-followers.component.css']
})
export class ResortFollowersComponent {
  @Input()
  public resort: Resort;

  constructor() { }
}
