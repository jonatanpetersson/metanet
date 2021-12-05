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