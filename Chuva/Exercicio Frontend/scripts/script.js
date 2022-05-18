function extend() {
    let extend = document.getElementById("summary-content");
    extend.innerHTML = `<p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, 
    iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida.
     Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem.
     Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.</p>
      <p class="content">Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat.
     Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis.
      Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio.</p>
<p class="content"> Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus.
 Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis.
  Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris.
   Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, 
   interdum sapien. Aenean in porta arcu. Maecenas eu maximus</p>
<p class="content"> Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. 
Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem.
 Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`;

}

function createTopic() {
    let createTopic = document.getElementById("discussions-content");
    createTopic.innerHTML = `<label id="suggestion-label">Tem uma sugestão? Compartilhe seu feedback com os autores!</label>
    <label id="subject" class="discussion-label">Assunto</label>
    <input type="text" id="subject-input" class="discussions-input" placeholder="Defina um tópico sucinto para notificar os autores!">
    <label id="content-label" class="discussion-label">Conteúdo</label>
    <textarea class="discussions-input" rows="8"></textarea>
    <div id="bottom-bar-container">
        <div id="bottom-bar">
            <img src="./Imagens/B.png">
            <img src="./Imagens/I.png">
        </div>
        <button type="button" id="send" onclick="send()">Enviar</button>
        
    </div>
    <hr id="h-line2">
    `;
}

function send() {
    let send = document.getElementById("discussions-content");
    send.innerHTML = `<header>Seu tópico foi enviado com sucesso! :D</header>
    <label>Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</label>
    <a id="otherworks" class="discussions-link">Descubra outros trabalhos!</a>
    <hr id="h-line">
    <div id="create-topic-div">
        <button class="create-topic" id="create-new-topic" onclick="createTopic()"><div id="btn-pt1">&#43</div> <div id="btn-pt2">criar novo tópico</div></button>
    </div>
    <div>
        <div class="topic blur">
            <h2>Assunto da pergunta aparece aqui</h2>
            <label id="name">Carlos Henrique Santos</label>
            <p id="topic-text">Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
        </div>
        <div id="topic-feedback">
            <div>
                <img src="./Imagens/seta.png">
                <h2>Aguardando feedback dos autores</h2>
                <a class="discussions-link">Editar Tópico</a>
            </div>
        </div>
    </div>
    `;
}

function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.droplink')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}