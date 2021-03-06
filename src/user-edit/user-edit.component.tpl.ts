export const tpl: string= `
<div class="row">
    <div class="col-xs-12">
        <button class="btn btn-info btn-sm" routerLink="/list/">
            <i class="fa fa-chevron-left" aria-hidden="true"></i> Back to User List
        </button>
    </div>
</div>
<div class="row">
    <div class="col-xs-12">
        <br/>
    </div>
</div>
<div class="row">
    <div class="col-xs-12">
        <div id="id-title" *ngIf="user.id">
            User {{ user.id }}
        </div>
        <div class="panel panel-default" id="edit-update">
            <tabset>
                <tab [heading]="createEditHeader()">
                    <div class="panel-body">

                            <form 
                                    id="user-edit" 
                                    class="form-horizontal"
                                    novalidate 
                                    (ngSubmit)="onSubmit(userForm)" 
                                    [formGroup]="userForm"
                                >

                                <div class="form-group" *ngIf="user && user.id">
                                    <label for="name" class="col-xs-2 control-label">ID</label>
                                    <div class="col-xs-10">
                                        <p>{{ user.id }}</p>
                                    </div>
                                </div>
                                <div class="form-group" *ngIf="user && user.created_at">
                                    <label for="name" class="col-xs-2 control-label">Joined</label>
                                    <div class="col-xs-10">
                                        <p *ngIf="!user.created_at">n/a</p>
                                        <p>{{ user.created_at }}</p>
                                    </div>
                                </div>
                                <div class="form-group" *ngIf="user.id">
                                    <label for="name" class="col-xs-2 control-label">Last Login</label>
                                    <div class="col-xs-10">
                                        <p *ngIf="!user.last_login">n/a</p>
                                        <p>{{ user.last_login }}</p>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="name" class="col-xs-2 control-label">Name</label>
                                    <div class="col-xs-10">
                                        <input type="text" class="form-control" name="name" formControlName="name" placeholder="Name">
                                        <div class="text-danger" *ngIf="userForm.get('name').hasError('required') && userForm.get('name').touched">
                                        Name is required
                                        </div>
                                        <div class="text-danger" *ngIf="userForm.get('name').hasError('minlength') && userForm.get('name').touched">
                                        Minimum of 2 characters
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="email" class="col-xs-2 control-label">Email</label>
                                    <div class="col-xs-10">
                                        <input type="email" class="form-control" name="email" 
                                                formControlName="email" placeholder="Email">
                                        <div class="text-danger" *ngIf="userForm.get('email').hasError('required') && userForm.get('email').touched">
                                        Email is required
                                        </div>
                                        <div class="text-danger" *ngIf="userForm.get('email').hasError('pattern') && userForm.get('email').touched">
                                        A Valid email is required
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="role" class="col-xs-2 control-label">Role</label>
                                    <div class="col-xs-10" id="select-role">
                                            <select class="form-control" name="role" formControlName="role">
                                                <option *ngFor="let role of roles" 
                                                    [value]="role.value" >
                                                        <!--[selected]="(user && user.role.id == role.value) ? true : null">-->
                                                        {{ role.key }}
                                                </option>
                                            </select>
                                        <div class="text-danger" *ngIf="userForm.get('role').hasError('required') && userForm.get('role').touched">
                                        Role is required
                                        </div>
                                    </div>
                                </div>

                            </form>

                            <!--show password input if creating user-->
                            <erdiko-password *ngIf="!user.id" [passwordForm]="passwordForm"></erdiko-password>

                            <div class="form-group">
                                <div class="col-xs-offset-2 col-xs-4">
                                    <button type="cancel" class="btn btn-warning" routerLink="/list/">Cancel</button>
                                </div>
                                <div class="col-xs-offset-2 col-xs-4">
                                    <button type="submit" class="btn btn-success" (click)="onSubmit(userForm)" [disabled]="!isUserFormValid()">
                                        Save
                                        <i *ngIf="wait" class="fa fa-refresh fa-spin fa-fw"></i> 
                                    </button>
                                </div>
                            </div>
                    </div>
                </tab>

                <tab heading="Update Password" *ngIf="user.id">

                    <div class="panel-body">

                        <erdiko-password [passwordForm]="passwordForm"></erdiko-password>

                        <div class="form-group">
                            <div class="col-xs-offset-2 col-xs-4">
                                <button type="cancel" class="btn btn-warning" routerLink="/list/">Cancel</button>
                            </div>
                            <div class="col-xs-offset-2 col-xs-4">
                                <button type="submit" class="btn btn-success" (click)="onSubmitChangepass(passwordForm)" [disabled]="!isPassFormValid()">
                                    Save
                                    <i *ngIf="passWait" class="fa fa-refresh fa-spin fa-fw"></i> 
                                </button>
                            </div>
                        </div>

                    </div>
                </tab>
            </tabset>
        </div>
    </div>
</div>

<div class="row" *ngIf="user.id">
    <div class="col-xs-12">
        <br/>
        <erdiko-user-event-log [inputUserId]="user.id"></erdiko-user-event-log>
    </div>
</div>
`;
