folderApp.controller('mainCtrl',function($scope,$http,$routeParams,$location){

		$scope.newfolder = {};
		$scope.newfolder.parentId = null;//-1 root folder
		$scope.newfolder.isFolder = 1;

		$scope.addNewFolder = function(){
			$http.post('/myFolderList',$scope.newfolder).success(function(response){
				 $scope.$broadcast ('folderChange',response);
				 hidePopup($("#createFolderPopup"));
			});
		}

});
 