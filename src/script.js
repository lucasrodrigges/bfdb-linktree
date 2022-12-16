const links = [{
  link: 'https://api.whatsapp.com/send?phone=5579988738021&text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20consulta%20com%20a%20Dra.%20Hanna',
  title: 'AGENDE SUA CONSULTA',
  src: "./assets/icons/whatsapp.svg"
}, {
  link: 'https://youtube.com/channel/UCBb0BmkGhXnO_Flk-P_Kngg',
  title: 'YOUTUBE',
  src: "./assets/icons/youtube.svg"
}, {
  link: 'https://borafalardebicho.com/seubichomaisfeliz/?utm_source=redes-sociais&utm_medium=organico',
  title: 'CURSO - SEU BICHO MAIS FELIZ',
  src: "./assets/icons/course.svg"
}, {
  link: 'https://borafalardebicho.com/modulacao-intestinal-lista-de-espera/',
  title: 'LISTA DE ESPERA MOD INTESTINAL',
  src: "./assets/icons/course.svg"
}, {
  link: 'https://borafalardebicho.com/nutricao-funcional-lista-de-espera/',
  title: 'LISTA DE ESPERA NUTRI FUNCIONAL',
  src: "./assets/icons/course.svg"
}];


const createLinks = () => {
  const ul = document.getElementById('links');

  links.forEach(({link, title, icon, src }) => {
    const a = document.createElement('a')
    const i = document.createElement('i')
    const img = document.createElement('img')
    
    a.href = link;
    a.innerHTML = title;
    a.target = '_blank';

    img.src= src;
    // img.width = '25'
    img.className = 'icon'
    a.appendChild(img)
    
    ul.appendChild(a)
  })
};


window.onload = () => {
  createLinks()
}