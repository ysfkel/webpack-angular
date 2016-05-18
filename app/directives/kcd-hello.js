

export default ngModule=>{
    ngModule.directive('kcdHello',()=>{
       return {
           restrict:'E',
           scope:{},
           templateUrl:'directives/kcd-hello.html',
           controllerAs:'vm',
           controller:function(){
               var vm=this;
               vm.greeting='hello webpack';
           },
           link:function(){
               
           }
       } 
    });
}