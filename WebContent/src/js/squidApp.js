var squidApp = angular.module("squidApp",['ngMaterial',"ngImageAppear"])

	var hashs =[{
		hash:["#amigas", "#neve", "#viagem"]
	},
	{
		hash:["#viagem", "#paris", "#trip"]
	},
	
	{
		hash:["#trip", "#cabana", "#noite", "#viagem"]
	}
	];

squidApp.controller('tagController', function(){	
	this.newItem = {};
	this.addHash = function(newhash){
		console.log(newhash);
		hashs.hash.push(this.newItem);
		this.newItem = {};
	};
		
});


squidApp.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

squidApp.controller ('InstantSearchController', function ($scope){		
	this.listahash = hashs;
	
	this.check = false;
	this.textHash="";
	
	  this.isHash = function(textHash){
		this.textHash = textHash;
		angular.forEach(hashs, function(hash){
			console.log(textHash)
			angular.forEach(hash.hash, function(value){
				if(textHash = value){
					this.check = true;
					return this.check;
				}
			});
		});
			
	};

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.images = [
		{
			title: '#amigas #neve #board',
			image: './img/insta/insta-1.jpg'
		},
		{
			title: '#viagem #paris #trip',
			image: './img/insta/insta-2.jpg'
		},
		{
			title: '#trip #cabana #noite #viagem',
			image: './img/insta/insta-4.jpg'
		},

	
	]


});