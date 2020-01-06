import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';

export const SIGNUP_SET_VALIDATOR = (fg: FormGroup) => {
    fg.get('signUpemailCtrl').setValidators([
        Validators.minLength(10),
        Validators.required,
    ]);
    fg.get('signUppasstrl').setValidators([
        Validators.minLength(8),
        Validators.required,
    ]);
}

export const LOGIN_SET_VALIDATOR = (fg: FormGroup) => {
    fg.get('loginEmailCtrl').setValidators([
        Validators.minLength(10),
        Validators.required,
    ]);
    fg.get('loginPassCtrl').setValidators([
        Validators.minLength(8),
        Validators.required,
    ]);
}

export const CREATE_LOGIN_FG = (formBuilder: FormBuilder): FormGroup => {

    const loginFg: FormGroup = formBuilder.group({
        loginEmailCtrl: [''],
        loginPassCtrl: ['']
    });
    LOGIN_SET_VALIDATOR(loginFg);
    return loginFg;
};
export const CREATE_SIGNUP_FG = (formBuilder: FormBuilder): FormGroup => {

    const signupFg: FormGroup = formBuilder.group({
        signUpEmailCtrl: [''],
        singUpPassCtrl: ['']
    });
    SIGNUP_SET_VALIDATOR(signupFg);
    return signupFg;
};