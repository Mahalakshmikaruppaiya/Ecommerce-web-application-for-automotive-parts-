import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PaymentConfirm } from './payment-confirm';
import { BuyProduct } from './buy-product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public messageSource = new BehaviorSubject('');
  public idSource = new BehaviorSubject(0);
  public invoiceSource = new BehaviorSubject(PaymentConfirm);
  public paymentSource = new BehaviorSubject('');
  public cardNumberSource = new BehaviorSubject(0);
  public cardWonerNameSource =new BehaviorSubject('');
  public bankNameSource=new BehaviorSubject('');
  public barnchName=new BehaviorSubject('');
  public date=new BehaviorSubject('');

  currentValue=this.messageSource.asObservable();

  currentId=this.idSource.asObservable();

  currentPaymentMethod=this.paymentSource.asObservable();

  currentInvoice=this.invoiceSource.asObservable();

  currentNumber=this.cardNumberSource.asObservable();

  currentName=this.cardWonerNameSource.asObservable();

  currentBankName=this.bankNameSource.asObservable();

  currentBranch=this.barnchName.asObservable();

  currentDate=this.date.asObservable();

  constructor() { }

  changeMessage(message:any)
  {
    this.messageSource.next(message);
  }

  getId(id:number)
  {
    this.idSource.next(id);
  }

  getInvoice(arr:any)
  {
    this.invoiceSource.next(arr);
  }
  
  getPaymentMethod(method:any)
  {
    this.paymentSource.next(method);
  }
  getCardNumber(number:number)
  {
    this.cardNumberSource.next(number);
  }
  getCardOwnerName(name:string)
  {
    this.cardWonerNameSource.next(name);
  }
  getBankName(name:string)
  {
    this.bankNameSource.next(name);
  }
  getBranch(branch:string)
  {
    this.barnchName.next(branch);
  }
  getCurrentDate(date:any)
  {
    this.date.next(date);
  }
}
