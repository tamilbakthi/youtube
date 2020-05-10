import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';


//import {SampleJson } from '../../assets/json/stories.json';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.css']
})
export class CategoryListingComponent implements OnInit {
  public displayList;
  public categoryType;
  public result;

  goodmorning_list = [
    {
      event:' Event 1',
      title:'Bangalore',
      description:'Bangalore event',
      youtubeUrl: 'https://www.youtube.com/watch?v=AIUZ7Zqb3jE',
      img: 'https://picsum.photos/900/500?random&t=1',
      eventStartDate: new Date('2019/05/20'),
      eventEndingDate: new Date('2019/05/24')
    },
     {
      event:' Event 2',
      title:'Dubai',
      description:'Dubai event',
      youtubeUrl: 'https://www.youtube.com/watch?v=AIUZ7Zqb3jE',
      img: 'https://picsum.photos/900/500?random&t=3',
      eventStartDate: new Date('2019/07/28'),
      eventEndingDate: new Date('2019/07/30')
    },
     {
      event:' Event 3',
      title:'New York',
      description:'NewYork event',
      youtubeUrl: 'https://www.youtube.com/watch?v=AIUZ7Zqb3jE',
      img: '/assets/images/slide3.jpg',
      eventStartDate: new Date('2020/05/20'),
      eventEndingDate: new Date('2020/05/24')
    },
     {
      event:' Event 4',
      title:'Singapore',
      description:'Singapore event',
      youtubeUrl: 'https://www.youtube.com/watch?v=AIUZ7Zqb3jE',
      img: 'https://picsum.photos/900/500?random&t=6',
      eventStartDate: new Date('2018/05/20'),
      eventEndingDate: new Date('2018/05/24')
    },
    {
      event:' Event 5',
      title:'Berlin',
      description: 'Berlin event',
      img: '/assets/images/slide2.jpg',
      eventStartDate: new Date('2020/07/10'),
      eventEndingDate: new Date('2020/08/14')
    },
    {
      event:' Event 6',
      title:'Mumbai',
      description:'Mumbai event',
      img: '/assets/images/slide1.jpg',
      eventStartDate: new Date('2020/07/10'),
      eventEndingDate: new Date('2020/08/14')
    },
    {
      event:' Event 7',
      title:'Barcelona',
      description:'Barcelona event',
      img: 'https://picsum.photos/900/500?random&t=6',
      eventStartDate: new Date(),
      eventEndingDate: new Date()
    },
  ]

  bakthiStory_list = [
    {
      event:' Event 1',
      title:'Bangalore',
      description:'Bangalore event',
      img: 'https://picsum.photos/900/500?random&t=1',
      eventStartDate: new Date('2019/05/20'),
      eventEndingDate: new Date('2019/05/24')
    },
     {
      event:' Event 2',
      title:'Dubai',
      description:'Dubai event',
      img: 'https://picsum.photos/900/500?random&t=3',
      eventStartDate: new Date('2019/07/28'),
      eventEndingDate: new Date('2019/07/30')
    },
     {
      event:' Event 3',
      title:'New York',
      description:'NewYork event',
      img: '/assets/images/slide3.jpg',
      eventStartDate: new Date('2020/05/20'),
      eventEndingDate: new Date('2020/05/24')
    },
     {
      event:' Event 4',
      title:'Singapore',
      description:'Singapore event',
      img: 'https://picsum.photos/900/500?random&t=6',
      eventStartDate: new Date('2018/05/20'),
      eventEndingDate: new Date('2018/05/24')
    },
    {
      event:' Event 5',
      title:'Berlin',
      description: 'Berlin event',
      img: '/assets/images/slide2.jpg',
      eventStartDate: new Date('2020/07/10'),
      eventEndingDate: new Date('2020/08/14')
    },
    {
      event:' Event 6',
      title:'Mumbai',
      description:'Mumbai event',
      img: '/assets/images/slide1.jpg',
      eventStartDate: new Date('2020/07/10'),
      eventEndingDate: new Date('2020/08/14')
    },
    {
      event:' Event 7',
      title:'Barcelona',
      description:'Barcelona event',
      img: 'https://picsum.photos/900/500?random&t=6',
      eventStartDate: new Date(),
      eventEndingDate: new Date()
    },
  ]

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id"+id);
    if(id=='1'){
      this.displayList =this.goodmorning_list;
      this.categoryType = "Good Morning"
      console.log("Good Morning List");

      this.getGoodMorningJSON().subscribe(data => {
        this.result = data;
      });
    }else{
      console.log("Story List");
      this.displayList =this.bakthiStory_list;
      this.categoryType = "Bakthi Stories";

      this.getStoriesJSON().subscribe(data => {
        this.result = data;
      });
    }
   
  }

  public getStoriesJSON(): Observable<any> {
    return this.http.get("./assets/json/stories.json");
  }

  public getGoodMorningJSON(): Observable<any> {
    return this.http.get("./assets/json/goodMorning.json");
  }


  public restToUIMap(data){

  }

}
