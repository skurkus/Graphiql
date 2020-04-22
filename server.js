/**
 *  Copyright (c) Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */

const express = require('express');
const graphqlHTTP = require('express-graphql');
const url = require('url');

const schema = require('./schema');

const app = express();
app.use(express.static(__dirname));
app.use('/api/graphql', graphqlHTTP(() => ({ schema })));

const args = process.argv.slice(2);
const graphiQLUrl = (args[0] !== undefined) ? args[0] : "";
if (graphiQLUrl === "")
{
    console.error('Please set the url on which the Web GraphiQL need to be hosted!');
    process.exit(1);
}
const graphiQLPort = url.parse(graphiQLUrl, true).port;
if (graphiQLPort === null)
{
    console.error('Please set the port on which the Web GraphiQL need to be hosted!');
    process.exit(1);
}
const graphQLUrl = (args[1] !== undefined) ? args[1] : "";
if (graphQLUrl === "")
{
    console.error('Please set the url of the Web GraphQL endpoint!');
    process.exit(1);
}

app.get('/graphQLUrl', function(req, res) {
    res.json({ 'graphQLUrl': graphQLUrl });
});

app.listen(graphiQLPort, () => console.log('Web GraphiQL hosted on ' + graphiQLUrl));
