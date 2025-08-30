var aviao = /** @class */ (function () {
    function aviao(cor, cia) {
        this.cor = cor;
        this.cia = cia;
    }
    //metodos do avião
    aviao.prototype.acelerar = function (velocidade) {
        if (velocidade === undefined) {
            this.velocidade += 50;
        }
        else {
            this.velocidade = velocidade;
        }
    };
    return aviao;
}()); //fim da classe 
var aviao1 = new aviao("Branco", "TAM");
