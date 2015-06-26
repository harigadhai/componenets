folderApp.controller('FoldersCtrl',function($scope,$http,$routeParams,$location){

		$scope.newfolder.parentId = $routeParams.parentId;

		 $scope.$on('folderChange', function() { 	 
	        refresh($scope.newfolder.parentId);          
	    });

		var refresh = function(id){
			$http.get('/myFolderList/'+id).success(function(response){
				$scope.MyFolderList = response;				
			});
		}

		


		/*$scope.getChildrens = function(id){
			$scope.parentId = id;
			$location.url('/myFolderList/'+$scope.parentId);
			$http.get('/myFolderList/'+id).success(function(response){
				$scope.MyFolderList = response;				
			});
		}*/
		refresh($scope.newfolder.parentId); 
});
