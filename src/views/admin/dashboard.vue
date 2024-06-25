<template>
    <div>
  <div class="sub-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-8">
          <div class="left-content">
            <p>Site d'événement <em>Entreprise</em>***.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-4">
          <div class="right-icons">
            <ul>
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-behance"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
               <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
              <li><div class="main-button-red">
            
            <router-link class="scroll-to-section " to="/login" >Se connecter</router-link>
       
        </div></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

 
  <header class="header-area header-sticky">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <nav class="main-nav">
                      <!-- ***** Logo Start ***** -->
                      <a href="index.html" class="logo">
                        Evénement
                      </a>
                      <ul class="nav">
                        <li class="scroll-to-section"><router-link class="active"  to="/dashboard">Acceuil</router-link></li>
                                <li class="scroll-to-section"> <router-link  to="/categories">Catégories</router-link></li>
                                <li class="scroll-to-section"><router-link  to="/evenements">Evévénements</router-link></li>
                                <li class="scroll-to-section"><router-link  to="/inscriptions">Inscriptions</router-link></li>
                                <li class="scroll-to-section"> <router-link  to="/utilisateurs">Utilisateurs</router-link></li>
                                <li class="scroll-to-section"> <router-link  to="/profils">Profil</router-link></li>
                      </ul>       
                  </nav>
              </div>
          </div>
      </div>
  </header>
  <!-- ***** Header Area End ***** -->

  <!-- ***** Main Banner Area Start ***** -->
  <section class="section main-banner" id="top" data-section="section1">
      <video autoplay muted loop id="bg-video">
          <source src="/edu/assets/images/course-video.mp4" type="video/mp4" />
      </video>

      <div class="video-overlay header-text">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="caption">
              <h6>Bonjour à vous</h6>
              <h2>Bienvenue à événement</h2>
             
              
          </div>
              </div>
            </div>
          </div>
      </div>
  </section>
  <!-- ***** Main Banner Area End ***** -->


  <section class="upcoming-meetings" id="meetings">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h2>Evernements</h2>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="categories">
            <h4>Nos Catégories</h4>
<select v-model="selectedCategory" @change="filterEventsByCategory">
  <option value="">Toutes les catégories</option>
  <option v-for="categorie in categories" :key="categorie.id" :value="categorie.nom">{{ categorie.nom }}</option>
</select>

          </div>
        </div>
        <div class="col-lg-8">
          <div class="row">
            <div class="col-lg-6"  v-for="event in events" :key="event.id">
              <div class="meeting-item">
                <div class="thumb">
                  <div class="price">
                    <span> </span>  <span> {{ event.heure_debut }}</span><br>
                    <span>{{ event.date_fin }}</span> <span>{{ event.heure_fin }}</span>
                  </div>
                  <a href="meeting-details.html"><img src="/edu/assets/images/meeting-04.jpg" alt="Student Training"></a>
                </div>
                
                <div class="down-content">
                  <div class="date">
                    <h6>Nov <span>30</span></h6>
                  </div>
                  <a href="meeting-details.html"><h4>{{ event.title }}</h4></a>
                  <p>{{ event.description }}.</p>
                   <p> Lieu: {{ event.lieu }} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

 
 

  <section class="contact-us" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 align-self-center">
          <div class="row">
            <div class="col-lg-12">
              <form id="contact" action="" method="post">
                <div class="row">
                  <div class="col-lg-12">
                    <h2>Contactez nous</h2>
                  </div>
                  <div class="col-lg-4">
                    <fieldset>
                      <input name="name" type="text" id="name" placeholder="Votre nom et prenom" required="">
                    </fieldset>
                  </div>
                  <div class="col-lg-4">
                    <fieldset>
                    <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Votre adresse mail" required="">
                  </fieldset>
                  </div>
                  <div class="col-lg-4">
                    <fieldset>
                      <input name="subject" type="text" id="subject" placeholder="Objet" required="">
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <textarea name="message" type="text" class="form-control" id="message" placeholder="Laissez votre message" required=""></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="button">Envoyer maintenant</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="right-info">
            <ul>
              <li>
                <h6>Telephone</h6>
                <span>010-020-0340</span>
              </li>
              <li>
                <h6>Addresse Email</h6>
                <span>info@evening.even</span>
              </li>
              <li>
                <h6>Addresse</h6>
                <span>Rio de Janeiro - RJ, 22795-008, Brazil</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <p> @waouhmonde.com
         
        </p>
    </div>
  </section>
    </div>
  </template>
  <script>
  import { authService } from '@/_services/authService'; // Importez authService depuis le bon chemin
  export default {
    name: 'Dashboard',

    data() {
      return {
        categories: [],
        selectedCategory: '', // Catégorie sélectionnée
        nom: '',
        events: [],
        title: '',
        description: '', 
        date_debut: '',
        date_fin: '',
        heure_debut: '',
        heure_fin: '',
        lieu: '',
        status: '',
      };
    },

    created() {
      this.fetchEvents();
      this.fetchCategories();
    },

    methods: {

      filterEventsByCategory() {
    if (this.selectedCategory) {
      this.filteredEvents = this.events.filter(event => event.category === this.selectedCategory);
    } else {
      this.filteredEvents = this.events; // Afficher tous les événements si aucune catégorie sélectionnée
    }
  },
      fetchEvents() {
        fetch('http://127.0.0.1:8000/api/evernements')
          .then(response => response.json())
          .then(data => {
            this.events = data;
          })
          .catch(error => {
            console.error('Error fetching events:', error);
          });
      },

      fetchCategories() {
        fetch('http://127.0.0.1:8000/api/categories')
          .then(response => response.json())
          .then(data => {
            this.categories = data;
          })
          .catch(error => {
            console.error('Error fetching categories:', error);
          });
      },

      logout() {
        authService.logout();
        this.$router.push('/login');
      },
    },
  };
</script>


  
  <style scoped>
  /* Styles spécifiques au composant Home */
  </style>
  