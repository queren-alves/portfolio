const about = document.querySelector("#about");
const formulario = document.querySelector("#formulario");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

async function getApiGithub(){
    try {
 
        const dadosPerfil = await fetch('https://api.github.com/users/queren-alves')
 
        const perfilJson = await dadosPerfil.json();
    
        let conteudo = `
        <figure class="about_image">
                <img
                    src="${perfilJson.avatar_url}"
                    alt="Foto do perfil do GitHub - ${perfilJson.name}."
                >
            </figure>
 
            <article class="about_content">
 
                <h2>Sobre mim</h2>
                <p>Sou estudante de Sistemas de Informação, com grande interesse na área de desenvolvimento de sistemas e na lógica da programação. 
                Gosto de transformar ideias em soluções funcionais e bem estruturadas, buscando sempre aprender novas tecnologias e aprimorar minhas habilidades técnicas.
                Tenho curiosidade por entender como as coisas funcionam por trás do código e me motiva ver projetos ganhando forma e impacto real.</p>
                <p>Atualmente, sigo me desenvolvendo para construir uma carreira sólida na área de tecnologia, contribuindo com soluções criativas e eficientes que façam a diferença.</p>
 
            <div class="about_stats">
                    <a href="${perfilJson.html_url}" target="_blank" class="botao git">Ver GitHub</a>
                   
                    <div class="stats-wrapper">
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.followers}</p>
                            <p class="stat-label">Seguidores</p>
                        </div>
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.public_repos}</p>
                            <p class="stat-label">Repositórios</p>
                        </div>
                    </div>
 
                </div>
            </article>
        
        `
        about.innerHTML += conteudo;

    } catch(error) {
        console.error(error);
    }
}

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const campoNome = document.querySelector('#nome');
    const txtNome = document.querySelector('#txtNome');

    if(campoNome.value.length < 3) {
        txtNome.innerHTML = 'Nome deve ter no mínimo 3 caracteres.';
        campoNome.focus();
        return;
    } else {
        txtNome.innerHTML = '';
    }

    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');

    if(!campoEmail.value.match(emailRegex)) {
        txtEmail.innerHTML = 'Digite um e-mail válido.';
        campoEmail.focus();
        return;
    } else {
        txtEmail.innerHTML = '';
    }

    const campoAssunto = document.querySelector('#assunto');
    const txtAssunto = document.querySelector('#txtAssunto');

    if(campoAssunto.value.length < 3) {
        txtAssunto.innerHTML = 'Assunto deve ter no mínimo 5 caracteres.';
        campoAssunto.focus();
        return;
    } else {
        txtAssunto.innerHTML = '';
    }

    formulario.submit();
})

getApiGithub();