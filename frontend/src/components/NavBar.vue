<template>
  <div>
    <v-app-bar app color="#52A199" height="80"   dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="display-1">TaskFlow</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-title class="body-1 px-5"
        >Ola, {{ $store.getters["user/GettersNome"] }}</v-toolbar-title
      >
      <button class="white--text px-5" @click="logout()">Sair</button>
    </v-app-bar>
    <v-navigation-drawer
      app
      v-model="drawer"
      
      color="#e4e4e4"
      dark
      width="300"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="display-1 text-center verde-agua py-5">
            Categorias
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="black--text"></v-divider>

      <v-list shaped>
        <v-list-item-group color="#52a199">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.route"
            link
          >
            <v-list-item-content>
              <v-list-item-title
                class="grey--text headline"
                v-text="item.title"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Todos", route: "/dashboard/todos" },
        { title: "Nao iniciado", route: "/dashboard/begin" },
        { title: "Em andamento", route: "/dashboard/andamento" },
        { title: "Finalizado", route: "/dashboard/finalizado" },
        { title: "Listas", route: "/dashboard/listas" },
      ],
      right: null,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("user/logoutUser");
      location.href = "/";
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
