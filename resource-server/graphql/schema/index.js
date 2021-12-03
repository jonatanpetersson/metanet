import { buildSchema } from 'graphql';

export const parcelSchema = buildSchema(`

type Parcel {
  _id: ID!
  user: String!
  parcelId: String!
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
  parcelId: String!
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
}

type Mutation {
  createParcel(parcel:ParcelInput): Parcel
}

schema {
  query: Query
  mutation: Mutation
}

`)