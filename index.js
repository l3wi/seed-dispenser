const seed = require("./seeds.json")
const cors = require("micro-cors")()

var counter = 0

module.exports = cors(async (res, req) => {
  console.log("Seed no: ", counter)
  return seed[counter++]
})
