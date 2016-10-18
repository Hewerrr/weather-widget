import { Pipe, PipeTransform } from '@angular/core';
import Resort from '../entities/resort';
import { ResortType } from '../entities/resort-type';

@Pipe({
  name: 'resortType'
})
export class ResortTypePipe implements PipeTransform {

  transform(value: Resort[], args: ResortType): Resort[] {
    return value.filter(e => e.resortType === args);
  }

}
