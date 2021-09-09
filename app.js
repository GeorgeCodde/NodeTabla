const { crearArchivo } = require("./helpers/multiplicar");
const colors = require("colors");
const argv = require("./config/yargs");
console.clear();

console.log(argv);
//console.log(argv.base);
// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");

// const base = 117;
crearArchivo(argv.b, argv.l, argv.h)
  .then((msg) => console.log(`El archivo ${msg} fue creado`.rainbow))
  .catch((err) => console.log(err));
//console.log(salida);
