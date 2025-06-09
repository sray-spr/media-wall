import { ApolloServer } from "@apollo/server";
import { typeDefs } from "@/graphql/schema";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { AssetArray } from "@/types";

const resolvers = {
  Query: {
    assets: async (_: any, args: { keyword?: string }) => {
      const mockAssets: AssetArray = require("../../public/assets/MOCK_DATA.json");

      const keyword = args.keyword?.toLowerCase() || "";
      const filteredAssets = mockAssets.filter((asset) =>
        asset.title.toLowerCase().includes(keyword)
      );

      await new Promise((resolve) => setTimeout(resolve, 1000));

      return filteredAssets;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export default handler;
