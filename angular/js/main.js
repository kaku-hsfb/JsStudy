/**
 * Created by Administrator on 2016/11/19.
 */
    angular.module('myApp',[])
        .controller('MainController', function ($scope) {
            $scope.submitForm = function(){
                console.log('表单提交成功！')
            }
        })
        .controller('SignUpController', function($scope){
             $scope.userDatas = {};
             $scope.submitForm = function () {
                console.log($scope.userDatas)
             }

        })

    .directive('compare',function () {
        var o ={};
        o.strict = 'AE';
        o.scope = {
            orgText: '=compare'
        }
        o.require = 'ngModel';
        o.link = function (sco, ele, att, con) {
            con.$validators.compare = function (v) {
                return v == sco.orgText;
            }

            sco.$watch('orgText', function () {
                con.$validate();
            });
        }
        return o;
    })