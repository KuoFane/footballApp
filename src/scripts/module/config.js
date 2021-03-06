var app=angular.module("myapp",["ionic"]);
       app.config(function ($stateProvider,$urlRouterProvider) {
           $urlRouterProvider.otherwise("/guide")
           $stateProvider
                .state("guide",{
                   url:"/guide",
                   templateUrl:"./src/scripts/tpl/guide.string",
                   controller:"guideCtrl"
               })
               .state("home",{
                   url:"/home",
                   templateUrl:"./src/scripts/tpl/home.string"           
               })
               .state("home.start",{
                   url:"/start",
                   templateUrl:"./src/scripts/tpl/start.string",
                   controller:"startCtrl"
               })
               .state("home.search",{
                   url:"/search",
                   templateUrl:"./src/scripts/tpl/search.string"
               })
               .state("home.mine",{
                   url:"/mine",
                   templateUrl:"./src/scripts/tpl/mine.string"
               })
               .state("home.exit",{
                   url:"/exit",
                   templateUrl:"./src/scripts/tpl/exit.string"
               })
       })