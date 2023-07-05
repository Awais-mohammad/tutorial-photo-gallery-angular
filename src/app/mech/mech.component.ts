import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mech',
  templateUrl: './mech.component.html',
  styleUrls: ['./mech.component.scss'],
})
export class MechComponent implements OnInit {
currentView: string = "main"
  constructor() { }

  changeView(view) {
    this.currentView = view;
  }

  expertiseList: { name: string, price: number }[] = [];
  expertiseName: string;
  expertisePrice: number;

  addExpertise() {
    const expertise = { name: this.expertiseName, price: this.expertisePrice };

    // Add the expertise to the list
    this.expertiseList.push(expertise);

    // Clear input fields after adding
    this.expertiseName = '';
    this.expertisePrice = null;
  }

  ngOnInit() {}

}
