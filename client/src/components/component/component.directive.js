module.exports = component;

component.$inject = [];
function component(){
    let directive = {
        restrict: 'AE',
        scope: { },
        link: link,
        templateUrl: 'src/components/component/component.html',
        controller: 'SecondComponentController',
        controllerAs: 'vm',
        bindToController: true
    }

    return directive;

    function link(scope, element, attrs, controller){

    }
}