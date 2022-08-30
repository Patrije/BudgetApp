import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface Expense{
  expenseName: string,
  expenseValue: number
}

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expenseName = '';
  expenseValue = 0;
  expenses: Expense[] = [];

  @Output() increaseExpensesEvent= new  EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  confirm(){
    this.expenses.push({expenseName: this.expenseName, expenseValue: this.expenseValue});
    this.increaseExpensesEvent.emit(this.expenseValue);
    this.expenseName = '';
    this.expenseValue = 0;
    // let expenseSum = this.expenses.map(exp => exp.expenseValue).reduce((acc, cur) => acc + cur);
  }

  isValid(): boolean{
    return this.expenseName!=='' && this.expenseValue!==0;
  }

}
