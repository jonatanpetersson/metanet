import mongoose from "mongoose";

const Schema = mongoose.Schema;

const parcelSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    parcel_id: {
      type: String,
      required: true,
    },
    metaverse: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    external_url: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    island: {
      type: String,
      required: true,
    },
    suburb: {
      type: String,
      required: true,
    },
  }
)

export const ParcelModel = mongoose.model('Parcel', parcelSchema);