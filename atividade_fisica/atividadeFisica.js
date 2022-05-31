
// CALCULA A QUANTIDADE DE PONTOS FEITOS POR MES COM BASE NAS HORAS DE ATIVIDAE FISICA

function horas () {
   
   var horasAti = parseFloat("");

   horasAti = document.getElementById('horas').value;

   if (horasAti < 10) {

        var pontos = horasAti*2;

        document.getElementById('resultado').innerHTML = ("pontos: " + pontos);

        pontos*=0.05;

        document.getElementById('resultado').innerHTML = pontos;
   }

   else if (horasAti >= 10 && horasAti <= 20) { 
        var pontos = horasAti*5;
            
        document.getElementById('resultado1').innerHTML = ("pontos: " + pontos) 
         
        pontos*=0.05;

        document.getElementById('resultado').innerHTML = pontos;
   }

   else if (horasAti > 20) {

        var pontos = horasAti*10;

        document.getElementById('resultado1').innerHTML = ("pontos: "+ pontos);

        pontos*=0.05;

        document.getElementById('resultado').innerHTML = ("R$ "+pontos);
   }



}