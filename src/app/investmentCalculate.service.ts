import { Injectable, signal } from '@angular/core';
import { InvestmentParameters, CalculatedResult } from './investment.model';

@Injectable({ providedIn: 'root' })
export class InvestmentCalculateService {
  resultdataset = signal<CalculatedResult[] | undefined>(undefined);

  calculateInvestmentResults(parameters: InvestmentParameters) {
    console.log(parameters);
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      parameters;

    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.resultdataset.set(annualData);
  }
}
