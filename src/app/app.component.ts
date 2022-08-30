import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  balance: number = 0;
  title = 'BudgetApp';

  increaseExpenses(value: number): void{
      this.balance = this.balance -value;
  }

  increaseIncomes(value:number): void{
    this.balance = this.balance + value;
  }
}
