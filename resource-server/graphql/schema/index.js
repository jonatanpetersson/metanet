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

type Query {
  getParcels:[Parcel!]
  getParcelById(_id: ID!): Parcel
  getUserByUsername(user: String!): User
}

type Mutation {
  createParcel(parcel:ParcelInput): Parcel
  createUser(user:UserInput): User
}

schema {
  query: Query
  mutation: Mutation
}

`)