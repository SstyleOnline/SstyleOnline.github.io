let activador=0;
let ancho;

function colores(modelo,color) {

    document.getElementById(modelo).src="img/Zapatillas/Zapatillas "+modelo+"/"+color+".jpeg";
}

function emergente(zapatilla) {


    if(parseInt(ancho)<400){
        console.log("chiquito");
        document.getElementById("z"+zapatilla).style.scale="1.2";
        document.getElementById("z"+zapatilla).style.maxHeight="70%";
        
    }
    else{
        console.log("grande");
        document.getElementById("z"+zapatilla).style.scale="1.7";
        document.getElementById("z"+zapatilla).style.maxHeight="50%";
    }


    document.getElementById("f"+zapatilla).style.background="rgba(233, 233, 233, 0.816)";
    document.getElementById("f"+zapatilla).style.width="100%";
    document.getElementById("f"+zapatilla).style.height="100%";
    document.getElementById("f"+zapatilla).style.position="fixed";
    document.getElementById("f"+zapatilla).style.top="40px";
    document.getElementById("f"+zapatilla).style.left="0px";
    document.getElementById("f"+zapatilla).style.zIndex="500";
    document.getElementById("f"+zapatilla).style.display="flex";
    document.getElementById("f"+zapatilla).style.justifyContent="center";
    document.getElementById("f"+zapatilla).style.alignItems="center";


    document.getElementById("z"+zapatilla).style.background="white";
    document.getElementById("z"+zapatilla).style.position="fixed";
    document.getElementById("z"+zapatilla).style.zIndex="700";
    document.getElementById("z"+zapatilla).style.transition="1s";

    document.getElementById("talle"+zapatilla).style.display="block";
    document.getElementById("talle"+zapatilla).style.margin="10px";
    document.getElementById("m"+zapatilla).style.fontSize="10px";
    document.getElementById("p"+zapatilla).style.fontSize="10px";
    document.getElementById("c"+zapatilla).style.fontSize="10px";
    document.getElementById("c"+zapatilla).style.margin="0px 5px 5px 5px";
    document.getElementById("d"+zapatilla).style.background="rgba(199, 199, 199, 0.171)";
    document.getElementById("x"+zapatilla).style.display="block";


}


function emergente_salir(zapatilla) {


    document.getElementById("f"+zapatilla).style.background="rgba(233, 233, 233, 0)";
    document.getElementById("f"+zapatilla).style.width="none";
    document.getElementById("f"+zapatilla).style.height="100%";
    document.getElementById("f"+zapatilla).style.position="static";
    document.getElementById("f"+zapatilla).style.top="0px";
    document.getElementById("f"+zapatilla).style.left="0px";
    document.getElementById("f"+zapatilla).style.zIndex="0";
    document.getElementById("f"+zapatilla).style.display="flex";
    document.getElementById("f"+zapatilla).style.justifyContent="none";
    document.getElementById("f"+zapatilla).style.alignItems="none";

    
    document.getElementById("z"+zapatilla).style.background="white";
    document.getElementById("z"+zapatilla).style.scale="1";
    document.getElementById("z"+zapatilla).style.position="static";
    document.getElementById("z"+zapatilla).style.zIndex="0";
    document.getElementById("z"+zapatilla).style.transition="1s";
    document.getElementById("z"+zapatilla).style.maxHeight="none";

    
    document.getElementById("talle"+zapatilla).style.display="none";
    document.getElementById("m"+zapatilla).style.fontSize="1.17rem";
    document.getElementById("p"+zapatilla).style.fontSize="1rem";
    document.getElementById("c"+zapatilla).style.fontSize="1.7rem";
    document.getElementById("c"+zapatilla).style.margin="20px 20px 10px 20px";
    document.getElementById("d"+zapatilla).style.background="white";
    document.getElementById("x"+zapatilla).style.display="none";

    
}


function saberalto() {
    ancho=document.documentElement.clientWidth;
    console.log(ancho);
}



function selec(){

    let todo=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41];
    let zapas=[1,8,9,10,11,12,13,14,15,16,17,18,19,20,28,29,30,31,32,33,34,37,38,39,40];
    let botines=[3,4,41];
    let crocs=[36];
    let borcegos=[2,5,21,22,24];
    let sandalias=[23,25,26,27,35];
    let pantuflas=[6,7];

    let ver=document.getElementById("productos_selector").value;



    switch (ver) {
        case "Todos":
            for(let i=0; i<41; i++){
                document.getElementById("f"+todo[i]).style.display="flex";
            }
        break;

        case "Zapatillas":
            for(let i=0; i<41; i++){
                document.getElementById("f"+todo[i]).style.display="none";
            }
            for(let i=0; i<25; i++){
                document.getElementById("f"+zapas[i]).style.display="block";
            }
        break;

        case "botines":
            for(let i=0; i<41; i++){
                document.getElementById("f"+todo[i]).style.display="none";
            }
            for(let i=0; i<3; i++){
                document.getElementById("f"+botines[i]).style.display="block";
            }
        break;

        case "Crocs":
            for(let i=0; i<41; i++){
                document.getElementById("f"+todo[i]).style.display="none";
            }
            for(let i=0; i<1; i++){
                document.getElementById("f"+crocs[i]).style.display="block";
            }
        break;

        case "Borcegos":
            for(let i=0; i<41; i++){
                document.getElementById("f"+todo[i]).style.display="none";
            }
            for(let i=0; i<5; i++){
                document.getElementById("f"+borcegos[i]).style.display="block";
            }
        break;

        case "Sandalias":
            for(let i=0; i<41; i++){
                document.getElementById("f"+todo[i]).style.display="none";
            }
            for(let i=0; i<5; i++){
                document.getElementById("f"+sandalias[i]).style.display="block";
            }
        break;

        case "Pantuflas":
            for(let i=0; i<41; i++){
                document.getElementById("f"+todo[i]).style.display="none";
            }
            for(let i=0; i<2; i++){
                document.getElementById("f"+pantuflas[i]).style.display="block";
            }
        break;

    }









    

}





function desactivar_menu() { 
    document.getElementById("menu").checked=false;
}

