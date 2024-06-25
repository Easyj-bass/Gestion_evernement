<template>
  <div>
    <section>
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
                        <span class="h1 fw-bold mb-0">Gestion_Evenement</span>
                      </div>

                      <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;"></h5>

                      <div class="form-outline mb-4">
                        <input type="email" id="form2Example17" class="form-control form-control-lg" v-model="email" />
                        <label class="form-label" for="form2Example17">Email*</label>
                        <span v-if="errors.email" class="text-danger">{{ errors.email }}</span>
                      </div>

                      <div class="form-outline mb-4">
                        <input type="password" id="form2Example27" class="form-control form-control-lg" v-model="password" />
                        <label class="form-label" for="form2Example27">Mot de passe*</label>
                        <span v-if="errors.password" class="text-danger">{{ errors.password }}</span>
                      </div>

                      <div class="pt-1 mb-4">
                        <button class="btn btn-dark btn-lg btn-block" type="submit" :disabled="loading">Connexion</button>
                      </div>

                      <a class="small text-muted" href="#!">Mot de passe oublié !</a>
                      <p class="mb-5 pb-lg-2" style="color: #393f81;">Vous avez déjà un compte ? <router-link to="/register" style="color: #393f81;">Inscrivez vous gratuitement</router-link></p>
                      
                      <!-- Affichage des erreurs générales -->
                      <div v-if="errors.general" class="alert alert-danger">{{ errors.general }}</div>

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
import { authService } from '@/_services/authService';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errors: {},
      loading: false,
    };
  },
  methods: {
    async submitForm() {
      this.loading = true;
      this.errors = {};
      try {
        const data = await authService.login(this.email, this.password);
        console.log(data);
        if (data && data.user.role) {
          if (data.user.role === 'admin') {
            toast.success("Connexion réussie !", {
              duration: 5000,
              background: "#28a745",
            });
            setTimeout(() => {
              this.$router.push('/dashboard');
            }, 1000);
          } else if (data.user.role === 'user')  {
            toast.success("Connexion réussie !", {
              duration: 5000,
              background: "#28a745",
            });
            setTimeout(() => {
              this.$router.push('/');
            }, 1000);
          }
        } else {
          throw new Error('Réponse de l\'API invalide'); // Lancer une erreur si la réponse de l'API est invalide
        }
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
