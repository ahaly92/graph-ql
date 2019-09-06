# Messing Around With GraphQL

# server.js
  - a quick hello world example
  
# server2.js 
  - a slightly more complex example with courses

## Architecture and Notes
 - Query 
   - read-only operation made against a GraphQL server
 - Mutation
   - read-write operation made against a GraphQL server
 - Resolver
   - provides a mapping between a portion of a GraphQL operation and actual backend code responsible for handling it (similar to a controller in a RESTful MVC backend)
 - Schema
   - defines what queries and mutations can be performed against a GraphQL server, what each query or mutation takes as input, and what each query or mutation returns as output
 - Type
   - defines the shape of output / response data that can be returned
 - Input
   - is like a Type, but defines the shape of input data that is sent to a GraphQL server
 - Scalar
   - is a primitive Type, such as a String, Int, Boolean, Float, etc
