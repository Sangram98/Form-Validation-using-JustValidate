
let validation = new JustValidate("#form", {
  errorFieldCssClass: "is-invalid",
  errorFieldStyle: {
    border: "1px solid red",
  },
  errorLabelCssClass: "is-label-invalid",
  errorLabelStyle: {
    color: "red",
    textDecoration: "underlined",
  },
});

validation.addField("#name", [
  {
    rule: "required",
    errorMessage: "name is required",
  },
  {
    rule: "minLength",
    value: 3,
    errorMessage: "name should be more than 5 charecters",
  },
  {
    rule: "maxLength",
    value: 10,
    errorMessage: "name should be less than 20 charecters",
  },
]);

validation.addField("#email", [
  {
    rule: "required",
    errorMessage: "Email is required",
  },
  {
    rule: "email",
    errorMessage: "Email is invalid!",
  },
]);

validation.addField("#password", [
  {
    rule: "required",
    errorMessage: "passowrd is required",
  },
  {
    rule: "strongPassword",
    errorMessage:
      " Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
  },
]);

validation.addField("#mobile", [
  {
    rule: "customRegexp",
    value: /^[+0]{0,2}(91)?[0-9]{10}$/,
    errorMessage: "mobile number should contain 10 digit numbers",
  },
  {
    rule: "required",
    errorMessage: "mobile number is required",
  },
]);

validation.addField("#repeat-password", [
  {
    validator: (value, fields) => {
      if (fields["#password"].elem) {
        const repeatPasswordValue = fields["#password"].elem.value;
        return value === repeatPasswordValue;
      }
      return true;
    },
    errorMessage: "Password should be the same",
  },
  {
    rule: "required",
    errorMessage: "Confirm passowrd is required ",
  },
]);
