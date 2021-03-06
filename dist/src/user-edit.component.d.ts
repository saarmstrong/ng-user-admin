import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from './users.service';
import { User } from "./user.model";
import { PasswordComponent } from './password.component';
import { MessageService } from './message.service';
export declare class UserEditComponent implements OnInit {
    passwordComponent: PasswordComponent;
    usersService: UsersService;
    route: ActivatedRoute;
    router: Router;
    fb: FormBuilder;
    messageService: MessageService;
    wait: any;
    passWait: any;
    private title;
    userForm: FormGroup;
    passwordForm: FormGroup;
    user: User;
    constructor(usersService: UsersService, route: ActivatedRoute, router: Router, messageService: MessageService);
    ngOnInit(): void;
    private _initForms();
    isUserFormValid(): boolean;
    isPassFormValid(): boolean;
    onSubmit({value, valid}: {
        value: any;
        valid: boolean;
    }): Promise<void> | undefined;
    private _handleResponse(res);
    onSubmitChangepass({value, valid}: {
        value: any;
        valid: boolean;
    }): Promise<void> | undefined;
    private _handlePasswordResponse(res);
    private _handleError(error);
    createEditHeader(): string;
}
