import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public goodMorningResult;
  public storiesResult;

  event_list = [
    {
      event:' Event 1',
      eventLocation:'Bangalore',
      eventDescription:'Bangalore event',
      img: 'https://picsum.photos/900/500?random&t=1',
      eventStartDate: new Date('2019/05/20'),
      eventEndingDate: new Date('2019/05/24')
    },
     {
      event:' Event 2',
      eventLocation:'Dubai',
      eventDescription:'Dubai event',
      img: 'https://picsum.photos/900/500?random&t=3',
      eventStartDate: new Date('2019/07/28'),
      eventEndingDate: new Date('2019/07/30')
    },
     {
      event:' Event 3',
      eventLocation:'New York',
      eventDescription:'NewYork event',
      img: '/assets/images/slide3.jpg',
      eventStartDate: new Date('2020/05/20'),
      eventEndingDate: new Date('2020/05/24')
    },
     {
      event:' Event 4',
      eventLocation:'Singapore',
      eventDescription:'Singapore event',
      img: 'https://picsum.photos/900/500?random&t=6',
      eventStartDate: new Date('2018/05/20'),
      eventEndingDate: new Date('2018/05/24')
    },
    {
      event:' Event 5',
      eventLocation:'Berlin',
      eventDescription: 'Berlin event',
      img: '/assets/images/slide2.jpg',
      eventStartDate: new Date('2020/07/10'),
      eventEndingDate: new Date('2020/08/14')
    },
    {
      event:' Event 6',
      eventLocation:'Mumbai',
      eventDescription:'Mumbai event',
      img: '/assets/images/slide1.jpg',
      eventStartDate: new Date('2020/07/10'),
      eventEndingDate: new Date('2020/08/14')
    },
    {
      event:' Event 7',
      eventLocation:'Barcelona',
      eventDescription:'Barcelona event',
      img: 'https://picsum.photos/900/500?random&t=6',
      eventStartDate: new Date(),
      eventEndingDate: new Date()
    },
  ]
  upcoming_events =  this.event_list.filter( event => event.eventStartDate > new Date());


  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getGoodMorningJSON().subscribe(data => {
      this.goodMorningResult = data;
    });
    this.getStoriesJSON().subscribe(data => {
      this.storiesResult = data;
    });
  }
  public getStoriesJSON(): Observable<any> {
    return this.http.get("./assets/json/stories.json");
  }
  public getGoodMorningJSON(): Observable<any> {
    return this.http.get("./assets/json/goodMorning.json");
  }


}
