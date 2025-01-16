(function(){
    "use strict";
    angular
    .module('assignment1',[])
    .controller('isItTooMuchController',function($scope){
        $scope.inputText = '';
        $scope.checkIfTooMuch = ()=> {
            let inputText = $scope.inputText;
            if(inputText == '')
                $scope.message = 'Please enter input text!!.';
            else {
                let splitedText = inputText.split(',');
                splitedText = splitedText.filter(x=> x && x.trim() != '' );
                if(splitedText.length <= 3)
                    $scope.message = 'Enjoy!';
                else
                    $scope.message = 'Too much!';
            } 
        };
        $scope.message = '';
    });
})()