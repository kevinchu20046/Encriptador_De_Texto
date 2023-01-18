
const abecedario ={
    a: "ai2j",b:"fmb4",c:"b1cd",d:"ite8",e:"lc0n",f:"k3ip",g:"plo8",h:"kñb3",i:"by6v",j:"4rmj",k:"pbg9",l:"v5io",m:"xlp4",n:"7vte",ñ:"c2ml",o:"x0pu"
    ,p:"3zpt",q:"6bqa",r:"v4qx",s:"ñld2",t:"h7vq",u:"g4bd",v:"ñcw0",w:"q9pu",x:"c4xq",y:"s1ut",z:"zxu8"," ":"wa6y"

}



const abecedario_encriptado ={
    ai2j: "a",fmb4:"b",b1cd:"c",ite8:"d",lc0n:"e",k3ip:"f",plo8:"g",kñb3:"h",by6v:"i","4rmj":"j",pbg9:"k",v5io:"l",xlp4:"m","7vte":"n",c2ml:"ñ",x0pu:"o"
    ,"3zpt":"p","6bqa":"q",v4qx:"r",ñld2:"s",h7vq:"t",g4bd:"u",ñcw0:"v",q9pu:"w",c4xq:"x",s1ut:"y",zxu8:"z",wa6y:" "

}

const encriptado = [];



//buscar la letra del fragmento encriptada 
const BuscarLetra = function (comparador,variable){
    let letra_encriptada;
    if(comparador === variable){
        letra_encriptada = abecedario[variable];
        // console.log(letra_encriptada)
        return letra_encriptada;
    }
}

//validar si se encontro o no se encontro la letra
const ConfirmarDato = function(variable){
    if(variable != undefined){
        encriptado.push(variable);
        // console.log(encriptado);
    }
}

// validar si el texto tiene caracteres o no tiene caracteres 
const ValidarCaracteres = function (texto){
    let regexp =/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(regexp.test(texto)){
        // console.log("hay caracteres especiales")
        return true;
    }else{
        // console.log("no hay caracteres especiales")
        return false;
    }
}

//unir los fragmentos encriptados
const CadenaTexto = function (lista){
    let total = [];
    for(l in lista){
        let cadena_encriptada = lista[l];
        total = total + cadena_encriptada;
    }
    let area_de_texto = document.getElementById("mostrar_encriptado");
    area_de_texto.value = total; 
}


// funcion para encriptar los datos
const EncriptarDatos = function (){
    let texto = document.getElementById("area_texto").value.trim();
    texto = texto.toLowerCase();

    let result_caracteres = ValidarCaracteres(texto);

    if(result_caracteres === false){
        for(i in texto){
            let resultado = BuscarLetra(texto[i],"a")
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"b")
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"c")
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"d")
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"e")
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"f")
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"g");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"h");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"i");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"j");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"k");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"l");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"m");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"n");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"ñ");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"o");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"p");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"q");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"r");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"s");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"t");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"u");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"v");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"w");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"x");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"y");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i],"z");
            ConfirmarDato(resultado);
            resultado = BuscarLetra(texto[i]," ");
            ConfirmarDato(resultado);
        }
        CadenaTexto(encriptado);
    }else{
        swal ( "Ingrese el texto correctamente","Ingrese el texto sin caracteres especiales","error" )   ;
    }
}


// comienzo de las funciones de desencriptacion.

const desencriptada = [];

let letras_encriptadas = [];


const lista_desencriptada = [];

// funcion para buscar la letra que esta en el objeto "abecedario_encriptado"
const BuscarLetraEncriptada = function (comparador,variable){
    let letra_encriptada;
    if(comparador === variable){
        letra_encriptada = abecedario_encriptado[variable];
        return letra_encriptada;
    }
}

// funcion para sacar el string de la lista dondes  estan todas las letras desencriptadas
const CadenaTextoEncriptada = function (lista){
    let total = [];
    for(l in lista){
        let cadena_encriptada = lista[l];
        total = total + cadena_encriptada;
    }
    let area_de_texto = document.getElementById("area_texto_desencriptado");
    area_de_texto.value = total; 
}

// Funcion para saber si el datos es un string o es undefined , si el caso es undefined no se agrega ala lista
const ConfirmarDatoEncriptada = function(variable){
    if(variable != undefined){
        lista_desencriptada.push(variable);
        console.log(lista_desencriptada)
    }
}


// funcion para concatenar las lista los items de la lista para la desencriptacion del texto
const ConcatenacionLista = function(lista){
    let total = [];
    for(l in lista){
        let cadena_encriptada = lista[l];
        total = total + cadena_encriptada;
    }
    return total;
}



// Funcion para desencriptar los datos.
const DesencriptarDatos = function (){
    let contador = 0;
    let texto= document.getElementById("area_texto_encriptado").value.trim();
    for(i in texto){
        contador = contador + 1
        letras_encriptadas.push(texto[i]);
        if(contador === 4 ){
            contador = 0;
            let caracteres = ConcatenacionLista(letras_encriptadas);
            desencriptada.push(caracteres);
            letras_encriptadas = [];
        }
    }

    for(l in desencriptada){
        let resultado = BuscarLetraEncriptada(desencriptada[l],"ai2j")
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"fmb4")
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"b1cd")
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"ite8")
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"lc0n")
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"k3ip")
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"plo8");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"kñb3");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"by6v");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"4rmj");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"pbg9");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"v5io");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"xlp4");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"7vte");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"c2ml");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"x0pu");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"3zpt");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"6bqa");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"v4qx");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"ñld2");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"h7vq");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"g4bd");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"ñcw0");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"q9pu");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"c4xq");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"s1ut");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"zxu8");
        ConfirmarDatoEncriptada(resultado);
        resultado = BuscarLetraEncriptada(desencriptada[l],"wa6y");
        ConfirmarDatoEncriptada(resultado);
    }
    CadenaTextoEncriptada(lista_desencriptada);
}



