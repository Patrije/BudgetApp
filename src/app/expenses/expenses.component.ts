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
  @Output() deleteExpenseEvent= new  EventEmitter<number>();

  @Output() increaseExpensesEvent= new  EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  confirm(){
    this.expenses.push({expenseName: this.expenseName, expenseValue: this.expenseValue});
    this.increaseExpensesEvent.emit(this.expenseValue);
    this.expenseName = '';
    this.expenseValue = 0;
  }

  isValid(): boolean{
    return this.expenseName!=='' && this.expenseValue!==0;
  }

  delete(expenseName:string){
    const index = this.expenses.findIndex(expense => expense.expenseName === expenseName);
    this.deleteExpenseEvent.emit(this.expenses[index].expenseValue);
    this.expenses.splice(index, 1);
  }

}
