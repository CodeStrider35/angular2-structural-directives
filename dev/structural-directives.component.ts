import {Component} from "@angular/core";

@Component({
    selector: 'my-structure',
    template: `
        <section class="directive">
            <h2>*ngIf</h2>
            <div>
                Enter a number higher than 10
                <br>
                <input class="form-control" type="text" #number (keyup)="0">
            </div>
            <div *ngIf="number.value > 10">
                Number is greater than 10
            </div>
        </section>
        <section class="directive">
            <h2>*ngFor</h2>
            <div>
                <ul class="list-group">
                    <li class="list-group-item"
                        *ngFor="let item of list, let i = index">{{i}} {{item}} 
                    </li>
                </ul>
            </div>
        </section>
        <section class="directive">
            <h2>[ngSwitch]</h2>
                <div>
                    Enter red, blue or green
                    <br>
                    <input type="text" class="form-control" #color (keyup)="0">
                </div>
                <div [ngSwitch]="color.value">
                    <template [ngSwitchWhen]="'red'"><span style="color: red">Color is Red</span></template>
                    <template [ngSwitchWhen]="'blue'"><span style="color: blue">Color is Red</span></template>
                    <template [ngSwitchWhen]="'green'"><span style="color: green">Color is Red</span></template>
                    <template ngSwitchDefault><span style="color: red">Don't know color</span></template>
                </div>
        </section>
    `,
})

export class StructuralDirectives {
    list = ['Apple', 'Milk', 'Bread'];
}