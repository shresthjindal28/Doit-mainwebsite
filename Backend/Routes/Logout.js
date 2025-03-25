import express from 'express'
const router = express.Router();

router.post("/logout", (req, res) => {
  res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "None" });
  res.status(200).json({ message: "Logout successful" });
});

export default router;
