import mongoose from "mongoose";

const Schema = mongoose.Schema;

const offerSchema = new Schema(
  { 
    parcel_id: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    offer: { type: String, required: true },
    owner: { type: String, required: true },
    bidder: { type: String, required: true },
    message: { type: String, required: false },
    replies: [
      {
        user: { type: String, required: false },
        reply: { type: String, required: false },
      }
    ]
  }
)

export const OfferModel = mongoose.model('Offer', offerSchema);