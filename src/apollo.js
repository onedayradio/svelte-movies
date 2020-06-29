import 'isomorphic-fetch'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({ uri: 'http://localhost:3001/local/graphql' })

export default client
