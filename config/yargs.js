const argv = require("yargs")
  .option("b", {
    alias: "base",
    describe: "Es la base de la tabla de multiplicar",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    describe: "Muestra la tabla en pantalla",
    type: "boolean",
    demandOption: false,
    default: false,
  })
  .option("h", {
    alias: "hasta",
    describe: "Hasta cual numero sera la tabla",
    type: "number",
    demandOption: false,
    default: 10,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
