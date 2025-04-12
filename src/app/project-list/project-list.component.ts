import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IonToolbar, IonGrid, IonRow, IonCol, IonFooter, IonButton, IonCheckbox } from "@ionic/angular/standalone";
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [IonCheckbox, IonButton, IonFooter, IonGrid, IonRow, IonCol, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent  implements OnInit {
  searchControl = new FormControl();
  lakeSelected : any = null;
  selectedProjectId: string | null = null;

  // projects: string[] = [];
  constructor(private router : Router) { }
  projects = [
    {
        "_id": "67d94b6b492ff38e9d7a8bbc",
        "projectTitle": "Chinnavedapatti Lake",
        "projectBody": "This lake was restored in the year 2021 with a water capacity of 2000 cubic liter and also has drived many birds and animals ",
        "startDate": "2021-12-31T18:30:00.000Z",
        "progressPercentage": "90"
    },
    {
        "_id": "67d94d19492ff38e9d7a8bbe",
        "projectTitle": "Saravanampatti Lake",
        "projectBody": "This lake was restored in the year 2019 with a water capacity of 2000 cubic liter and also has drived many birds and animals ",
        "startDate": "2019-12-31T18:30:00.000Z",
        "progressPercentage": "90"
    },
    {
        "_id": "67d94d6c492ff38e9d7a8bbf",
        "projectTitle": "Agasaram Lake",
        "projectBody": "This lake was restored in the year 2021 with a water capacity of 2000 cubic liter and also has drived many birds and animals ",
        "startDate": "2021-12-31T18:30:00.000Z",
        "progressPercentage": "90"
    },
    {
        "_id": "67d94da2492ff38e9d7a8bc0",
        "projectTitle": "Periyakulam Lake",
        "projectBody": "This lake was restored in the year 2021 with a water capacity of 2000 cubic liter and also has drived many birds and animals ",
        "startDate": "2021-12-31T18:30:00.000Z",
        "progressPercentage": "30"
    },
    {
        "_id": "67d94dcf492ff38e9d7a8bc1",
        "projectTitle": "Sulur Lake",
        "projectBody": "This lake was restored in the year 2021 with a water capacity of 2000 cubic liter and also has drived many birds and animals ",
        "startDate": "2021-12-31T18:30:00.000Z",
        "progressPercentage": "60"
    }
];
  projectForm = new FormGroup({
    project: new FormControl('')
  });
  ngOnInit() {
  }

  selectProject(id: string) {
    this.selectedProjectId = id;
  }
  actionOne(){}
  actionTwo(){}
  actionThree(){}
  donate() {
    console.log("Donating to project ID:", this.selectedProjectId);
    // Do your donation logic here
  }
  goToDetails(projectId: string) {
    this.router.navigate(['/project-details', projectId]);
  }
}
