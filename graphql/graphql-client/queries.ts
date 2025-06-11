import gql from "graphql-tag";

export const ASSET_QUERY = gql`
  query AssetQuery($keyword: String) {
    assets(keyword: $keyword) {
      ... on PhotoAsset {
        id
        title
        type
        createdTime
        previewUrl
        mediaUrl
        extension
      }
      ... on VideoAsset {
        id
        title
        type
        createdTime
        previewUrl
        mediaUrl
        extension
      }
      ... on PostAsset {
        id
        title
        type
        createdTime
        postAssetChannel
        postAssetContent {
          ... on PhotoAsset {
            id
            title
            type
            createdTime
            previewUrl
            mediaUrl
            extension
          }
          ... on VideoAsset {
            id
            title
            type
            createdTime
            previewUrl
            mediaUrl
            extension
          }
        }
      }
    }
  }
`;
