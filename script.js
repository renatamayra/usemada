function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-mada-light.png")
    img.setAttribute("alt", "Foto Use Mada")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-mada.png")
    img.setAttribute("alt", "Foto Use Mada")
  }

  /*  if(html.classList.contains('light')) {
//    html.classList.remove('light')
//  } else {
//    html.classList.add('light')
//  }

/* document é a representação do documento em formato de objeto java script; eu acesso meu html através do documentElement
if: se a condição é verdadeira, entra no código */



 
}