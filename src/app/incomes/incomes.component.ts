import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  confirm(){
    this.incomes.push({incomeName: this.incomeName, incomeValue: this.incomeValue});
    this.incomeName = '';
    this.incomeValue = 0;
  }

  isValid(): boolean{
    return this.incomeName!=='' && this.incomeValue!==0;
  }

}
