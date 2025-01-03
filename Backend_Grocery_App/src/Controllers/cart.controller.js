import { Cart } from "../Models/cart.models.js";
import { User } from "../Models/user.models.js";
import ApiError from "../Utils/ApiError.js";
import ApiResponse from "../Utils/ApiResponse.js";
import asyncHandler from "../Utils/asyncHandler.js";
import { mongoose } from "mongoose";
const createNewCart = asyncHandler(async (req, res) => {
  const userDetails = req?.user;
  if (!userDetails) {
    throw new ApiError(501, "userDetails is not defined");
  }
  const user = await User.findById(userDetails._id);
  if (!user) {
    new ApiError(402, "user doesnot exist plz register");
  }
  const cartCachedData = req?.body;
  const cartDetails = await Cart.findOne({ user: userDetails._id });
  if (cartDetails) {
    throw new ApiError(401, "cart Already Exist");
  }
  let cart = [];
  const cartItems = [];
  Object.values(cartCachedData).forEach((productDetails) => {
    cartItems.push({
      productId: new mongoose.Types.ObjectId(productDetails._id),
      quantity: productDetails.quantity,
      discountedPrice: productDetails.discountedPrice,
      originalPrice: productDetails.originalPrice,
      offer: productDetails.offer,
      id: productDetails.id,
    });
  });
  cart = await Cart.create({
    user: userDetails._id,
    item: cartItems,
  });
  res.json(new ApiResponse(200, cart, "Cart Data"));
});

const addCacheProductToCart = asyncHandler(async (req, res) => {
  const userDetails = req?.user;
  const cartCachedData = Object.values(req?.body);
  let cart = [];
  if (!userDetails) {
    throw new ApiError(501, "userDetails is not defined");
  }
  const user = await User.findById(userDetails._id);
  if (!user) {
    new ApiError(402, "user doesnot exist plz register");
  }
  const cartDetails = await Cart.findOne({ user: userDetails._id });
  if (!cartDetails) {
    throw new ApiError(401, "cart does not exist plz register");
  }
  const cartData = cartDetails?.item;
  let cartItems = [];
  cartCachedData.map((productDetails) => {
    cartItems.push({
      productId: new mongoose.Types.ObjectId(productDetails._id),
      quantity: productDetails.quantity,
      discountedPrice: productDetails.discountedPrice,
      originalPrice: productDetails.originalPrice,
      offer: productDetails.offer,
      id: productDetails.id,
    });
  });
  cartData.forEach((existingProduct) => {
    // Check if the existing product is already in the cartCachedData
    const existsInCache = cartCachedData.some(
      (cachedProduct) =>
        existingProduct.productId.toString() === cachedProduct._id
    );
    // If it doesn't exist in the cache, add it to cartItems
    if (!existsInCache) {
      cartItems.push({
        productId: existingProduct.productId,
        quantity: existingProduct.quantity,
        discountedPrice: existingProduct.discountedPrice,
        originalPrice: existingProduct.originalPrice,
        offer: existingProduct.offer,
        id: existingProduct.id,
      });
    }
  });
  cart = await Cart.findByIdAndUpdate(
    cartDetails._id,
    { $set: { item: cartItems } },
    { new: true }
  );
  res.json(new ApiResponse(200, cart, "Cart Data"));
});

