const validationSign = (email, password, name) => {
  if (name?.length) {
    const isNameValid = /^[a-zA-Z]+$/.test(name);
    if (!isNameValid) return "Name is not valid";
  }

  const isEmailValid =
    /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/.test(
      email
    );
  if (!isEmailValid) return "in valid email";
  const isPassValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (!isPassValid) return "enter a valid password";

  return null;
};

export default validationSign;
