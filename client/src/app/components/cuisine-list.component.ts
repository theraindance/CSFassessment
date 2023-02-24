import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models';
import { RestaurantService } from '../restaurant-service';

// @Component({
//   selector: 'app-cuisine-list',
//   templateUrl: './cuisine-list.component.html',
//   styleUrls: ['./cuisine-list.component.css']
// })
// export class CuisineListComponent implements OnInit {
//   cuisines: string[] = [];

//   constructor(private restaurantService: RestaurantService) { }

//   ngOnInit(): void {
//     this.restaurantService.getCuisines().subscribe((cuisines: string[]) => {
//       this.cuisines = cuisines;
//     });
//   }
// }

@Component({
  selector: 'app-cuisine-list',
  template: `
    <h2>Cuisines</h2>
    <ul>
      <li *ngFor="let cuisine of cuisines">{{ cuisine }}</li>
    </ul>
  `,
  styles: []
})
export class CuisineListComponent implements OnInit {
  cuisines: string[] | undefined;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getCuisines()
      .subscribe(cuisines => this.cuisines = cuisines);
  }
}

