app.controller('meetupsController',['$scope','$resource',function ($scope,$resource){
	//$scope.meetupsCount = 10;

	//Creating a restfull API service
	var Meetup = $resource('/api/meetups');
	
	Meetup.query(function(results){
		$scope.meetups = results;
	});
	//creating a collection to list all member of meetups
	$scope.meetups = [];

	//We are going to push name that enters via form submit controller "createMeetup()" on each time on button click
	$scope.createMeetup = function(){
		//$scope.meetups.push({ name: $scope.meetupName});
		//$scope.meerupName = "";

		var meetup = new Meetup();
		meetup.name = $scope.meetupName;
		meetup.$save(function(result){
			$scope.meetups.push(result);
			$scope.meetupName = '';
		});
	}
}]);