import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchTerm = '';
  @ViewChild('f') userInput!: NgForm;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  state = {
    imgURL: [],
    title: [],
  };

  onSubmit() {
    //console.log(this.userInput.value.userInput);
    //console.log(this.state.title);
  }

  getResults(term: any) {
    this.http
      .get(`https://forkify-api.herokuapp.com/api/v2/recipes`, {
        params: new HttpParams().set('search', term),
      })
      .pipe(
        map((responseData: any) => {
          const resArray: any = {
            title: [],
            url: [],
          };

          responseData.data.recipes.forEach((recipe: any) => {
            resArray.title.push(recipe.title);
            resArray.url.push(recipe.image_url);
            // this.state.title = recipe.title;
            // this.state.imgURL = recipe.imgURL;
            // console.log(this.state.title);
          });
          return resArray;
        })
      )
      .subscribe((res: any) => {
        this.state.imgURL = res.url;
        this.state.title = res.title;
        console.log(res);
      });
  }

  // fetchDishes() {
  //   this.http
  //     .get(`https://forkify-api.herokuapp.com/api/v2/recipes`, {
  //       params: new HttpParams().set('search', this.userInput.value.userInput),
  //     })
  //     .subscribe((res) => {
  //       console.log(res);
  //     });
  //   console.log(this.userInput.value.userInput);
  // }

  // getResults(term: any) {
  //   this.http
  //     .get(`https://forkify-api.herokuapp.com/api/v2/recipes`, {
  //       params: new HttpParams().set('search', term),
  //     })
  //     .subscribe((res: any) => {
  //       console.log(res);
  //       res.data.recipes.forEach((recipe: any) => {
  //         this.state.title = recipe.title;
  //         this.state.imgURL = recipe.imgURL;
  //         console.log(this.state.title);
  //       });
  //     });
  // }
}
