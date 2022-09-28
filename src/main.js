
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'







import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import specific icons */
import { faCoffee, faHatWizard, faUserSecret,faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faTwitter, faLinkedin, faGithub,faUserSecret, faHatWizard, faCoffee, faEnvelope)





createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
