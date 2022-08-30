import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  balance: number = 0;
  title = 'BudgetApp';
  initialBalance = 0;

  increaseExpenses(value: number): void{
      this.balance = this.balance -value;
  }

  increaseIncomes(value:number): void{
    this.balance = this.balance + value;
  }

  passInitialBalance(){
    this.balance = this.initialBalance;
  }

  decreaseIncome(value: number){
    this.balance = this.balance - value;
  }

  decreaseExpense(value: number){
    this.balance = this.balance + value;
  }

  
}
