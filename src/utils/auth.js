// ===============================
// REGISTER USER
// ===============================

export const registerUser = (
  userData
) => {
  const users =
    JSON.parse(
      localStorage.getItem(
        "foodryUsers"
      )
    ) || [];

  // ===============================
  // CHECK EMAIL EXISTS
  // ===============================

  const userExists = users.find(
    (u) =>
      u.email.toLowerCase() ===
      userData.email.toLowerCase()
  );

  if (userExists) {
    return {
      success: false,
      message:
        "Email already registered",
    };
  }

  // ===============================
  // SAVE USER
  // ===============================

  users.push(userData);

  localStorage.setItem(
    "foodryUsers",
    JSON.stringify(users)
  );

  return {
    success: true,
  };
};

// ===============================
// LOGIN USER
// ===============================

export const loginUser = (
  email,
  password
) => {
  const users =
    JSON.parse(
      localStorage.getItem(
        "foodryUsers"
      )
    ) || [];

  const user = users.find(
    (u) =>
      u.email.toLowerCase() ===
        email.toLowerCase() &&
      u.password === password
  );

  // ===============================
  // INVALID USER
  // ===============================

  if (!user) {
    return {
      success: false,
      message:
        "Invalid email or password",
    };
  }

  // ===============================
  // SAVE CURRENT USER
  // ===============================

  localStorage.setItem(
    "foodryCurrentUser",
    JSON.stringify(user)
  );

  return {
    success: true,
    user,
  };
};

// ===============================
// LOGOUT USER
// ===============================

export const logoutUser = () => {
  localStorage.removeItem(
    "foodryCurrentUser"
  );

  return {
    success: true,
  };
};

// ===============================
// GET CURRENT USER
// ===============================

export const getCurrentUser = () => {
  return JSON.parse(
    localStorage.getItem(
      "foodryCurrentUser"
    )
  );
};

// ===============================
// CHECK LOGIN
// ===============================

export const isLoggedIn = () => {
  return !!localStorage.getItem(
    "foodryCurrentUser"
  );
};