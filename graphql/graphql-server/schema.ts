import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type PhotoAsset {
    id: ID!
    title: String!
    type: String!
    createdTime: Float!
    previewUrl: String!
    mediaUrl: String!
    extension: String!
  }

  type VideoAsset {
    id: ID!
    title: String!
    type: String!
    createdTime: Float!
    previewUrl: String!
    mediaUrl: String!
    extension: String!
  }

  union PostAssetContent = PhotoAsset | VideoAsset

  type PostAsset {
    id: ID!
    title: String!
    type: String!
    createdTime: Float!
    postAssetChannel: String!
    postAssetContent: PostAssetContent!
  }
  union AssetUnion = PhotoAsset | VideoAsset | PostAsset
  type Query {
    assets(keyword: String): [AssetUnion!]!
  }
`;
