import { buildSchema } from 'graphql';

export const allSchemas = buildSchema(`

type Parcel {
  _id: ID!
  user: String!
  parcel_id: String!
  metaverse: String!
  name: String!
  price: String!
  image: String!
  description: String!
  external_url: String!
  area: String!
  island: String!
  suburb: String!
}

input ParcelInput {
  user: String!
  metaverse: String!
  parcel_id: String!
  name: String!
  price: String!
  image: String!
  description: String!
  external_url: String!
  area: String!
  island: String!
  suburb: String!
}

type User {
  _id: ID!
  user: String!
  email: String!
  firstname: String
  lastname: String
  image: String
  description: String
}

input UserInput {
  user: String!
  email: String!
  firstname: String
  lastname: String
  image: String
  description: String
}

type OfferReplies {
  reply: String
  user: String
}

type Offer {
  _id: ID!
  parcel_id: String!
  name: String!
  price: String!
  image: String!
  owner: String!
  offer: String!
  bidder: String!
  message: String
  replies: [OfferReplies]
}

input updateOfferInput {
  parcel_id: String
  reply: String
  user: String
}

input createOfferInput {
  parcel_id: String!
  name: String!
  price: String!
  image: String!
  owner: String!
  bidder: String!
  offer: String!
  message: String
}

type Query {
  getParcels:[Parcel!]
  getParcelById(_id: ID!): Parcel
  getUserByUsername(user: String!): User
  getOffersByUsername(user: String!): [Offer]
  getOfferById(_id: ID!): Offer
}

type Mutation {
  createParcel(parcel:ParcelInput): Parcel
  createUser(user:UserInput): User
  createOffer(offer:createOfferInput): Offer
  updateOfferById(offer: updateOfferInput): Offer
}

schema {
  query: Query
  mutation: Mutation
}

`);
