import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  console.log("This is JWT: ", process.env.JWT_TOKEN);
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "10d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, // xss
    secure: true,
    sameSite: "strict", // csrf
  });
};
export default createTokenAndSaveCookie;
