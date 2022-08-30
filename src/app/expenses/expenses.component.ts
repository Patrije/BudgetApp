import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  confirm(){
    this.expenses.push({expenseName: this.expenseName, expenseValue: this.expenseValue});
    this.expenseName = '';
    this.expenseValue = 0;
  }

  isValid(): boolean{
    return this.expenseName!=='' && this.expenseValue!==0;
  }

}
