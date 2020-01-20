import { Injectable } from '@angular/core';
import { Stock } from '@shared/interface/models';
import { StockDto } from '@shared/interface/dto.interface';

@Injectable({
  providedIn: 'root'
})
export class StockMapperService {

  stockArr: Stock[];
  curStock: Stock = {
        Select: 'Select',
        Chart: 'Chart',
        Symbol: '',
        Exchange: '',
        email: 'dd@d.com',
        Name: '',
        Open: 0,
        Low: 0,
        High: 0,
        LatestPrice: 0,
        stateId: 0,
        Change: 0,
        ChangePercent: 0,
        Week52High: 0,
        Week52Low: 0,
        YtdChange: 0
  };


  constructor() { }

  public mapStockArray(data: any): Stock[] {
    this.stockArr = [];
    data.forEach(x => {
      this.curStock = {
        Select: 'Select',
        Chart: 'Chart',
        Symbol: 'dd',
        Exchange: '',
        email: 'dd@d.com',
        Name: '',
        Open: 0,
        Low: 0,
        High: 0,
        LatestPrice: 0,
        stateId: 0,
        Change: 0,
        ChangePercent: 0,
        Week52High: 0,
        Week52Low: 0,
        YtdChange: 0
      };
      this.curStock.Symbol = x.symbol;
      this.curStock.Exchange = x.primaryExchange;
      this.curStock.Name = x.companyName;
      this.curStock.Open = x.open;
      this.curStock.Low = x.low;
      this.curStock.High = x.high;
      this.curStock.LatestPrice = x.latestPrice;
      this.curStock.Change = x.change;
      this.curStock.ChangePercent = x.changePercent;
      this.curStock.Week52Low = x.week52Low;
      this.curStock.Week52High = x.week52High;
      this.curStock.YtdChange = Math.round(x.ytdChange * 100000) / 100000
        ;
      this.stockArr.push(this.curStock);
    });
    return this.stockArr;
  }
}
