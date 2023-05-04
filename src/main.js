
const { Pokemon, Trainer, Badge } = require("./models");

async function main() {
  const trainers = await Trainer.findAll();
  const pokemon = await Pokemon.findAll();
  const badges = await Badge.findAll();

  await trainers[0].addPokemon(pokemon[0]);
  await trainers[0].addPokemon([pokemon[1], pokemon[2]]);

  // console.log(trainers[0].__proto__);     // dunder proto useful for finding containing methods/functions

  const trainer = await Trainer.findOne({ where: { name: "Red" } });
  // console.log(JSON.stringify(trainer, null, 2));

  const trainerWithPokemon = await Trainer.findOne({ where: { name: "Red" }, include: Pokemon });
  // console.log(trainerWithPokemon);
  // console.log(JSON.stringify(trainerWithPokemon, null, 2));

  await trainers[0].addBadge(badges[0]);
  await trainers[0].addBadge(badges[0]);

  const trainersWitBadges = await Trainer.findAll({ include: Badge });
  console.log(JSON.stringify(trainersWitBadges, null, 2));
}

main()

// const { db } = require("../db/connection.js");
// async function main() {
//   await db.sync({ force: true });

//   const Pikachu = await Pokemon.create({
//     name: "Pikachu",
//     type: "Electric",
//     weight: 6,
//   });
//   console.log(JSON.stringify(Pikachu, null, 2));
//   await Pokemon.bulkCreate([
//     {
//       name: "Bulbasaur",
//       type: "Grass/Poison",
//       weight: 6.9,
//     },
//     {
//       name: "Charmander",
//       type: "Fire",
//       weight: 8.5,
//     },
//     {
//       name: "Squirtle",
//       type: "Water",
//       weight: 9,
//     },
//   ]);

//   const currentPokemon = await Pokemon.findOne({ where: { name: "Pikachu" } });
//   console.log(JSON.stringify(currentPokemon, null, 2));
//   const allPokemon = await Pokemon.findAll();
//   console.log(JSON.stringify(allPokemon, null, 2));

//   const updateResult = await Pokemon.update(
//     { name: "Ivysaur", weight: 13 },
//     { where: { name: "Bulbasaur" } }
//   );
//   console.log(updateResult);

//   const deleteResult = await Pokemon.destroy({ where: { name: "Squirtle" } });
//   console.log(deleteResult);
// }

// main();
