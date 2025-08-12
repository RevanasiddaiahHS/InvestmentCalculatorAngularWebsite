import { Component, Output, EventEmitter, signal, output } from '@angular/core';
import { InvestmentCalculateService } from '../investmentCalculate.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment = signal(0);
  annualInvestment = signal(0);
  numberofYears = signal(10);
  interestRate = signal(5);
  constructor(private calculateService: InvestmentCalculateService) {}

  onSubmit() {
    this.calculateService.calculateInvestmentResults({
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      duration: this.numberofYears(),
      expectedReturn: this.interestRate(),
    });
    this.initialInvestment.set(0);
    this.annualInvestment.set(0);
    this.numberofYears.set(10);
    this.interestRate.set(5);
  }
}
