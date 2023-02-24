import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CuisineListComponent } from './components/cuisine-list.component';
import { RestaurantCuisineComponent } from './components/restaurant-cuisine.component';
import { RestaurantDetailsComponent } from './components/restaurant-details.component';
import { HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: 'cuisines', component: CuisineListComponent },
  { path: 'cuisines/:cuisineId/restaurants', component: RestaurantCuisineComponent },
  { path: 'restaurants/:restaurantId', component: RestaurantDetailsComponent },
  { path: '', redirectTo: '/cuisines', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CuisineListComponent,
    RestaurantCuisineComponent,
    RestaurantDetailsComponent
  ],
  imports: [
    // AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // for debugging purposes only
    )
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
