import { buildSchema } from 'graphql';

export const parcelSchema = buildSchema(`

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

type Query {
  getParcels:[Parcel!]
  getParcelById(_id: ID!): Parcel
}

type Mutation {
  createParcel(parcel:ParcelInput): Parcel
}

schema {
  query: Query
  mutation: Mutation
}

`)