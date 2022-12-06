import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { NgForm } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchTerm = '';
  @ViewChild('f') userInput!: NgForm;
  showContainer = false;
  @Output() emitIndex = new EventEmitter<number>();

  constructor(
    private http: HttpClient,
    private dataService: FetchDataService
  ) {}

  ngOnInit(): void {}

  state = {
    imgURL: [],
    title: [],
    id: [],
  };

  onSubmit() {
    //console.log(this.userInput.value.userInput);
    //console.log(this.state.title);
  }

  getResults(term: any) {
    term.length > 1 ? (this.showContainer = true) : false;
    term.length == 0 ? (this.showContainer = false) : true;
    this.dataService.term = term;

    /////////////
    this.dataService.fetchDataFrom().subscribe((res: any) => {
      this.state.imgURL = res.url;
      this.state.title = res.title;
      this.state.id = res.id;
    });
  }

  onGetIndex(index: any) {
    //this.dataService.index = index;

    this.dataService.dishId = this.state.id[index];
    //console.log(window.location.hash);
  }
}

////////////////
//this.http
//   .get(`https://forkify-api.herokuapp.com/api/v2/recipes`, {
//     params: new HttpParams().set('search', term),
//   })
//   .pipe(
//     map((responseData: any) => {
//       const resArray: any = {
//         title: [],
//         url: [],
//       };

//       responseData.data.recipes.forEach((recipe: any) => {
//         resArray.title.push(recipe.title);
//         resArray.url.push(recipe.image_url);
//         // this.state.title = recipe.title;
//         // this.state.imgURL = recipe.imgURL;
//         // console.log(this.state.title);
//       });
//       return resArray;
//     })
//   )
//   .subscribe((res: any) => {
//     this.state.imgURL = res.url;
//     this.state.title = res.title;
//   });
