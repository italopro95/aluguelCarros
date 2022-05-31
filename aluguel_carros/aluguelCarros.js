
var num = parseInt(2);
 
console.log(num + "");

function alugar () {
    
    var cPopular;
    var cLuxo;
    var op = parseInt("");
    var di = parseInt("");
    var km = parseFloat("");

    op = document.getElementById('opcao').value;
    di = document.getElementById('dias').value;
    km = document.getElementById('km').value;

    if (op == 1) {
        cPopular = di*90;

        if (km <= 100) {
           cPopular+= (0.20*km);
        }

        else if (km > 100) {
           cPopular+= (0.10*km);
        }

        document.getElementById('valor').innerHTML = ("R$ "+cPopular);
    }

    else if (op == 2) {
        cLuxo = di* 150;

        if (km <= 200) {
           cLuxo+= (0.30*km);
        }

        else if (km > 200) {
            cLuxo+= (0.25*km);
        }

        document.getElementById('valor').innerHTML = cLuxo;
      
    }

    else {
        document.getElementById('valor').innerHTML = "erro";
    }

}