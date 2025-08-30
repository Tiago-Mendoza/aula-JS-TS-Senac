class carro{

    cor;
    modelo;
    marca;

    constructor(cor, modelo, marca){

        this.modelo = modelo;
        this.cor = cor;
        this.marca = marca;
    }

    exibirInfo(){
        console.log(`Modelo: ${this.modelo} cor:${this.cor}`);
    }

}

const modeloCarro = new carro("Vermelho", "320i", "BMW");
console.log("modelo Carro 1")
modeloCarro.exibirInfo();



//console.log(modeloCarro.cor);
//console.log(modeloCarro.modelo);
//console.log(modeloCarro.marca);


const modeloCarro2 = new carro("Azul", "x1", "BMW")
console.log("modelo Carro 2")
modeloCarro2.exibirInfo();

//console.log(modeloCarro2.cor)
//console.log(modeloCarro2.modelo)
//console.log(modeloCarro2.marca)
