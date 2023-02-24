package vttp2022.csf.assessment.server.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

//import vttp2022.csf.assessment.server.models.Comment;
import vttp2022.csf.assessment.server.models.Restaurant;

@Repository
public interface RestaurantRepository extends MongoRepository<Restaurant, String> {
	// TODO Task 2
	// Use this method to retrive a list of cuisines from the restaurant collection
	// You can add any parameters (if any) and the return type 
	// DO NOT CHNAGE THE METHOD'S NAME
	// Write the Mongo native query above for this method
	@Query(value = "{ 'cuisine': { $exists: true } }", fields = "{ 'cuisine': 1, '_id': 0 }")
List<String> findDistinctCuisines();
	@Query(value = "{ 'name': { $exists: true } }", fields = "{ 'name': 1, '_id': 0 }")
	List<String> findRestaurantByName();
}


// 	public ??? getCuisines(???) {
// 		// Implmementation in here

// 	}

// 	// TODO Task 3
// 	// Use this method to retrive a all restaurants for a particular cuisine
// 	// You can add any parameters (if any) and the return type 
// 	// DO NOT CHNAGE THE METHOD'S NAME
// 	// Write the Mongo native query above for this method
// 	//  
// 	public ??? getRestaurantsByCuisine(???) {
// 		// Implmementation in here

// 	}

// 	// TODO Task 4
// 	// Use this method to find a specific restaurant
// 	// You can add any parameters (if any) 
// 	// DO NOT CHNAGE THE METHOD'S NAME OR THE RETURN TYPE
// 	// Write the Mongo native query above for this method
// 	//  
// 	public Optional<Restaurant> getRestaurant(???) {
// 		// Implmementation in here
		
// 	}

// 	// TODO Task 5
// 	// Use this method to insert a comment into the restaurant database
// 	// DO NOT CHNAGE THE METHOD'S NAME OR THE RETURN TYPE
// 	// Write the Mongo native query above for this method
// 	//  
// 	public void addComment(Comment comment) {
// 		// Implmementation in here
		
// 	}
	
// 	// You may add other methods to this class

// }
