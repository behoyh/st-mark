module.exports = component;

function component(){
    let directive = {
        restrict: 'AE',
        scope: { },
        templateUrl: 'src/components/component/component.html',
        controller: 'SecondComponentController',
        controllerAs: 'vm',
        bindToController: true
    }

    return directive;

}