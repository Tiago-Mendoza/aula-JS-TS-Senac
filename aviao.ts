class aviao{
    cor:String;
    velocidade:number;
    cia:String;


    constructor(cor:String , cia:String){
        this.cor = cor;
        this.cia = cia;



    }

    //metodos do avião
    acelerar(velocidade?:number){
        if(velocidade === undefined ){
            this.velocidade += 50;
        }else{
            this.velocidade = velocidade;
        }
    }
}//fim da classe 

const aviao1 = new aviao("Branco","TAM");
