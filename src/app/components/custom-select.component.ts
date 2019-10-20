import { Component, ViewChild, HostBinding, Input, ChangeDetectionStrategy, Optional, Self, DoCheck, OnInit, NgZone } from '@angular/core';
import { ControlValueAccessor, NgControl, NgForm, FormGroupDirective, FormControlDirective, FormControlName, FormControl, FormBuilder } from '@angular/forms';
import { MatFormFieldControl, MatSelect, CanUpdateErrorState, ErrorStateMatcher } from '@angular/material';
import { Subject, Subscription } from 'rxjs';

@Component({
    selector: 'custom-select',
    templateUrl: './custom-select.component.html',
    styleUrls: [
        './custom-select.component.scss'
    ],
    providers: [
        {
            provide: MatFormFieldControl,
            useExisting: CustomSelectComponent
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomSelectComponent implements ControlValueAccessor, OnInit, DoCheck {

    @Input()
    foods: string[];

    @Input()
    get errorStateMatcher(): ErrorStateMatcher {
        return this.select.errorStateMatcher;
    }
    set errorStateMatcher(val) {
        this.select.errorStateMatcher = val;
    }

    @Input()
    get placeholder() {
        return this.select.placeholder;
    }
    set placeholder(plh) {
        this.select.placeholder = plh;
    }

    @Input()
    get value() {
        return this.select.value;
    }
    set value(val) {
        this.select.value = val;
    }

    @ViewChild('select',{static:false})
    select: MatSelect;

    control: FormControl;

    constructor(
        @Optional() @Self() ngControl: NgControl,
        @Optional() private _controlName: FormControlName) {
        if (ngControl) {
            ngControl.valueAccessor = this;
        }
    }

    ngOnInit(): void {
        this.control = this._controlName.control;
    }

    ngDoCheck(): void {
        this.select.updateErrorState();
    }

    writeValue(obj: any): void {
        this.value = obj;
    }
    registerOnChange(fn: any): void {
        this.select.registerOnChange(fn);
    }
    registerOnTouched(fn: any): void {
        this.select.registerOnTouched(fn);
    }
    setDisabledState?(isDisabled: boolean): void {
        this.select.setDisabledState(isDisabled);
    }
}