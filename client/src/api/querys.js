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
