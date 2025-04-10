
const user = {
   
   avatarUrl: "",
   name: "",
   bio: "",
   userName: "",
   repositories: [],
   events:[],
   followers: 0,
   following: 0,
   setInfo(getHubUser){
    this.avatarUrl = getHubUser.avatar_url
    this.name = getHubUser.name
    this.bio = getHubUser.bio
    this.userName = getHubUser.login
    this.followers = getHubUser.followers
    this.following = getHubUser.fallowing
   },
   setRepositories(repositories){
    this.repositories = repositories
   },
   setEvents(events){
      this.events = events.filter(event => event.type === 'CreateEvent' || event.type === 'PushEvent')
   }
  
}

export { user }