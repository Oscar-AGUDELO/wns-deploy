import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import mongoose from "mongoose";

import { WilderResolver } from "./resolvers/wilder.resolver";

if (!process.env.SERVER_PORT) {
  throw new Error("The env variable SERVER_PORT must be defined")
}

(async () => {
  await mongoose.connect("mongodb://mongodb:27017/wilders", {useUnifiedTopology: true, useNewUrlParser: true});
  const schema = await buildSchema({
    resolvers: [WilderResolver],
  });
  const server = new ApolloServer({ schema });

  server.listen({ port: process.env.SERVER_PORT! }).then(({ url }) => {
<<<<<<< HEAD
    console.log(`🚀  Server ready at ${url}`);
=======
    console.log(`🚀  Server sready at ${url}`);
>>>>>>> b5305af2006546236fe085625b97fae3ff47bac3
  });
})();
