import {Directive, ElementRef, OnInit, Renderer} from '@angular/core';

@Directive({
    selector: '[myHighLight]',
    inputs: ['highlightColor:myHighLight'],
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HighlightDirective {
    private _defaultColor = 'green';
    highlightColor: string;

    constructor(private _elRef: ElementRef, private _renderer: Renderer) {}

    //ngOnInit() {
        //this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', this.highlightColor || this._defaultColor);
    //}

    private highlight(color: string) {
        this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', color);
    }

    onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
    }

    onMouseLeave() {
        this.highlight(null);
    }
}