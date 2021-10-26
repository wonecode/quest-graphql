import express from "express";
import {graphqlHTTP} from "express-graphql";
import { buildSchema } from "graphql";

const app = express();

const schema = buildSchema(`
type Query {
  message: String
}
`);

const root = {
  message: () => "Hello world!"
}

app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue: root,
  gtaphiql: true
}));

app.listen(4000, () => console.log("Express GraphQL Server Now Running On localhost:4000/graphql"))