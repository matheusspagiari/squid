var squidApp = angular.module("squidApp",['ngMaterial',"ngImageAppear"])


squidApp.controller('GalleryController', function(){
	this.pictures = photos;
});



var photos = [{
	      images: [
	        "./img/insta/insta-1.jpg",
	        "./img/insta/insta-2.jpg",
	        "./img/insta/insta-7.jpg",
	        "./img/insta/insta-4.jpg"
	      ],
}];


squidApp.controller('searchController', function($scope) {
	  $scope.data = data;
	  $scope.setQuery = function(query) {
	    $scope.query = query;
	  };
	});

   //Hide and show
	
	squidApp.controller('hideController', function(){
	
	});
	// Returns the search function that will perform the filter on the data.
	//
	squidApp.filter('search', function() {
	  return search;
	});

	// Returns an array of items where the item text matches the search query. In
	// this example, both the query and item are converted to lower case for easier
	// matching.
	//
	function search(arr, query) {
	  if (!query) {
	    return arr;
	  }

	  var results = [];
	  query = query.toLowerCase();

	  angular.forEach(arr, function(item) {
	    if (item.toLowerCase().indexOf(query) !== -1) {
	      results.push(item);
	    }
	  });

	  return results;
	};
