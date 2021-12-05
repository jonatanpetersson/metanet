import { ParcelModel } from "../../models/parcel.js";

export const getParcels = async () => {
    try {
        const fetchedParcels = await ParcelModel.find();
        console.log('Fetched all parcels');
        return fetchedParcels;
    } catch (err) {
        console.log(err.message);
    };
};

export const getParcelById = async (args) => {
  try {
      const fetchedParcel = await ParcelModel.findOne(args);
      console.log('Fetched parcel by id');
      return fetchedParcel;
  } catch (err) {
      console.log(err.message);
  };
};

export const createParcel = async args => {
  try {
    const { 
      user,
      parcel_id,
      metaverse,
      name,
      price,
      image,
      description,
      external_url,
      area,
      island,
      suburb
    } = args.parcel;

    const parcel = new ParcelModel({
      user,
      parcel_id,
      metaverse,
      name,
      price,
      image,
      description,
      external_url,
      area,
      island,
      suburb
    });

    const newParcel = await parcel.save();

    console.log('new Parcel created');
    return newParcel;

  } catch (err) {
    console.log(err);
  }
};