import { ApolloServer } from "@apollo/server";
import { typeDefs } from "@/graphql/graphql-server/schema";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { Asset, AssetArray, PhotoAsset, VideoAsset } from "@/types";
const resolvers = {
  Query: {
    assets: async (parent: any, args: { keyword?: string }) => {
      const mockAssets: AssetArray = require("../../public/assets/MOCK_DATA.json");

      const keyword = args.keyword?.toLowerCase() || "";
      const filteredAssets = mockAssets.filter((asset) =>
        asset.title.toLowerCase().includes(keyword)
      );

      return filteredAssets;
    },
  },

  AssetUnion: {
    __resolveType(obj: Asset) {
      if (obj.type === "POST") return "PostAsset";
      if (obj.type === "PHOTO") return "PhotoAsset";
      if (obj.type === "VIDEO") return "VideoAsset";
      return null;
    },
  },
  PostAssetContent: {
    __resolveType(obj: PhotoAsset | VideoAsset) {
      if (obj.type === "PHOTO") return "PhotoAsset";
      if (obj.type === "VIDEO") return "VideoAsset";
      return null;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export default handler;
