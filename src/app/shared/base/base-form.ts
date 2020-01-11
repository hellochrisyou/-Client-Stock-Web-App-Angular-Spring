import { Input, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { Subject, Observable, of } from 'rxjs';
import { takeUntil, map, filter } from 'rxjs/operators';
import { RequiredStateMatcher } from '@shared/error-state-matcher';
export class CreateBaseForm implements OnInit, OnDestroy {

    public formGroup: FormGroup;
    public formArray: FormArray;
    public formName: string = null;
    public matcher = new RequiredStateMatcher();

    protected componentIdle: Subject<boolean> = new Subject();
    protected _abstractControl: AbstractControl;

    constructor(protected formBuilder: FormBuilder,
        protected changeDetectorRef: ChangeDetectorRef) {
    }

    public ngOnInit(): void {
    }

    public ngOnDestroy(): void {
        this.componentIdle.next(true);
        this.componentIdle.complete();
    }

    public checkFieldNameError(fieldName: string): boolean {
        if (this.formGroup) {
            const formGroup: AbstractControl = this.formGroup.get(fieldName) as AbstractControl;
            return formGroup && formGroup.invalid && (formGroup.dirty || formGroup.touched);
        }
        return false;
    }
}
