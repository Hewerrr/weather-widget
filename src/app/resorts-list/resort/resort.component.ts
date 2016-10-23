import { Component, Input } from '@angular/core';
import Resort from '../../shared/entities/resort';

@Component({
    selector: 'weather-resort',
    templateUrl: './resort.component.html',
    styleUrls: ['./resort.component.css']
})
export class ResortComponent {
    @Input()
    public resort:Resort;
}
