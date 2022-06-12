const {project, clients} = require('../sampleData.js')

const {GraphQLObjectType, GraphQLID, GraphQLString} = require('graphql');

//clientType
const clientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString},
    })
})
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        client: {
            type: clientType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
            return clients.find(client => client.id === args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})