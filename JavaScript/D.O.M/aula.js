//DOCUMENT OBJECT MODEL
//O DOM html é um padrão de como acessar e modificar os elementos HTML de uma página.


//BROWSER OBJECT MODEL
//Tudo o que está dentro do objeto window.


// ========================================================
//Métodos 

//Adicionar e deletar

//Cria um novo elemento HTML
//document.createElement(element)

//Remove um elemento
//documento.removeChild(element)

//Adiciona um elemento
//documento.appendChild(element)

//Substitui um elemento
//document.replaceChild(new, old)
// ========================================================

// ========================================================
//Classes

//Element.classList


// <div id="meu-elemto" class="classe">
// resto do codigo aqui
// </div> 

// const meuElemento = document.getElementById("meu-elemento")

// meuElemento.classList.add("novo-estilo");
// Adiciona a classe "meu estilo"

// meuElemento.classList.remove("classe");
// Remove a classe "classe"

// meuElemento.classList.toggle("dark-mode");
// Adiciona a classe "dark-mode" caso ele não faça parte da lista e remove ela caso faça.


//CSS
//Acessando diretamente o CSS de um elemento
// document.getElementsByTagName("p").style.color = "blue";
// ========================================================

//Tipos

//Evento do mouse
//mouseover, mouseout

//Evento de clique
//click, dbclick

//Eventos de atualização
// Change, load


//Acionando eventos

//Event listener
//Diretamente no Javascrript, cria um evento que vai ser acionado no momento em que o usuário realizar determianda ação.

// const botao = document.getElementById("meubotao");
// botao.addEventListener("click", outrafuncao);


//Atributo HTML
//Especifica a função a ser chamada diretamente no elemento HTML.
/*
 <html>
    <body>
        <h1 onclick="mudatexto(this)">Clique aqui!</h1>
        
        <script>
            function mudaTexto(id) {
                id.innerHTML = "Mudei!"
            }
        </script>
    </body>
</html> 
*/