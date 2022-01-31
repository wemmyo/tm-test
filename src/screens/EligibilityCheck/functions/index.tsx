export const formErrors = (
  values: {
    // [x: string]: any;
    title?: string;
    firstName?: string;
    lastName?: string;
    dob?: string;
    income?: string;
    employment?: string;
    houseNumber?: string;
    postCode?: string;
  },
  cb: (err: any) => void
) => {
  const formErrors: {
    firstName?: string | undefined;
    income?: string | undefined;
    employment?: string | undefined;
  } = {};

  const { firstName, income, employment } = values;
  let validForm = true;

  if (!firstName) {
    validForm = false;
    formErrors.firstName = "First name is required";
  }
  if (!income || parseInt(income, 10) < 1) {
    validForm = false;
    formErrors.income = "Income must be greater than 0";
  }
  if (!employment) {
    validForm = false;
    formErrors.employment = "Employment status required";
  }

  // setErrors(formErrors);
  cb(formErrors);
  return validForm ? false : true;
};
