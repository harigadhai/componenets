var folderApp = angular.module('myFolderApp',['ngRoute']);

folderApp.config(['$routeProvider', function($routeProvider) {
	    $routeProvider.
	      when('/myFolderList/:parentId', {
	        templateUrl:'folders.html',
	        controller: 'FoldersCtrl'
	    });    	       
	}]);