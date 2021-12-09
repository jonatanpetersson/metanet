export const createParcelMutation = inputData => `
mutation {
  createParcel(parcel: {
    user: "${inputData.user}",
    metaverse: "${inputData.metaverse}",
    parcel_id: "${inputData.parcel_id}",
    name: "${inputData.name}",
    price: "${inputData.price}",
    image: "${inputData.image}",
    description: "${inputData.description}",
    external_url: "${inputData.external_url}",
    area: "${inputData.area}",
    island: "${inputData.island}",
    suburb: "${inputData.suburb}"
  }) {
    parcel_id,
    name,
    user
  }
}`

export const createOfferMutation = (inputData) => `

mutation {
  createOffer(offer: {
    parcel_id: "${inputData._id}",
    name: "${inputData.name}",
    price: "${inputData.price}",
    image: "${inputData.image}",
    owner: "${inputData.user}",
    bidder: "${inputData.bidder}",
    offer: "${inputData.offer}",
    message: "${inputData.message}",
  }) {
    name
  }
}
`;

export const updateOfferMutation = (inputData) => `

mutation {
  updateOfferById(offer: {
    _id: "${inputData._id}",
    reply: "${inputData.reply}",
    user: "${inputData.user}"
  }) {
    _id
    replies {
      reply
      user
    }
  }
}

`