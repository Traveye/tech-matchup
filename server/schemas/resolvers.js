// const { AuthenticationError } = require('apollo-server-express');
// const { signToken } = require('../utils/auth');

const { Matchup, Tech} = require('../models');

const resolver = {
   Query: {
      getAllMatchups: async () => {
         return Matchup.find()

      },
      getAllTech: async () => {
         return Tech.find()

      },
      getMatchup: async (parent, { matchupId }) => {
         return Matchup.findOne({ _id: matchupId})
      }

   },
   Mutation: {
      createMatchup: async (parent, { body }) => {
         const matchup = await Matchup.create(body);
         return matchup;
      },
      createVote: async (parent, {id,techNum}) => {
         const vote = await Matchup.findOneAndUpdate(
            { _id: req.body.id },
            { $inc: { [`tech${req.body.techNum}_votes`]: 1 } },
            { new: true }
          );
         return vote;
      }

   }
}

module.exports = resolvers;