import express, { response } from "express";
import { ApolloServer, gql } from 'apollo-server-express'

const app = express();

async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await server.start();

    server.applyMiddleware({
        app,
        cors: {
            origin: `http://${HOSTNAME}:3000`
        },
        bodyParserConfig: true,
    });
};

startServer();
app.listen(PORT, HOSTNAME, () => {
    console.log(`Server listening at ${HOSTNAME}:${PORT}`);
});

// const server = new ApolloServer({  //Recebe uma instância de configuração 
//   typeDefs: gql` 
//   type: Client {
//     id: ID!
//     name: String!
//   }
//   type Demand {
//     id: ID!
//     name: String!
//     client: Client!
//     deadline: String
//   }

//   type: Query {
//     demands: [Demand]! 
//   }
//   `,
//   resolvers: {
//     Query: {
//       demands: () => [],
//     },
//   },
// }); 

// server.applyMiddleware({
//   app,
//   cors:{
//     origin: 'http://localhost:3000',
//   }
// })

// // server.get('/status', (_, response) => { // o _ ignora o primeiro parâmetro.
// //   response.send({
// //     status:'Okay',
// //   });

// // });



// // server
// // .options('/authenticate', enableCors)
// // .post('/authenticate', enableCors, express.json(), (request, response)=> {
// //   console.log(
// //     'E-mail', request.body.email,
// //     'Senha', request.body.password,
// //   );
// //   response.send({
// //     Okay: true,
// //   });
// // })


// const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
// const HOSTNAME = process.env.HOSTNAME || `127.0.0.1`;

// server.listen( PORT, HOSTNAME, () => { //criando o IP do servidor local
//   console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`)
// });

