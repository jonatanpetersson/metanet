import { getParcels, getParcelById, createParcel } from './parcels.js';
import { createUser, getUserByUsername } from './users.js';
import { getOffersByUsername, updateOfferById, createOffer } from './offers.js'

export default { 
  getParcels,
  getParcelById,
  createParcel,
  createUser,
  getUserByUsername,
  getOffersByUsername,
  updateOfferById,
  createOffer
};