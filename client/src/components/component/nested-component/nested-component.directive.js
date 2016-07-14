module.exports = nestedComponent;

nestedComponent.$inject = [];
function nestedComponent (){
    let directive = {
        restirct: 'AE',
        scope: { },
        link: link,
        templateUrl: 'src/components/component/nested-component/nested-component.html',
        controller: 'NestedComponentController',
        controllerAs: 'vm',
        bindToController: true
    }

    return directive;

    function link(scope, element, attrs, controller){

    }
    
}
