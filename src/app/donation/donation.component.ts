import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DonationComponent {
  donationAmounts = [200, 500, 1000, 2000];
  selectedAmount: number | null = null;
  customAmount: number | null = null;

  paymentHistory = [
    { date: 'Nov 2024', type: 'Donate Once', amount: 1000, status: 'Success' },
    { date: 'May 2024', type: 'Donate Once', amount: 200, status: 'Success' },
    { date: 'Jan 2024', type: 'Donate Once', amount: 500, status: 'Success' },
  ];

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.customAmount = null; // Reset custom amount if a preset amount is selected
  }

  selectCustomAmount() {
    this.selectedAmount = null; // Reset preset selection if custom amount is entered
  }

  donate() {
    const amountToDonate = this.selectedAmount || this.customAmount;
    if (!amountToDonate || amountToDonate <= 0) {
      alert('Please enter a valid donation amount');
      return;
    }
    alert(`Donated ₹${amountToDonate} successfully!`);
  }
}
