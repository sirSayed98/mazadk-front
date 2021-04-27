export const ONLY_NUMBER_REG = /^\d*$/;
export const PASSWORD_REG = /(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^_&*])(?=.{8,})/gm;

export const PASSWORD_MSG =
  "Minimum eight characters, at least one letter, one number and one special character [!@#$%^_&*]";

export const NUMBERS_MSG = "Only Numbers";

export const Check = (RgularExp, value) => {
  let reg = new RegExp(RgularExp).test(value);
  if (!reg) {
    return false;
  } else {
    return true;
  }
};
