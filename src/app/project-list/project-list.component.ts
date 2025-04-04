import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  imports: [
    BrowserModule,
    FormsModule,
  ],
})
export class ProjectListComponent  implements OnInit {
  searchQuery: string = '';

  projects = [
    { name: 'Chinnavedampatti Lake', image: 'assets/img/lake1.jpg' },
    { name: 'Chinnavedampatti Lake', image: 'assets/img/lake2.jpg' },
    { name: 'Chinnavedampatti Lake', image: 'assets/img/lake3.jpg' },
    { name: 'Chinnavedampatti Lake', image: 'assets/img/lake4.jpg' }
  ];
  constructor() { }

  ngOnInit() {}

}
