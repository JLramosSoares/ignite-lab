import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4pvgozg2fn701xs0z5k8k2h/master',
    cache: new InMemoryCache()
})