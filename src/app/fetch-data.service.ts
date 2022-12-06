import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  // index = '';
  term = '';
  dishId = '';
  constructor(private http: HttpClient) {}

  fetchDataFrom() {
    return this.http
      .get(`https://forkify-api.herokuapp.com/api/v2/recipes`, {
        params: new HttpParams().set('search', this.term),
      })
      .pipe(
        map((responseData: any) => {
          const resArray: any = {
            title: [],
            url: [],
            id: [],
          };

          responseData.data.recipes.forEach((recipe: any) => {
            resArray.title.push(recipe.title);
            resArray.url.push(recipe.image_url);
            resArray.id.push(recipe.id);
          });
          return resArray;
        })
      );
  }

  fetchIndividualDish() {
    //console.log(this.dishId);
    return this.http
      .get(`https://forkify-api.herokuapp.com/api/v2/recipes/${this.dishId}`)
      .pipe(
        map((responseData: any) => {
          console.log(responseData);
          const resArray: any = {
            title: [],
            url: [],
            ingredients: [],
          };

          resArray.url.push(responseData.data.recipe.image_url);
          resArray.title.push(responseData.data.recipe.title);
          console.log(resArray.title);

          responseData.data.recipe.ingredients.forEach((ingredient: any) => {
            resArray.ingredients.push(ingredient.description);
            console.log(resArray.ingredients);
          });
          return resArray;
        })
      );
  }
}
