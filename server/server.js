const express = require('express');
// const path = require('path');
const { ApolloServer, gql } = require('apollo-server');

const app = express();

const SERVER_PORT = process.env.SERVER_PORT;

app.get('/', ( req, res ) => {
    return res.send('Got 🌱!');
});

app.get('/api/getList', ( req, res ) => {
    let list = ['l1', 'l2', 'l3'];

    res.json(list);
    console.log('Sent list: ', list);
});

app.listen(SERVER_PORT, () => console.log(`☄️☄️☄️- Express Server is listening on port ${ SERVER_PORT } -☄️☄️☄️`));

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  },
  type User {
    id: String,
    firstName: String,
    lastName: String,
    handle: String,
    numberReviews: Number,
    averageRating: Number
  },
  type Review {
    rating: Number,
    userId: User.userId,
    notes: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world'
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
    console.log(`⚡️⚡️⚡️- Apollo Server listening at ${url} -⚡️⚡️⚡️`)
  });