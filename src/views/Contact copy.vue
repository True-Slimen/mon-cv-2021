<template>
  <section id="contact">
    <div class="cha-header-clip" aria-hidden="true">
      <header class="cha-header">
        <Navlight />
      </header>
      <div class="cha-header-section">
        <NavSectionLightUp
          :linkUp="'#my-journey'"
        />
      </div>
    </div>
    <kinesis-container class="h-100">
      <div class="container padding-top">
        <div class="row">
          <article class="col-md-6 col-sm-12 mt-5 z-index-100">
            <h2 class="mb-3 white-text">Contact</h2>
            <form
              class="contact-form"
              @submit="onSbumit()"
            >
              <div class="form-group">
                <!-- <label class="white-text" for="name">Nom</label> -->
                <input
                  type="text"
                  v-model="form.name"
                  class="form-control blur-3"
                  id="name"
                  required
                  placeholder="Nom"
                />
              </div>
              <div class="form-group">
                <!-- <label class="white-text" for="email">Adresse email</label> -->
                <input
                  type="email"
                  v-model="form.email"
                  class="form-control blur-3"
                  id="email"
                  required
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                
                <textarea 
                  placeholder="Le message"
                  v-model="form.message"
                  class="form-control blur-3" 
                  id="message" 
                  required
                  rows="3">
                </textarea>
              </div>
              <button @click="onSubmit()" class="btn btn-outline-light rounded-50 mt-3 px-5">Envoyer</button>
            </form>
            <div class="mail-notify-wrapper">
              <p class="mail-notify p-2">
                {{ notifyMessage }}
              </p>
            </div>
          </article>
          <div class="absolute-top-0 ">
            <kinesis-element class="col-md-10" :strength="10" type="depth">
            <img class="overflow-hidden col-12" src="image/envelope.png" />
          </kinesis-element>
          </div>
          <!-- <div class="white-text">
            {{ info }}
          </div> -->
        </div>
      </div>
    </kinesis-container>
  </section>
</template>

<style scoped>
</style>

<script>
import Navlight from "../components/Layouts/Navlight";
import NavSectionLightUp from "../components/Layouts/NavSectionLightUp";
const querystring = require("querystring");
//import Timeline from '@/Components/Timeline'
//import Footer from './Footer'

export default {
  components: {
    Navlight,
    NavSectionLightUp,
    //Timeline
    //Footer
  },
  props: {},
  data() {
    return {
      notifyMessage: '',
      form: {

      },
      info: ''
    };
  },
  created(){
  },
  methods: {
    onSubmit() {
      this.$http
      .post(
        "http://developpeur-metatidj.fr/mail.php",
        querystring.stringify(this.form)
      )
      .then(res => {
        console.log(res.data);
        console.log(typeof(res.data));
        if(res.data == true){
          this.form = {};
          this.showNotify(true);

          console.log('dans le true');
          //this.notifyMessage = 'Votre message a bien été envoyé, je vous répondrez rapidement. Merci de l\'intérêt porté à mon profil.'
        }else{
          this.showNotify(false);
          console.log('dans le false');
          //this.notifyMessage = 'Une erreur a empêché votre message de partir. Aucune crainte, je vais pouvoir lire son contenu. Merci de l\'intérêt porté à mon profil.'
        }
      });
      //"http://developpeur-metatidj.fr/mail.php"
    },
    showNotify(sended){
      console.log(sended);
      console.log('ooooooh');
      let notify = document.getElementsByClassName('mail-notify');
      console.log(notify);
      notify[0].classList.toggle("push-up-notify");
      if (sended == false) {
        notify[0].classList.add("notify-danger");
        notify[0].classList.remove("notify-success");
        this.notifyMessage = 'Une erreur a empêché votre message de partir. Aucune crainte, je vais pouvoir lire son contenu. Merci de l\'intérêt porté à mon profil.'
      }else{
        notify[0].classList.add("notify-success");
        notify[0].classList.remove("notify-danger");
        this.notifyMessage = 'Votre message a bien été envoyé, je vous répondrez rapidement. Merci de l\'intérêt porté à mon profil.'
      }
      setTimeout(() => { notify[0].classList.toggle("push-up-notify"); }, 5000);
      
    }
  },
};
</script>
<style>
.mail-notify-wrapper{
  position: relative;
  height: 130px;
  margin-top: 20px;
  overflow: hidden;
}

.mail-notify{
  top: 150px;
  position: absolute;
  padding: 10px;
  color: white!important;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0);
  transition: all 0.6s;
}

.notify-danger{
  background-color: rgb(255, 93, 93);
  transition: all 0.6s;

}

.notify-success{
  background-color: rgb(28, 167, 15);
  transition: all 0.6s;

}

.push-up-notify{
  top: 0px;
  transition: all 0.3s;
}

form input, form textarea{
  border-radius: 10px!important;
}
</style>
