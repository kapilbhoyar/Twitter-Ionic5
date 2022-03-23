import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

interface TweetData {
  username: string;
  handle: string;
  like: number;
  retweets: number;
  response: number;
  text: string;
  date: string;
  liked: boolean;
  retweet: boolean;
  attachment: string;
  img: string;
  link: string;
}

interface TweetObj {
  tweets: TweetData[];
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Tab1Page implements OnInit, AfterContentChecked {
  @ViewChild('swiper') swiper: SwiperComponent

  tweetData:TweetData[] = [];
  // parseText = "";
  segment = 'home';
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: true
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
      this.http
      .get('https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/tweets.json')
      .subscribe(
        (tweetObj: TweetObj) => {
        console.log(tweetObj);
        this.tweetData = tweetObj.tweets;
        console.log(this.tweetData);
      });

      // this.parseTweet();
      
  }

  ngAfterContentChecked(): void {
      if (this.swiper){
        this.swiper.updateSwiper({});
      }
  }

  parseTweet() {
  //   this.tweetData['text'] = this.tweetData['text'].replace(/\#[a-zA-Z]+/g,"\<span class\=\"highlight\"\>$&\<\/span\>");
  //   this.tweetData['text'] = this.tweetData['text'].replace(/\@[a-zA-Z]+/g,"\<span class\=\"highlight\"\>$&\<\/span\>");
  }

}
