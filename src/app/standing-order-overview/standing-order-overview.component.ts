import { Component } from '@angular/core';
import { StandingOrderModel } from './models/standing-order.model';

import { trigger, state, style, transition, animate } from '@angular/animations';
import {DecimalPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'standing-order-overview',
  templateUrl: 'standing-order-overview.component.html',
  styleUrls: ['./standing-order-overview.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({height: '0px', overflow: 'hidden', opacity: 0})),
      state('expanded', style({height: '*', opacity: 1})),
      transition('collapsed <=> expanded', [animate('300ms ease-in-out')]),
    ]),
  ],
  standalone: true,
  imports: [
    NgIf,
    DecimalPipe,
    NgForOf
  ]
})
export class StandingOrderOverviewComponent {
  selectedOrderIndex?: number;
  sortColumn: string = '';
  sortDirection: string = 'asc';

  standingOrders: StandingOrderModel[] = [
    {
      recipient: 'FREIJA INVEST OÜ',
      bankAccount: 'EE807701001571579',
      explanation: 'Toluwani Elemosho, Süle 23a-25, October rent',
      nextPaymentDate: '03.02.2025',
      validUntil: '01.04.2025',
      amount: 400.0,
    },
    {
      recipient: 'JOHN DOE',
      bankAccount: 'EE8920201234567890',
      explanation: 'November payment',
      nextPaymentDate: '01.11.2024',
      validUntil: '01.12.2024',
      amount: 500.0,
    },
    // Add more data here...
  ];

  get totalAmount(): number {
    return this.standingOrders.reduce((sum, order) => sum + order.amount, 0);
  }

  get sortedOrders(): StandingOrderModel[] {
    const orders = [...this.standingOrders];
    if (!this.sortColumn) return orders;

    return orders.sort((a, b) => {
      const valueA = (a as any)[this.sortColumn];
      const valueB = (b as any)[this.sortColumn];
      const comparison =
        typeof valueA === 'number'
          ? valueA - valueB
          : String(valueA).localeCompare(String(valueB));

      return this.sortDirection === 'asc' ? comparison : -comparison;
    });
  }

  sortBy(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }

  toggleDetails(index: number): void {
    this.selectedOrderIndex = this.selectedOrderIndex === index ? undefined : index;
  }
}
