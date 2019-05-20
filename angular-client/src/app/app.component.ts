import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

// Import rxjs map operator
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  // Declare empty list of train
  trains: any[] = [];

  constructor(private http: Http) {}

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    console.log("Before Get all Trains");
    this.getAllTrains();
  }

  // Add one Train to the API
  addTrain(trainname, trainno,trainorigin,traindest) {
    console.log(trainname);
    console.log(trainno);
    console.log(trainorigin);
    console.log(traindest);
    this.http.post(`${this.API}/trains`, {trainname, trainno,trainorigin,traindest})
      .subscribe(() => {
        this.getAllTrains();
      });
  }

  // Get all Trains from the API
  getAllTrains() {
    console.log("Inside get all the trains");
    this.http.get(`${this.API}/trains`)
      .subscribe(train => {
        console.log(train);
        this.trains = train.json();
      });
  }
}
