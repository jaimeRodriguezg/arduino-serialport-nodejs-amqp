const SerialPort = require('serialport');
const ReadLine = SerialPort.parsers.Readline;



//llamamos el yargs para obtener el puerto del arduino
const argv = require('.././config/config').argv;
console.log("========= PUERTO ARDUINO =========");
console.log(`${argv.puerto}`);
console.log("==================================");


//hacemos la conexion, indicando el puerto y el baudRate, lo guardamos en una constante
//para tener un objeto
const mySerial = new SerialPort(argv.puerto, {
    baudRate: 9600
});

//cuando se conecte
mySerial.on('open', () => {
    console.log('========= Puerto arduino abierto =========');
});


//imprimimos la data que viene
mySerial.on('data', function(data) {
    console.log(data);
});