import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tamilBhak';
  videoItemList = new Array;

  constructor(private http: HttpClient) { }

  ngOnInit() {      
    //Create Json file and store in folder
  }

}
