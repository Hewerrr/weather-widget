import { Component } from '@angular/core';
import Resort from './shared/entities/resort';
import {ResortType} from './shared/entities/resort-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public currentResort: Resort;
  public selectedResortType: ResortType;
  public resorts: Resort[];

  constructor() {
    this.resorts = [
      {
        id: 1,
        address: 'address 1',
        telephone: '+1285 968 685',
        firstSightUrl: 'assets/images/1.jpg',
        secondSightUrl: 'assets/images/b1.jpg',
        airTemperature: 20,
        waterTemperature: 15,
        followersCount: 10,
        followingCount: 40,
        resortType: ResortType.Beach
      },
      {
        id: 2,
        address: 'address 2',
        telephone: '+1285 968 686',
        firstSightUrl: 'http://shugaev.su/wp-content/uploads/2015/07/6.jpg',
        secondSightUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Evening_sea.jpg/220px-Evening_sea.jpg',
        airTemperature: 21,
        waterTemperature: 16,
        followersCount: 100,
        followingCount: 400,
        resortType: ResortType.GoodWeather
      },
      {
        id: 3,
        address: 'address 3',
        telephone: '+1285 968 687',
        firstSightUrl: 'http://www.amsalemmedicalcenter.org/wp-content/uploads/2014/02/dead-see.jpg',
        secondSightUrl: 'http://img0.liveinternet.ru/images/attach/b/2/22/2/22002736_1a975589015a.jpg',
        airTemperature: 22,
        waterTemperature: 17,
        followersCount: 160,
        followingCount: 430,
        resortType: ResortType.GoodWeather
      },
      {
        id: 4,
        address: 'address 4',
        telephone: '+1285 968 686',
        firstSightUrl: 'http://tampereclub.ru/uploads/posts/2013-08/1377630027_rybalka.jpg',
        secondSightUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLkboGwfs2DD7Zp_73SFOAGswOvXV1w-Rv7b5DeT9chogkMJvu',
        airTemperature: 21,
        waterTemperature: 16,
        followersCount: 110,
        followingCount: 700,
        resortType: ResortType.Fishing
      },
      {
        id: 5,
        address: 'address 5',
        telephone: '+1285 968 687',
        firstSightUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRgBUZ0EJ8ikHlZxgi7dU8E_DipC4TUOsQ4UvxfR40pmzNHO4g3g',
        secondSightUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR7svRywSGgdeSeVtiprJg14eNKjmU5egh35Mcu2kWOahyS2nhnvw',
        airTemperature: 22,
        waterTemperature: 17,
        followersCount: 160,
        followingCount: 40,
        resortType: ResortType.Fishing
      }
    ];
    this.currentResort = this.resorts[0];
    this.selectedResortType = ResortType.Beach;
  }

  private filterByType(resoltType: ResortType) {
    this.selectedResortType = resoltType;
  }
}
