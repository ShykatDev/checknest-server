export const createUser = async (req, res, next) => {
  // validation
  // connect DB and create User
  // Response
  return res.json({
    message: "register",
  });
};

export const loginUser = async (req, res, next) => {
  return res.json({
    message: "login",
  });
};
