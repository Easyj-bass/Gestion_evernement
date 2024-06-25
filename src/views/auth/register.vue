<template>
    <div>
      <section class="">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card" style="border-radius: 1rem;">
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <form @submit.prevent="submitForm">
                        
                        <div class="d-flex align-items-center mb-3 pb-1">
                          <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                          <span class="h1 fw-bold mb-0">Gestion_Evenement</span>
                        </div>
                        <div class="row">
                        <h5 class="fw-normal mb-3 pb-3 " style="letter-spacing: 1px;"></h5>
                        <div data-mdb-input-init class="col-md-6 form-outline mb-4">
                          <input type="text" id="nom" class="form-control form-control-lg" v-model="nom" />
                          <label class="form-label" for="nom">Nom*</label>
                        </div>
                        <div data-mdb-input-init class="col-md-6 form-outline mb-4">
                          <input type="text" id="prenom" class="form-control form-control-lg" v-model="prenom" />
                          <label class="form-label" for="prenom">Prénom*</label>
                        </div>
                    </div>
                        <div class="row">
                        <div data-mdb-input-init class="col-md-6  form-outline mb-4">
                          <input type="email" id="email" class="form-control form-control-lg" v-model="email" />
                          <label class="form-label" for="email">Email*</label>
                          <span v-if="errors.email" class="text-danger">{{ errors.email }}</span>
                        </div>
                        <div data-mdb-input-init class="col-md-6  form-outline mb-4">
                        <input type="text" id="telephone" class="form-control form-control-lg" v-model="telephone" />
                        <label class="form-label" for="telephone">Téléphone*</label>
                    <span v-if="errors.telephone" class="text-danger">{{ errors.telephone }}</span>
                    </div>
                </div>
                    <div data-mdb-input-init class="form-outline mb-4">
                    <select id="sexe" class="form-select form-select-lg" v-model="sexe">
                        <option value="" disabled selected>Choisissez le sexe*</option>
                        <option value="masculin">Masculin</option>
                        <option value="feminin">Féminin</option>
                    </select>
                    <label class="form-label" for="sexe">Sexe*</label>
                    <span v-if="errors.sexe" class="text-danger">{{ errors.sexe }}</span>
                    </div>
                    <div class="row">
                        <div data-mdb-input-init class="col-md-6  form-outline mb-4">
                          <input type="password" id="password" class="form-control form-control-lg" v-model="password" />
                          <label class="form-label" for="password">Mot de passe*</label>
                          <span v-if="errors.password" class="text-danger">{{ errors.password }}</span>
                        </div>
                        <div data-mdb-input-init class=" col-md-6  form-outline mb-4 ">
                          <input type="password" id="confirmPassword" class="form-control form-control-lg" v-model="confirmPassword" />
                          <label class="form-label" for="confirmPassword">Confirmer le mot de passe*</label>
                          <span v-if="errors.confirmPassword" class="text-danger">{{ errors.confirmPassword }}</span>
                        </div>
                    </div>
                        <div class="pt-1 mb-4">
                          <button data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-block" type="submit" :disabled="loading">S'inscrire</button>
                        </div>
                        <p class="mb-5 pb-lg-2" style="color: #393f81;">Vous avez déjà un compte ? <router-link to="/login" style="color: #393f81;">Connectez-vous</router-link></p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { registerService } from '@/_services/registerService'; // Importez registerService depuis le bon chemin
  
  export default {
    name: 'Register',
    data() {
      return {
        nom: '',
        prenom: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: {},
        loading: false,
        sexe:'',
        telephone:'',
        role: '',
        status: '',

      };
    },
    methods: {
      async submitForm() {
        this.loading = true;
        this.errors = {};
        try {
          if (this.password !== this.confirmPassword) {
            throw new Error('Les mots de passe ne correspondent pas.');
          }
          const data = await registerService.register(this.email, this.password, this.nom, this.prenom ,this.sexe, this.telephone);
          console.log('Inscription réussie', data);
          // Ajoutez ici la redirection après l'inscription, par exemple :
          // this.$router.push('/login');
        } catch (error) {
          this.errors.general = error.message;
          if (error.errors) {
            this.errors = error.errors;
          }
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .text-danger {
    color: red;
  }
  </style>
  