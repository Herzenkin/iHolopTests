import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Holop } from './holop';

export class InMemoryService implements InMemoryDbService {
  createDb() {
    let holops: Holop[] = [{
        id: 1,
        holopName: 'Uasysa',
        master: 'Lev Nickolaevich',
        dateFrom: '2016-10-10',
        dateTo: '2016-10-10'
      },
      {
        id: 2,
        holopName: 'Prohor',
        master: 'Lev Nickolaevich',
        dateFrom: '2016-10-10',
        dateTo: '2016-10-10'
      },{
        id: 3,
        holopName: 'Jango',
        master: 'Calvin Candie',
        dateFrom: '2016-10-10',
        dateTo: '2016-10-10'
      }];

      return {holops};
  }
}
