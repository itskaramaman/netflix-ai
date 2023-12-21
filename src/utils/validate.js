export const isEmailValid = (email) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
    email
  );
  if (!isEmailValid) return "Email ID is not valid";

  return null;
};

export const isPasswordValid = (password) => {
  const isPassValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

  if (!isPassValid)
    return "Password should have a capital letter, a number and a special character";

  return null;
};

export const isNameValid = (name) => {
  if (!name || name.trim().length === 0) return "Name should not be empty";

  return null;
};
