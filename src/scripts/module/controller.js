function guideCtrl($scope){
    var mySwiper = new Swiper('.swiper-container');
}

function startCtrl($scope,$http){
     $http.get("json/livelist.json")
            .then(function (response) {
                //console.log(response.data.data);
                $scope.data = response.data.data;
            })
	var mySwiper = new Swiper('.swiper-container',{
        pagination : '.swiper-pagination',
        paginationClickable :true,
        onSlideChangeStart:function(swiper){
        	var index=swiper.activeIndex;
        	$("#nav").find("li").eq(index).addClass("le").siblings().removeClass("le");
            $("#hotDot").find("span").eq(index).addClass("on").siblings().removeClass("on");
        }
    })

    $("#nav").find("li").on("touchstart",function(){
            var index=$(this).index();
            //console.log(index);
            mySwiper[1].slideTo(index);
        });
    $("#hotDot").find("span").on("touchstart",function(){
            var index=$(this).index();
            //console.log(index);
            mySwiper[0].slideTo(index);
        });
}
angular.module("myapp")
    .controller("guideCtrl",guideCtrl)
    .controller("startCtrl",startCtrl)