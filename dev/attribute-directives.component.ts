import {Component} from "@angular/core";
import {HighlightDirective} from "./highlight.directive";
@Component({
    selector: 'my-attribute',
    template: `
        <div [myHighLight]="'red'">
            Highlight Me
        </div>
        <br>
        <div [myHighLight]="'blue'">
            Another Highlight
        </div>
    `,
    directives: [HighlightDirective]
})

export class AttributeDirectives {

}