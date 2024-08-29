import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import {entries} from './_db.js'
import { createRequire } from 'module';

const typeDefs = `#graphql
    type Entry{
        route: String!
        year: String!
        day: String!
        calendarDate: String!
        destination: String!
        latitude: Float!
        longitude: Float!
    }

    type Query{
        entries(routes: [String], years: [String], days: [String], calendarDates: [String]): [Entry]
    }
`

const resolvers = {
    Query:{
        entries(_, args){
            //Args will consist of a list of routes, a list of days, a list of calendar dates, and a list of years
            let routeSet = (Object.hasOwn(args, 'routes') && args.routes instanceof Array) ? new Set(args.routes) : new Set();
            let daySet = (Object.hasOwn(args, 'days') && args.days instanceof Array) ? new Set(args.days) : new Set();
            let calendarDateSet = (Object.hasOwn(args, 'calendarDates') && args.calendarDates instanceof Array) ? new Set(args.calendarDates) : new Set();
            let yearSet = (Object.hasOwn(args, 'years') && args.years instanceof Array) ? new Set(args.years) : new Set();

            const matchesEntry = (entry)=>{
                if(routeSet.size != 0 && !routeSet.has(entry.route)) return false;
                if(daySet.size != 0 && !daySet.has(entry.day)) return false;
                if(calendarDateSet.size != 0 && !calendarDateSet.has(entry.calendarDate)) return false;
                if(yearSet.size != 0 && !yearSet.has(entry.year)) return false;
                return true;
            }

            return entries.filter((entry) => matchesEntry(entry));
        }
    }
}

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer }), ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });
  await server.start();
  const require = createRequire(import.meta.url);
  const cors = require('cors')
  let options = {maxAge: '1d'}

  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https' && req.method === 'GET')
      res.redirect(`https://${req.header('host')}${req.url}`)
    else
      next()
  })
  app.use(express.static('dist', options))
  app.use(cors())
  server.applyMiddleware({ app });
  await new Promise((resolve) => httpServer.listen(process.env.PORT, resolve));
}

startApolloServer(typeDefs, resolvers);