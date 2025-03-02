import { Component, OnInit } from '@angular/core';
// import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class ProjectListComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  projects = [
    { name: 'Chinnavedampatti Lake', image: 'assets/Chinnavedampatti Lake.png' },
    { name: 'Chinnavedampatti Lake', image: 'assets/Chinnavedampatti Lake.png' },
    { name: 'Chinnavedampatti Lake', image: 'assets/Chinnavedampatti Lake.png' },
    { name: 'Chinnavedampatti Lake', image: 'assets/Chinnavedampatti Lake.png' }
  ];

  selectedProject: number | null = null;

  selectProject(index: number) {
    this.selectedProject = index;
  }

}
