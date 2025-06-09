import gql from "graphql-tag";

export const ASSET_QUERY = gql`
  query Query($keyword: String) {
    assets(keyword: $keyword) {
      category
      id
      extension
      mediaUrl
      previewUrl
      title
    }
  }
`;
