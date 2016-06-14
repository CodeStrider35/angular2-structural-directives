import {Component} from '@angular/core';
import {AttributeDirectives} from "./attribute-directives.component";
import {StructuralDirectives} from "./structural-directives.component";

@Component({
    selector: 'my-app',
    template: `
        <my-attribute></my-attribute>
        <br>
        <my-structure></my-structure>
    `,
    directives: [AttributeDirectives, StructuralDirectives]
})
export class AppComponent {
   
}