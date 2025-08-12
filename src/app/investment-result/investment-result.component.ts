import { Component, inject, signal, computed } from '@angular/core';
import { CalculatedResult } from '../investment.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentCalculateService } from '../investmentCalculate.service';
@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  private calculateservice = inject(InvestmentCalculateService);
  calculatedResult = signal<CalculatedResult[] | undefined>(undefined);

  results = computed(() => this.calculateservice.resultdataset());
  // get results() {
  //   return this.calculateservice.resultdataset();
  // }
  constructor() {
    console.log('constructor' + this.calculatedResult());
  }
}
