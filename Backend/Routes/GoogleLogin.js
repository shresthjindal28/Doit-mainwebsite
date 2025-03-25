// import passport from "passport";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import dotenv from "dotenv";
// import jwt from "jsonwebtoken";
// import GoogleUser from "../Models/GoogleUser"; // Ensure correct path

// dotenv.config();

// // JWT Token Generator
// const generateToken = (user) => {
//   return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
// };

// // Google OAuth Strategy
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: `${process.env.FRONTENd_URL}/api/google/users/google-callback`, // Ensure correct URL
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         let user = await GoogleUser.findOne({ googleId: profile.id });

//         if (!user) {
//           user = new GoogleUser({
//             googleId: profile.id,
//             name: profile.displayName,
//             email: profile.emails[0].value,
//           });
//           await user.save();
//         }

//         const token = generateToken(user);
//         return done(null, { user, token });
//       } catch (err) {
//         return done(err, null);
//       }
//     }
//   )
// );

// // Serialize User
// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// // Deserialize User
// passport.deserializeUser((obj, done) => {
//   done(null, obj);
// });

// export default passport;
