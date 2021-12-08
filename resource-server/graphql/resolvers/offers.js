import { OfferModel } from "../../models/offer.js";

export const getOffersByUsername = async (args) => {
  try {
    const fetchedOffers = await OfferModel.find(args);
    return fetchedOffers;
  } catch (err) {
    console.log(err.message);
  };
};

export const updateOfferById = async ({ offer: { parcel_id, reply, user } }) => {
  try {
    const message = { "reply": reply, "user": user };
    const updatedOffer = await OfferModel.findOneAndUpdate(
      { "parcel_id": parcel_id },
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