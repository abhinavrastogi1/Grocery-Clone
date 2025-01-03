import asyncHandler from "../Utils/asyncHandler.js";
import ApiError from "../Utils/ApiError.js";
import { User } from "../Models/user.models.js";
import ApiResponse from "../Utils/ApiResponse.js";
const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access and refresh tokens"
    );
  }
};

// registration of use
const UserExist = asyncHandler(async (req, res) => {
  {
    const { password, phoneNo } = req.body;

    if (phoneNo === "") {
      throw new ApiError(400, "phoneNo. is required");
    }
    if (password === "") {
      throw new ApiError(400, "password is required");
    }
    const userExist = await User.findOne({ phoneNo });
    if (userExist) {
      res.status(200).json(new ApiResponse(200, "userExist"));
    } else {
      res.status(201).json(new ApiResponse(201, "new User", "new User"));
    }
  }
});
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, phoneNo, password, email } = req.body;
  if (
    firstName == "" ||
    lastName == "" ||
    phoneNo == "" ||
    password == "" ||
    email == ""
  ) {
    throw new ApiError(401, "all fields are required");
  }
  let user = await User.findOne({ phoneNo });
  const isEmailalreadyExist = await User.findOne({ email });

  if (user) {
    throw new ApiError(401, "user already exist");
  }
  if (isEmailalreadyExist) {
    throw new ApiError(401, "email already exist");
  }
  user = await User.create({
    firstName,
    lastName,
    phoneNo,
    email,
    password,
  });
  if (!user) {
    throw new ApiError(402, "something went wrong while registering");
  }
  res
    .status(200)
    .json(new ApiResponse(200, user, "user successfully registered"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { password, phoneNo } = req.body;
  const user = await User.findOne({ phoneNo });

  if (!user) {
    throw new ApiError(401, "user doesn't exist please register");
  }
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(403, "password is incorrect");
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  if ((!accessToken, !refreshToken)) {
    throw new ApiError(
      501,
      "something went wrong while generating access token"
    );
  }
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken -createdAt -updatedAt -__v -_id "
  );

  const options = {
    httpOnly: true,
    sameSite:"None" ,
    secure: true,
    expires: new Date(Date.now() + 86400000),
  };
  res
    .status(201)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(201, loggedInUser, "log in successfull"));
});

const logoutUser = asyncHandler(async (req, res) => {
  const userId = req.user._id; // req.user from verfyjwt middleware

  await User.findByIdAndUpdate(
    userId,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );
  const options = {
    httpOnly: true,
    secure: true,
    sameSite:"None" ,
  };
  res
    .status(201)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(201, {}, "user logged out successfully"));
});

export {
  registerUser,
  generateAccessAndRefreshTokens,
  UserExist,
  loginUser,
  logoutUser,
};
