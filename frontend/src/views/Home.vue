<template>
  <div class="container-my">
    <div class="forms-container">
      <div class="signin-signup">
        <section class="sign-in-form">
          <h2 class="title">Entrar</h2>
          <span class="subtitle">Entre com sua conta cadastrada </span>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="email" v-model="fields_login.email" placeholder="Email" id="sing-in-email" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" @keypress.enter="enviar()" v-model="fields_login.password" placeholder="Senha" id="sing-in-password" />
          </div>
          <button class="btn" :loading="loading" @click="enviar()" >Entrar</button>
        </section>
        <section class="sign-up-form">
          <h2 class="title">Criar Conta</h2>
          <span class="subtitle"
            >Crie uma conta agora mesmo na nossa plataforma</span
          >
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" v-model="fields_register.nome" placeholder="Nome" id="sing-up-nome" />
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email" v-model="fields_register.email" placeholder="Email" id="sing-up-email" />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" @keypress.enter="cadastrar()" v-model="fields_register.password" placeholder="Senha" id="sing-up-password" />
          </div>
          <button class="btn" :loading="loading" @click="cadastrar()">Criar</button>
        </section>
      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>Opa, novato</h3>
          <h4>
            Crie sua conta de forma rapida e simples
          </h4>
          <button  class="btn secundario" id="sign-up-btn">
            Criar
          </button>
        </div>
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>Bem Vindo</h3>
          <h4>
            Ja possui conta?
          </h4>
          <button  class="btn secundario" id="sign-in-btn">
            Entrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      fields_register: {},
      fields_login: {},
      loading: false
    };
  },
  methods: {
    async cadastrar() {
      this.loading = true;
      try {
        await this.$store.dispatch('user/registerUser', this.fields_register)

        this.$store.dispatch("snackbar/show", {
          content: "Usuario cadastrado com sucesso!",
          color: "green"
        });
        this.fields = {};
      } catch (error) {
        this.$store.dispatch("snackbar/show", {
          content: error.error,
          color: "error"
        });
        this.fields_register = {};
      }
      this.loading = false;
    },
    async enviar() {
      this.loading = true
      try {
        await this.$store.dispatch("user/chargeLoginUser", this.fields_login);

        this.$store.dispatch("snackbar/show", {
          content: 'Usuario logado com sucesso!',
          color: "green"
        });

        location.href =  '/dashboard/todos'
        this.fields_login = {};

      } catch (error) {
        this.$store.dispatch("snackbar/show", {
          content: error.error,
          color: "error"
        });
      }
      this.loading = false
    }
  },
  mounted() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container-my");

    sign_up_btn.addEventListener("click", function() {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", function() {
      container.classList.remove("sign-up-mode");
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
input {
  font-family: "Poppins", sans-serif;
}

.container-my {
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}

section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

section.sign-up-form {
  opacity: 0;
  z-index: 1;
}

section.sign-in-form {
  z-index: 2;
}

.title {
  font-size: 2.2rem;
  color: #52a199;
  margin-bottom: 10px;
}

.subtitle {
  color: #acacac;
  margin-bottom: 25px;
  font-size: 1.2rem;
}

.input-field {
  max-width: 380px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 55px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
}

.input-field i {
  text-align: center;
  line-height: 55px;
  color: #acacac;
  transition: 0.5s;
  font-size: 1.1rem;
}

.input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}

.btn {
  width: 150px;
  background-color: #52a199;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;

}

.btn:hover {
  background-color: #4d84e2;
}
.panels-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container-my:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  right: 55%;
  transform: translateY(-50%);
  background-image: linear-gradient(-45deg, #52a199 0%, #52a199 100%);
  transition: 1.8s ease-in-out;
  z-index: 6;
}

.image {
  width: 100%;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 6;
}

.left-panel {
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
  margin-right: 20%;
}

.right-panel {
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
  margin-right: 10%;
}

.panel .content {
  color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
}

.panel h3 {
  font-weight: 700;
  line-height: 1;
  font-size: 4rem;
}

.panel h4 {
  font-size: 1.2rem;
  padding: 1rem 0;
}

.btn.secundario {
  margin: 0;
  background: none;
  border: 2px solid white;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}

.right-panel .image,
.right-panel .content {
  transform: translateX(800px);
}

/* ANIMATION */

.container-my.sign-up-mode:before {
  transform: translate(100%, -50%);
  right: 52%;
}

.container-my.sign-up-mode .left-panel .image,
.container-my.sign-up-mode .left-panel .content {
  transform: translateX(-800px);
}

.container-my.sign-up-mode .signin-signup {
  left: 25%;
}

.container-my.sign-up-mode section.sign-up-form {
  opacity: 1;
  z-index: 2;
}

.container-my.sign-up-mode section.sign-in-form {
  opacity: 0;
  z-index: 1;
}

.container-my.sign-up-mode .right-panel .image,
.container-my.sign-up-mode .right-panel .content {
  transform: translateX(0%);
}

.container-my.sign-up-mode .left-panel {
  pointer-events: none;
}

.container-my.sign-up-mode .right-panel {
  pointer-events: all;
}
@media (min-width: 1600px) {
  .left-panel {
    pointer-events: all;
    padding: 3rem 17% 2rem 12%;
    margin-right: 25%;
  }
  .right-panel {
    pointer-events: none;
    padding: 3rem 12% 2rem 17%;
    margin-right: 20%;
  }
}
@media (max-width: 870px) {
  .container-my {
    min-height: 800px;
    height: 100vh;
  }
  .signin-signup {
    width: 100%;
    top: 95%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }

  .signin-signup,
  .container-my.sign-up-mode .signin-signup {
    left: 50%;
  }

  .panels-container-my {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }

  .panel {
    width: 800px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
  }

  .right-panel {
    grid-row: 3 / 4;
  }

  .left-panel {
    grid-row: 1 / 2;
  }

  .image {
    width: 200px;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }

  .panel .content {
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.8s;
  }

  .panel h3 {
    font-size: 1.2rem;
  }

  .panel p {
    font-size: 0.7rem;
    padding: 0.5rem 0;
  }

  .btn.transparent {
    width: 110px;
    height: 35px;
    font-size: 0.7rem;
  }

  .container-my:before {
    width: 1500px;
    height: 1500px;
    transform: translateX(-50%);
    left: 30%;
    bottom: 68%;
    right: initial;
    top: initial;
    transition: 2s ease-in-out;
  }

  .container-my.sign-up-mode:before {
    transform: translate(-50%, 100%);
    bottom: 32%;
    right: initial;
  }

  .container-my.sign-up-mode .left-panel .image,
  .container-my.sign-up-mode .left-panel .content {
    transform: translateY(-300px);
  }

  .container-my.sign-up-mode .right-panel .image,
  .container-my.sign-up-mode .right-panel .content {
    transform: translateY(0px);
  }

  .right-panel .image,
  .right-panel .content {
    transform: translateY(300px);
  }

  .container-my.sign-up-mode .signin-signup {
    top: 5%;
    transform: translate(-50%, 0);
  }
}

@media (max-width: 570px) {
  form {
    padding: 0 1.5rem;
  }

  .image {
    display: none;
  }
  .panel {
    width: 380px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
  }
  .panel .content {
    padding: 0.5rem 1rem;
  }
  .container-my {
    padding: 1.5rem;
  }

  .container-my:before {
    bottom: 58%;
    left: 50%;
  }

  .container-my.sign-up-mode:before {
    bottom: 33%;
    left: 50%;
  }
}
</style>
