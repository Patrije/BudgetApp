import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Income{
  incomeName:string,
  incomeValue:number
}
@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})
export class IncomesComponent implements OnInit {
  incomeName = '';
  incomeValue = 0;
  incomes: Income[] = [];
  @Output() increaseIncomesEvent= new  EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  confirm(){
    this.incomes.push({incomeName: this.incomeName, incomeValue: this.incomeValue});
    this.increaseIncomesEvent.emit(this.incomeValue);
    this.incomeName = '';
    this.incomeValue = 0;
    let incomeSum = this.incomes.map(exp => exp.incomeValue).reduce((acc, cur) => acc + cur);
  }

  isValid(): boolean{
    return this.incomeName!=='' && this.incomeValue!==0;
  }

}
