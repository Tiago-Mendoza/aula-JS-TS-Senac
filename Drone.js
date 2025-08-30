class Drone{

    marca;
    modelo;
    cor;
    helices;
    altitude = 0;
    velocidade = 0;

    constructor(pModelo){
        this.modelo = pModelo;
        this.cor = "rosa";
        this.marca="senac";
        this.helice = 4;
    }


    decolar(){
        this.altitude = 10;
        console.log(`${this.modelo} decolou ! - altitude: ${this.altitude}`)

    }

    subir(){
        this.altitude += 5;
    }

    descer(){
        this.descer -= 5;
        
    }


    pousar(){
        this.altitude = 0;
        console.log(`${this.modelo} pousou ! - altitude: ${this.altitude}`)

    }

    acelerar(...args){

        if(args.length === 0){
            this.velocidade +=10;
            console.log(`velociade ${this.velocidade}`);
        }else if(args.length === 1){
            this.velocidade += args [0];
            console.log(`velocidade: ${this.velocidade}`)
        }else{
            console.log("Parâmetros inválidos!");
        }



        this.velocidade += 10;
        console.log(`Velocidade : ${this.velocidade} km/h`);

    }

}/// fim classe 

const meuDrone = new Drone("a106");
meuDrone.cor = "Laranja";
meuDrone.acelerar();
meuDrone.acelerar(15);
meuDrone.decolar();
meuDrone.pousar();


console.log(meuDrone.marca);
console.log(meuDrone.cor);
console.log(meuDrone.helice);


const meuDroneRodizio = new Drone("a105");

meuDroneRodizio.decolar();
meuDroneRodizio.acelerar();
meuDroneRodizio.pousar();
meuDroneRodizio.cor = "amarelo";
console.log(`drone do rodizio - ${meuDroneRodizio.cor}`);