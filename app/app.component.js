System.register(['@angular/core', "./attribute-directives.component", "./structural-directives.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, attribute_directives_component_1, structural_directives_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (attribute_directives_component_1_1) {
                attribute_directives_component_1 = attribute_directives_component_1_1;
            },
            function (structural_directives_component_1_1) {
                structural_directives_component_1 = structural_directives_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <my-attribute></my-attribute>\n        <br>\n        <my-structure></my-structure>\n    ",
                        directives: [attribute_directives_component_1.AttributeDirectives, structural_directives_component_1.StructuralDirectives]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBQTtnQkFFQSxDQUFDO2dCQVhEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxvR0FJVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxvREFBbUIsRUFBRSxzREFBb0IsQ0FBQztxQkFDMUQsQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXR0cmlidXRlRGlyZWN0aXZlc30gZnJvbSBcIi4vYXR0cmlidXRlLWRpcmVjdGl2ZXMuY29tcG9uZW50XCI7XG5pbXBvcnQge1N0cnVjdHVyYWxEaXJlY3RpdmVzfSBmcm9tIFwiLi9zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bXktYXR0cmlidXRlPjwvbXktYXR0cmlidXRlPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxteS1zdHJ1Y3R1cmU+PC9teS1zdHJ1Y3R1cmU+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbQXR0cmlidXRlRGlyZWN0aXZlcywgU3RydWN0dXJhbERpcmVjdGl2ZXNdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICBcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
