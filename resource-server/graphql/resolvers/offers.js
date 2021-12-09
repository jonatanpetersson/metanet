import { OfferModel } from "../../models/offer.js";

export const getOffersByUsername = async (args) => {
  console.log(args);
  try {
    console.log(args);
    const fetchedOffers = await OfferModel.find({$or:[{ bidder: args.user }, { owner: args.user }]});
    console.log(fetchedOffers.replies)
    return fetchedOffers;
  } catch (err) {
    console.log(err.message);
  };
};

export const updateOfferById = async ({ offer: { _id, reply, user } }) => {
  try {
    const message = { "reply": reply, "user": user };
    const updatedOffer = await OfferModel.findOneAndUpdate(
      { "_id": _id },
      { $push: { "replies": message } },
      { new: true }
      );
    return updatedOffer;
  } catch (err) {
    console.log(err.message);
  };
};

export const createOffer = async args => {
  try {
    const { 
      parcel_id,
      name,
      price,
      image,
      owner,
      bidder,
      offer,
      message
    } = args.offer;

    const offerObj = new OfferModel({
      parcel_id,
      name,
      image,
      price,
      owner,
      bidder,
      offer,
      message
    });

    const newOffer = await offerObj.save();

    return newOffer;

  } catch (err) {
    console.log(err);
  }
};