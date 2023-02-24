package vttp2022.csf.assessment.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

import vttp2022.csf.assessment.server.models.Restaurant;
import vttp2022.csf.assessment.server.repositories.RestaurantRepository;
import vttp2022.csf.assessment.server.services.RestaurantService;

import static com.mongodb.client.model.Filters.*;
import org.bson.Document;
import java.util.*;

@RestController
public class RestaurantController {
  @Autowired
  private RestaurantRepository restaurantRepository;

  @Autowired
  private MongoDatabase mongoDatabase;

  @GetMapping("/api/cuisines")
  public ResponseEntity<?> getCuisines() {
    List<String> cuisines = restaurantRepository.findDistinctCuisines();
    return ResponseEntity.ok(cuisines);
  }

  @GetMapping("/api/restaurants/{cuisine}")
  public ResponseEntity<?> getRestaurantsByCuisine(@PathVariable String cuisine) {
    MongoCollection<Document> collection = mongoDatabase.getCollection("listofrestaurants");
    List<Document> restaurants = collection.find(eq("cuisine", cuisine)).into(new ArrayList<>());
    return ResponseEntity.ok(restaurants);
  }

//   @GetMapping("/restaurants")
// public List<Map<String, Object>> getAllRestaurants() {
//     List<Restaurant> restaurants = restaurantRepository.findAll();
//     List<Map<String, Object>> result = new ArrayList<>();
//     for (Restaurant restaurant : restaurants) {
//         Map<String, Object> map = new HashMap<>();
//         map.put("name", restaurant.getName());
//         map.put("cuisine", restaurant.getCuisine());
//         result.add(map);
//     }
//     return result;
// }
  // @GetMapping("/restaurants")
  //   public List<Restaurant> getAllRestaurants() {
  //     return RestaurantService.getAllRestaurants();
  //   }

}