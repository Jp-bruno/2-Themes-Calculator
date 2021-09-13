const colors = {};

const botao = document.querySelector("#theme_button");



function createStyleLink(name) {
    let style = document.createElement('link');
    style.rel = 'stylesheet';
    style.classList.add(`${name}`);
    style.classList.add(`style`);
    style.href = `./${name}.css`;
    return style
}


function changeTheme() {    
    const temLink = Array.from(document.querySelectorAll('.style'));

    let qual = temLink[0].className.match(/[0-9]/)[0] === '1' ? '2' : '1';
    
    if (qual === "1") {
        botao.style.left = '0%'
        botao.style.right = 'calc(100% - 20px)'

    } else {
        botao.style.right = '0%'
        botao.style.left = 'calc(100% - 20px)'
    }

    document.head.appendChild(createStyleLink(`style${qual}`));
    setTimeout(() => {document.head.removeChild(temLink[0])}, 100);
}

botao.addEventListener('click', changeTheme)