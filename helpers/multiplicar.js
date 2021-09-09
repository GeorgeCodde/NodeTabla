const fs = require("fs");
const crearArchivo = async (base = 5, listar, hasta) => {
  try {
    let salida = "";
    for (let index = 1; index <= hasta; index++) {
      salida = salida + `${base} ${"X"}  ${index} ${"="} ${base * index}\n`;
    }
    if (listar) {
      console.log("======================".green);
      console.log("Es la table del =".yellow.underline, base);
      console.log("======================".green);
      console.log(salida.italic);
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
