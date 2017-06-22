'use strict';
// app javascript file

(function(){
 var app = angular.module('weatherApp',[]);
  
	app.controller('weatherController', function($scope, $http){

    $scope.location = '';
    
    $scope.initial = function(){
      navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        $http.jsonp("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID=a8f5261ee6863849df5a45497bb27163&callback=JSON_CALLBACK").
        success(function(data){
          $scope.weatherData = data;
          console.log(data);
          $('.loading').hide();
        }).
        error(function(){
          $('.loading').hide();
          $('.error').show().html("Sorry there has been an error connecting to the API");
        });

      }); 
    };

    $scope.initial();  

    $scope.refresh = function(){
      $('.loading').show();
      if($scope.location != ''){ 
        $http.jsonp("http://api.openweathermap.org/data/2.5/weather?q="+$scope.location+"&APPID=a8f5261ee6863849df5a45497bb27163&callback=JSON_CALLBACK").
        	success(function(data){
            $scope.weatherData = data;
            console.log(data);
            $('.loading').hide();
        	}).
          error(function(){
            $('.loading').hide();
            $('.error').show().html("Sorry there has been an error connecting to the API");
          });
      } else {
        $scope.initial();
      }
    };
    
	});//End Controller
  
})();//End App
