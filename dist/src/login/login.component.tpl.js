export var tpl = "\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                Login\n            </div>\n            <div class=\"panel-body\">\n                <form \n                        id=\"user-edit\" \n                        class=\"form-horizontal\"\n                        novalidate \n                        (ngSubmit)=\"onSubmit(loginForm)\" \n                        [formGroup]=\"loginForm\"\n                    >\n                    <div class=\"form-group\" id=\"email-form\">\n                        <label for=\"email\" class=\"col-xs-2 control-label\">Email</label>\n                        <div class=\"col-xs-10\">\n                            <input type=\"text\" class=\"form-control\" name=\"email\" \n                                formControlName=\"email\" placeholder=\"Email\">\n\n                            <div class=\"text-danger\" *ngIf=\"loginForm.get('email').hasError('required') && loginForm.get('email').touched\">\n                              A valid email is required\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\" id=\"password-form\">\n                        <label for=\"password\" class=\"col-xs-2 control-label\">Password</label>\n                        <div class=\"col-xs-10\">\n                            <input type=\"password\" class=\"form-control\" name=\"password\" \n                                    formControlName=\"password\" placeholder=\"Password\">\n                            <div class=\"text-danger\" *ngIf=\"loginForm.get('password').hasError('required') && loginForm.get('password').touched\">\n                              Password is required.\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <div class=\"col-xs-offset-2 col-xs-4\">\n                            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"loginForm.invalid || wait\">\n                                Login\n                                <i *ngIf=\"wait\" class=\"fa fa-refresh fa-spin fa-fw\"></i> \n                            </button>\n                        </div>\n                    </div>\n                </form>\n\n            </div>\n        </div>\n    </div>\n</div>\n";
//# sourceMappingURL=login.component.tpl.js.map