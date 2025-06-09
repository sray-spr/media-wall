import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  enum AssetCategory {
    image
    video
    post
  }

  enum MediaExtension {
    jpg
    jpeg
    png
    mp3
    mp4
    pdf
    doc
  }

  type Asset {
    id: ID!
    title: String!
    previewUrl: String!
    mediaUrl: String!
    extension: MediaExtension!
    category: AssetCategory!
  }

  type Query {
    assets(keyword: String): [Asset!]!
  }
`;
