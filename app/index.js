var angular =require('angular');
var ngModule=angular.module('app',[])



require('./directives').default(ngModule);//use to call es6 modules
//require('./directives')(ngModule);//es5