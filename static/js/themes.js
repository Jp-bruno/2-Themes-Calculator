const colors = {};

const botao = document.querySelector("#theme_button");

const temas = [
    ['--primeira','#264653', '#83C5BE'], 
    ['--segunda', '#2a9d8f', '#EDF6F9'], 
    ['--terceira', '#e9c46a', '#006d77'], 
    ['--quarta', '#f4a261', '#ffddd2'], 
    ['--quinta', '#e76f51', '#f94144'],
    ['--numberFontColor', '#EDF6F9', '#006d77'],
    
    ['--primeiraHover','#335F70', '#9ED1CC'], 
    ['--segundaHover', '#33C1B1', '#0096A3'], 
    ['--terceiraHover', '#EFD595', '#006d7783'], 
    ['--quartaHover','#F7BC8D', '#FFF0EB'], 
    ['--quintaHover', '#EE9781', '#FB7477']
];

var qualTema = 2;

function changeTheme() {    
    if (qualTema === 1) {
        botao.style.left = '0%'
        botao.style.right = 'calc(100% - 20px)'

    } else {
        botao.style.right = '0%'
        botao.style.left = 'calc(100% - 20px)'
    }

    temas.forEach(el => {
        document.styleSheets[1].cssRules[0].style.setProperty(el[0], el[qualTema])
    })

    qualTema = qualTema === 2 ? 1 : 2
}

botao.addEventListener('click', changeTheme)