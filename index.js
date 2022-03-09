class Retangulo {
  constructor(altura,largura){
    this.altura = altura;
    this.largura = largura;
  }

  calcularArea(){
     return this.largura * this.altura  
  }
  area(){
    return this.calcularArea(); 
  }
}

let quadrado = new Retangulo("10","10");
console.log(quadrado.area());

let retangulo = new Retangulo("30","60")
console.log(retangulo.area());




 
 
