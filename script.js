const textArea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensaje")


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"

}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

        }
        
    }
    document.querySelector(".copiar").style.display = "show";
    document.querySelector(".copiar").style.display = "inherit";
    document.querySelector(".mensaje-uno").style.display = "none"
    document.querySelector(".mensaje-dos").style.display =  "none"
    return stringEncriptada
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function desencriptar(strinDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    strinDesencriptada = strinDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (strinDesencriptada.includes(matrizCodigo[i][1])) {
            strinDesencriptada = strinDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])

        }
        
    }
    return strinDesencriptada
}

function copiarTexto(){
    let texto = document.querySelector(".mensaje")
    texto.select();
    document.execCommand('cut')
}

