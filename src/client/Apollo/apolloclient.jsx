import React, { Component, Fragment } from 'react'
import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import HttpLink from 'apollo-link-http';

//APOLLO CLIENT SETUP
const client  = new ApolloClient({
        link,
        cache
});
const cache = new InMemoryCache();

const link = new HttpLink({
        uri: "http://localhost:9000/graphql"
});

class apolloclient extends Component {

    render() {
        return (
            <Fragment>
            <ApolloProvider client={client}>
                <div>
                    
                </div>
            </ApolloProvider>
            </Fragment>
        )
    }
}

module.exports = apolloclient;