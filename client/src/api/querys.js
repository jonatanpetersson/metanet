export const getParcelsQuery = () => `
query {
  getParcels {
    _id,
    image,
    metaverse,
    user,
    price
  }
}
`;

export const getParcelByIdQuery = id => `
query {
  getParcelById(_id: "${id}") {
    _id,
    name,
    metaverse,
    image,
    user,
    price,
    external_url,
    description,
    area,
    island,
    suburb
  }
}
`;

export const getUserByUsername = username => `
query {
  getUserByUsername(user: "${username}") {
    user,
    email,
    firstname,
    lastname,
    image,
    description
  }
}
`;

export const getOffersByUsername = username => `
query {
  getOffersByUsername(user: "${username}") {
    _id
    parcel_id
    name
    price
    image
    owner
    offer
    bidder
    offer
    message
    replies {
      user
      reply
    }
  }
}
`;