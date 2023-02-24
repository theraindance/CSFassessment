import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from './models';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getCuisines(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cuisines`);
  }

//   getCuisines(): Observable<string[]> {
//     return this.http.get<string[]>('/api/cuisines');
//   }

  getRestaurantNamesSorted(): Observable<string[]> {
	return this.http.get<string[]>(`${this.apiUrl}/restaurants/names/sorted`);
  }
}

	// TODO Task 3 
	// Use the following method to get a list of restaurants by cuisine
	// You can add any parameters (if any) and the return type 
	// DO NOT CHNAGE THE METHOD'S NAME
	// public getRestaurantsByCuisine(???) {
	// 	// Implememntation in here

	// }

// @Injectable({
//   providedIn: 'root'
// })
// export class CuisineService {

//   constructor(private http: HttpClient) { }

//   async getRestaurantsByCuisine(cuisine: string) {
//     try {
//       const restaurants = await this.http.get<any[]>(`/api/cuisines/${cuisine}`).toPromise();
//       return restaurants;
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }
	
	// TODO Task 4
	// Use this method to find a specific restaurant
	// You can add any parameters (if any) 
	// DO NOT CHNAGE THE METHOD'S NAME OR THE RETURN TYPE
	// public getRestaurant(???): Promise<Restaurant> {
	// 	// Implememntation in here

	// }

@Injectable()
export class RestaurantNameService {
  public getRestaurant(searchParams: { name: String; grade: String; score: String; }): Promise<Restaurant> {
    // Get search params
    let { name, grade, score } = searchParams;

    // Build query
    let queryString = `SELECT * FROM restaurant WHERE`;
    if (name) queryString += ` name = ${name} AND`;
    if (grade) queryString += ` grade = ${grade} AND`;
    if (score) queryString += ` score = ${score} AND`;
    queryString = queryString.replace(/ AND$/, '');

    // Query database
    return new Promise((resolve, reject) => {
		
        // db.query(queryString, (err: any, result: any[]) => {
        //     if (err) {
        //         reject(err);
        //     } else {
        //         const name = result[0];
        //         resolve(name);
        //     }
        // });
    });
  }
}

// 	// TODO Task 5
// 	// Use this method to submit a comment
// 	// DO NOT CHANGE THE METHOD'S NAME OR SIGNATURE
// 	public postComment(comment: Comment): Promise<any> {
// 		// Implememntation in here

// 	}
// }