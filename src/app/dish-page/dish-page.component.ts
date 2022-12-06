import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-dish-page',
  templateUrl: './dish-page.component.html',
  styleUrls: ['./dish-page.component.css'],
})
export class DishPageComponent implements OnInit, AfterViewInit {
  index = '';
  constructor(private dataService: FetchDataService) {}

  ngOnInit(): void {
    console.log();
  }

  state = {
    title: [],
    imgUrl: [],
    ingredients: [],
  };

  getIndex() {
    //console.log(this.dataService.index);
  }

  ngAfterViewInit(): void {
    // this.dataService.fetchDataFrom().subscribe((res: any) => {
    //   this.state.imgUrl = res.url;
    //   this.state.title = res.title;
    //   this.state.id = res.id;
    //   this.state.ingredients = res.ingredients;
    // });

    //this.index = this.dataService.index;
    this.dataService.fetchIndividualDish().subscribe((res: any) => {
      this.state.imgUrl = res.url;
      this.state.title = res.title;
      this.state.ingredients = res.ingredients;
    });
    //console.log(this.state);
  }
}
