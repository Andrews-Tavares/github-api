
const screen =
 {
    userProfile: document.querySelector('.profile-data'),

    rederUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                         <h1>${user.name ?? 'não possui nome cadastrado 🥲'}</h1>
                                           <p>${user.bio ?? 'não possui bio cadastrada 🥲'}</p><br>
                                           <p>👥 Seguindo: ${user.following ?? '0'}</p> <br>
                                           <p>👥 Seguidores: ${user.followers ?? '0'}</p>
                                        </div>
                                 </div>`
                                 
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens +=
            `<li>
               <a href="${repo.html_url}" target="_blank">
                 <h3>${repo.name}</h3>
                    <div class="info-repositories">
                      <p>🍴:${repo.forks_count}</p>
                      <p>⭐:${repo.stargazers_count}</p>
                      <p>👀:${repo.watchers_count}</p>
                      <p>👨‍💻:${repo.language ?? 'Nâo imformada'}</p>
                    </div>  
                </a>
             </li>`)
        if(user.repositories.length > 0){
            this.userProfile.innerHTML +=  `<div class="repositories section">
                                              <h2> Repositórios</h2>
                                              <ul>${repositoriesItens}</ul>
                                            </div>`
      }},

    rederEvent(event){
        let eventsItens = ''

       user.events.forEach(event => eventsItens += `<li>${event.repo.name} -  ${event.commits[0][message]}</li>`)     
   
       if(user.events.length > 0){
      this.userProfile.innerHTML += 
                                    `<div class="events section">
                                        <h4>Eventos</h4>
                                        <ul>${eventsItens}</ul>
                                     </div>`}
    },

    rederNotFound(){
        this.userProfile.innerHTML= "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }