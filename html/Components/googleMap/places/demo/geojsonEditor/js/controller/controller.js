var myApp = angular.module("myApp",[]);

myApp.controller("AppCtrl",function($scope,$http){

	$scope.geoJson = "";
	$scope.submitGeoJson = function(){
		$http.post('/geojson',$scope.geoJson).success(function(response){
			alert(response)
			document.getElementById(popup).style.display = 'none';
		});
	}
	
});
