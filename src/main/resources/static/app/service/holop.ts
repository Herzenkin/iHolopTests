export class Holop {
  id: number;
  holopName: string;
  master: string;
  dateFrom: string;
  dateTo: string;

  constructor(
    id?: number,
    holopName?: string,
    master?: string,
    dateFrom?: string,
    dateTo?: string)
  {
    this.id = id;
    this.holopName = holopName;
    this.master = master;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
  }
}
