const form = document.getElementById('userForm');
FormValidation.formValidation(form, {
    fields: {
        firstName: {
            validators: {
                notEmpty: {
                    message: 'The first name is required'
                }
            }
        },
        lastName: {
            validators: {
                notEmpty: {
                    message: 'The last name is required'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'The email address is required'
                },
                emailAddress: {
                    message: 'The input is not a valid email address'
                }
            }
        },
    },
    plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        tachyons: new FormValidation.plugins.Tachyons(),
        submitButton: new FormValidation.plugins.SubmitButton(),
        icon: new FormValidation.plugins.Icon({
            valid: 'fa fa-check',
            invalid: 'fa fa-times',
            validating: 'fa fa-refresh'
        }),
    }
});  
