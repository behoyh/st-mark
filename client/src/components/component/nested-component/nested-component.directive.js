module.exports = nestedComponent;

function nestedComponent (){
    let directive = {
        restirct: 'AE',
        scope: { },
        templateUrl: 'src/components/component/nested-component/nested-component.html',
        controller: 'NestedComponentController',
        controllerAs: 'vm',
        bindToController: true
    }

    return directive;
}
