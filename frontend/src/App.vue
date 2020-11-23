<template>
  <div>
    <v-app v-if="showError">
      <Error />
    </v-app>
    <v-app v-else>
      <Snackbar/>
      <v-app v-if="showNav">
      <NavBar />
      <router-view />
      </v-app>
      <v-app v-else>
      <router-view />
      </v-app>
    </v-app>
  </div>
</template>

<script>
import Error from "./views/Error";
import Snackbar from "./components/snackbar";
import NavBar from "./components/NavBar";

export default {
  name: "App",
  data: () => ({
    location: ''
  }),
  components: {
    Error,
    NavBar,
    Snackbar
  },
  beforeCreate() {
    this.$store.dispatch("user/loadLoggedUser");
  },
  computed: {
    showError() {
      return this.$route.name == "Error";
    },
    showNav() {
      return location.pathname !== '/';
    }
  },
};
</script>

<style>
.verde-agua {
  color: #52a199;
}
.project.Begin {
  border-left: 8px solid red;
}
.project.Andamento {
  border-left: 8px solid yellow;
}
.project.Finalizado {
  border-left: 8px solid green;
}
.project.Lista {
  border-left: 8px solid blue;
}

.zoom:hover {
  -moz-transform: scale(1.01);
  -webkit-transform: scale(1.01);
  transform: scale(1.01);
  background: whitesmoke;
}

.bola-preta {
  background-color: black;
  border-radius: 50%;
  height: 15px;
  width: 15px;
}

</style>
