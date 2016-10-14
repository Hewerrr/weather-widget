import { Component } from '@angular/core';
import Resort from './entities/resort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _currentResort: Resort;
  private _resorts: Resort[];

  constructor() {
    this._resorts = [
      {
        id: 1,
        address: 'address 1',
        telephone: '+1285 968 685',
        firstSightUrl: 'assets/images/1.jpg',
        secondSightUrl: 'assets/images/b1.jpg',
        airTemperature: 20,
        waterTemperature: 15,
        followersCount: 10,
        followingCount: 40
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
        followingCount: 400
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
        followingCount: 430
      }
    ];
    this._currentResort = this._resorts[0];
  }
}
