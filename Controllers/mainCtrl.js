var app = angular.module('myWebsite');

app.controller('MainCtrl', function($scope) {

 new WOW().init();


  // angular.element(document.querySelector('.myName')).on('click', function() {
  //   console.log("YO!, You did it sucker");
  // })

  //    var feed = new Instafeed({
  //       get: 'user',
  //       userId: 2282892,
  //       accessToken: '2282892.467ede5.1f290f84078a4f68a6abb59f364fc6fe',
  //       template: '<a href="{{link}}"><img src="{{image}}" /></a>'
  //   });
  //   feed.run();

});