const getCart = asyncHandler(async (req, res) => {
  const userDetails = req?.user;
  if (!userDetails) {
    throw new ApiError(501, "something went wrong while fetching userDetails");
  }
  const cart = await Cart.aggregate([
    {
      $match: {
        user: new mongoose.Types.ObjectId(userDetails?._id),
      },
    },
    {
      $unwind: "$item",
    },
    {
      $lookup: {
        from: "products",
        localField: "item.productId",
        foreignField: "_id",
        as: "item.productId",
      },
    },
    {
      $project: {
        item: 1,
        user: 1,
      },
    },
    {
      $addFields: {
        "item.productId": {
          $arrayElemAt: ["$item.productId", 0],
        },
      },
    },
    {
      $addFields: {
        "item.productId.images": {
          $slice: ["$item.productId.images", 1],
        },
      },
    },
    {
      $lookup: {
        from: "categories",
        localField: "item.productId.category",
        foreignField: "_id",
        as: "item.productId.category",
      },
    },
    {
      $addFields: {
        "item.productId.category": {
          $arrayElemAt: ["$item.productId.category", 0],
        },
      },
    },
    {
      $addFields: {
        "item.productId.category": "$item.productId.category.category",
      },
    },
    {
      $project: {
        "item.productId.createdAt": 0,
        "item.productId.originalPriceWithWeight": 0,
        "item.productId.discount": 0,
        "item.productId.discountedPriceWithWeight": 0,
        "item.productId.quantity": 0,
        "item.productId.packSizes": 0,
        "item.productId.__v": 0,
        "item.productId.updatedAt": 0,
      },
    },
    {
      $sort: {
        id: 1,
      },
    },
    {
      $group: {
        _id: {
          mainCategory: "$item.productId.category.level1",
          user: "$user",
          _id: "$_id",
        },
        item: {
          $push: "$item",
        },
        count: {
          $sum: 1,
        },
      },
    },
    {
      $sort: {
        count: -1,
      },
    },
    {
      $addFields: {
        user: "$_id.user",
        _id: "$_id._id",
        mainCategory: "$_id.mainCategory",
      },
    },
    {
      $project: {
        count: 0,
      },
    },
  ]);
  if (!cart) {
    throw new ApiError(501, "something went wrong while fetching cart Data");
  }
  res
    .status(200)
    .json(new ApiResponse(200, cart, "cartData successfully recieved"));
});
const updateCart = asyncHandler(async (req, res) => {
  const userDetails = req?.user;
  const { id, quantity } = req?.query;
  const user = await User.findById(userDetails._id);
  if (!user) {
    new ApiError(402, "user doesnot exist plz register");
  }
  if (!id || !quantity) {
    throw new ApiError(501, "all fields are required");
  }
  const cart = await Cart.findOneAndUpdate(
    {
      user: userDetails._id,
      "item.id": id,
    },
    {
      $set: {
        "item.$.quantity": quantity,
      },
    },
    { new: true }
  );
  if (!cart) {
    throw new ApiError(502, "something went wrong while updating cart");
  }
  res.status(200).json(new ApiResponse(200, cart, "cart is updated"));
});
const deleteProductFromCart = asyncHandler(async (req, res) => {
  const userDetails = req?.user;
  const { id } = req?.query;
  const user = await User.findById(userDetails._id);
  if (!user) {
    new ApiError(402, "user doesnot exist plz register");
  }
  if (!id) {
    throw new ApiError(501, "Product_id is not defined");
  }

  const cart = await Cart.updateOne(
    {
      user: userDetails._id,
    },
    {
      $pull: {
        item: { id: id },
      },
    }
  );

  res.status(200).json(new ApiResponse(200, cart, "cart is updated"));
});
const addProductInCart = asyncHandler(async (req, res) => {
  const userDetails = req?.user;

  const { id, quantity, _id, discountedPrice, offer, originalPrice } = req.body;
  const user = await User.findById(userDetails._id);
  if (!user) {
    new ApiError(402, "user doesnot exist plz register");
  }
  const cartDetails = await Cart.findOne({ user: userDetails._id });
  if (!cartDetails) {
    throw new ApiError(401, "cart does not exist plz register");
  }
  const item = {
    productId: new mongoose.Types.ObjectId(_id),
    quantity: quantity,
    discountedPrice: discountedPrice,
    originalPrice: originalPrice,
    offer: offer,
    id: id,
  };
  const cart = await Cart.findOneAndUpdate(
    { user: userDetails._id },
    {
      $push: { item: item },
    },
    { new: true }
  );
  if (!cart) {
    throw new ApiError(501, "error while updating cart");
  }
  res.status(200).json(new ApiResponse(200, cart, "product added to cart"));
});

const totalItems = asyncHandler(async (req, res) => {
  const userDetails = req?.user;
  if (!userDetails) {
    throw new ApiError(501, "user Details are required");
  }

  const cart = await Cart.findOne({
    user: new mongoose.Types.ObjectId(userDetails?._id),
  });
  if (!cart) {
    throw new ApiError(501, "something went wrong while finding cart");
  }
  let countItems = 0;
  const totalItems = {};
  cart.item.forEach((item) => {
    countItems++;
    totalItems[item.id] = item.quantity;
  });
  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { totalItems, countItems },
        " total Number of items fetched SuccessFully"
      )
    );
});
export {
  createNewCart,
  addCacheProductToCart,
  getCart,
  deleteProductFromCart,
  updateCart,
  addProductInCart,
  totalItems,
};
