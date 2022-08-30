import { Component, OnInit } from '@angular/core';

interface Expense{
  expenseName: string,
  expenseValue: string
}

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expenseName = '';
  expenseValue = '';
  expenses: Expense[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  confirm(){
    this.expenses.push({expenseName: this.expenseName, expenseValue: this.expenseValue});
  }

}
