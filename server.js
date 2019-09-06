const express = require("express");
const express_graphql = require("express-graphql");
const {buildSchema} = require("graphql");

const app = express();

const schema = buildSchema(`
    type Query {
        message: String
    }
`);

const root = {
    message: () => 'Hello World!'
};

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Express GraphQL Server Now Running On localhost:8080/graphql'));