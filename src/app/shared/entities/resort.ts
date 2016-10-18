import { ResortType } from './resort-type';

export default class Resort {
        public id: number;
        public address: string;
        public telephone: string;
        public firstSightUrl: string;
        public secondSightUrl: string;
        public airTemperature: number;
        public waterTemperature: number;
        public followersCount: number;
        public followingCount: number;
        public resortType: ResortType; 
}
