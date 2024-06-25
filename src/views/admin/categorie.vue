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
                                <li>
                                    <div class="main-button-red">
                                        <router-link class="scroll-to-section" to="/login">Se connecter</router-link>
                                    </div>
                                </li>
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
                            <a href="index.html" class="logo">Evénement</a>
                            <ul class="nav">
                                <li class="scroll-to-section"><router-link  to="/dashboard">Acceuil</router-link></li>
                                <li class="scroll-to-section"> <router-link class="active"  to="/categories">Catégories</router-link></li>
                                <li class="scroll-to-section"><router-link  to="/evenements">Evévénements</router-link></li>
                                <li class="scroll-to-section"><router-link   to="/inscriptions">Inscriptions</router-link></li>
                                <li class="scroll-to-section"> <router-link  to="/utilisateurs">Utilisateurs</router-link></li>
                                <li class="scroll-to-section"> <router-link  to="/profils">Profil</router-link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

        <section class="section main-banner" id="top" data-section="section1">
            <video autoplay muted loop id="bg-video">
                <source src="/edu/assets/images/course-video.mp4" type="video/mp4" />
            </video>
            <div class="video-overlay header-text">
                <div class="container">
                </div>
            </div>
        </section>

        <section class="right-info" id="meetings">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h2>Catégories</h2>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="row">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="text-bg-primary">#</th>
                                        <th>Nom</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(categorie, index) in categories" :key="categorie.id">
                                        <th scope="row">{{ index + 1 }}</th>
                                        <td>{{ categorie.nom }}</td>
                                        <td>{{ categorie.description }}</td>
                                        <td>
                                            <button type="button" class="btn btn-primary"  @click.prevent="openUpdateModal(categorie)">Modifier</button>
                                            <button type="button" class="btn btn-danger" @click="deleteCategorie(categorie)">
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       
    <section>
        <div class="modal fade bs-example-modal-lg" id="bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="updateModalLabel">Modifier Catégorie</h5>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="updateCategorie">
                <div class="form-group">
                  <label for="nom">Nom</label>
                  <input type="text" class="form-control" v-model="currentCategorie.nom" required>
                </div>
                <div class="form-group">
                  <label for="description">Description</label>
                  <textarea class="form-control" v-model="currentCategorie.description" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Enregistrer</button>
              </form>
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
                                <form @submit.prevent="getCategorie" id="contact">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h2>Ajouter une categorie</h2>
                                        </div>
                                        <div class="col-lg-4">
                                            <fieldset>
                                                <input name="name" type="text" id="name" placeholder="Votre nom" required="" v-model="formData.nom">
                                            </fieldset>
                                        </div>
                                        <div class="col-lg-12">
                                            <fieldset>
                                                <textarea name="message" type="text" class="form-control" id="message" placeholder="Une descriptin de la categorie" required="" v-model="formData.description"></textarea>
                                            </fieldset>
                                        </div>
                                        <button type="submit" id="form-submit" class="button">Enregister</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <p> @waouhmonde.com</p>
            </div>
        </section>
    </div>
</template>

<script>
import { authService } from '@/_services/authService'; 
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: 'Categories',
    data() {
        return {
            isModalVisible: false,
            selectedCategorieId: null,
            categories: [],
            formData: {
                nom: '',
                description: '',
            },
            currentCategorie: {
                id: '',
                nom: '',
                description: '',
            },
        };
    },
    created() {
        this.fetchCategories();
    },
    
    methods: {
        async getCategorie() {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/categories', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                    body: JSON.stringify(this.formData),
                });

                if (!response.ok) {
                    throw new Error("Une erreur est survenue lors de l'enregistrement.");
                }

                const data = await response.json();
                console.log('Data:', data);

                toast.success('Enregistrement réussi!', { duration: 10000, background: '#28a745' });
                setTimeout(() => {
                    this.refreshPage(); // Appel de la fonction pour rafraîchir la page
                }, 5000);

            } catch (error) {
                console.error('Error in getCategorie:', error);
                toast.error(`Erreur lors de l'enregistrement : ${error.message}`, { duration: 5000, background: '#dc3545' });
            }
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
        openUpdateModal(categorie) {
      this.selectedMenuId = categorie.id;
      this.formData = { ...categorie};
      $('#bd-example-modal-lg').modal('show');
    },
    updateCategorie() {
      fetch(`http://127.0.0.1:8000/api/categories/${this.currentCategorie.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authService.getToken()}`,
        },
        body: JSON.stringify(this.currentCategorie),
      })
        .then(response => response.json())
        .then(data => {
          this.fetchCategories();
          this.isModalVisible = false;  // Masquer le modal après la modification
        })
        .catch(error => {
          console.error('Error updating category:', error);
        });
    },
        deleteCategorie(categorie) {
            fetch(`http://127.0.0.1:8000/api/categories/${categorie.id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${authService.getToken()}`,
                },
            })
            .then(response => response.json())
            .then(data => {
                this.fetchCategories();
            })
            .catch(error => {
                console.error('Error deleting category:', error);
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
