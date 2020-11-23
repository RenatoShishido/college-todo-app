<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h1 class="display-3 grey--text py-10 px-10">Todos</h1>
        </v-col>
      </v-row>
      <v-row >
        <v-col xs="12" sm="12" md="6" lg="6" xl="6" class="px-5">
          <v-text-field v-model="fields.titulo" outlined></v-text-field>
        </v-col>
        <v-col xs="12" sm="12" md="6" lg="6" xl="6" class="d-flex flex-row">
          <v-btn
            @click="createTask()"
            class="text-center mr-5"
            color="#52a199"
            fab
            small
            dark
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn
            @click="createTask('Lista')"
            outlined
            class="text-center green--text"
            >Criar Lista</v-btn
          >
        </v-col>
      </v-row>
      <v-col xs="12" sm="12" md="12" lg="12" xl="12">
        <div class="d-flex flex-row">
          <h1 class="headline verde-agua mb-8">Status</h1>
          <h1 class="headline verde-agua px-4 mb-8">Tarefas</h1>
        </div>
        <v-card
          flat
          class="px-4 zoom"
          v-for="project in projects"
          :key="project.id"
        >
          <v-divider></v-divider>
          <v-layout
            row
            wrap
            :class="`d-flex flex-wrap pa-3 project ${project.status}`"
          >
            <v-col xs="12" sm="12" md="8" lg="8" xl="8" class="px-10">
              <div class="body-1 black--text">{{ project.titulo }}</div>
            </v-col>
            <v-col
              xs="12"
              sm="12"
              md="4"
              lg="4"
              xl="4"
              class="d-flex justify-end"
            >
              <!-- BOTOES DO DASHBOARD -->
              <v-btn
                class="text-center mr-5"
                @click="updateTask(project)"
                color="#52a199"
                fab
                small
                dark
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-btn
                class="text-center mr-5"
                @click="removerTask(project)"
                color="error"
                fab
                small
                dark
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-col>
            <v-col
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              v-if="project.status === 'Lista' ? true : false"
            >
              <v-container v-for="task in project.tasks" :key="task.id">
                <v-row>
                  <v-col
                    xs="12"
                    sm="12"
                    md="4"
                    lg="4"
                    xl="4"
                    class="d-flex justify-center"
                  >
                    <div class="bola-preta"></div>
                  </v-col>
                  <v-col
                    xs="12"
                    sm="12"
                    md="4"
                    lg="4"
                    xl="4"
                    class="d-flex justify-start"
                  >
                    <div class="body-1 black--text">{{ task.titulo }}</div>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-layout>
        </v-card>
      </v-col>
    </v-container>
  </v-main>
</template>

<script>
import AXIOS_INSTANCE from "../store/config";
export default {
  data() {
    return {
      projects: [],
      fields: {},
      fields_task: {},
    };
  },
  methods: {
    async listar() {
      try {
        const tarefas = await AXIOS_INSTANCE.get("/tarefas");
        const array = [];
        tarefas.data.response.forEach((element) => {
          if (this.$store.getters["user/GettersId"] === element.user._id) {
            array.push(element);
          }
        });
        this.projects = array;
      } catch (error) {
        console.log(error);
      }
    },
    async updateTask(tarefa) {
      try {
        const id = tarefa._id;

        if (tarefa.status === "Begin") {
          tarefa.status = "Andamento";
          await AXIOS_INSTANCE.put(`/tarefas/${id}`, tarefa);
        } else if (tarefa.status === "Lista") {
          this.$store.dispatch("snackbar/show", {
            content: "Esta e uma lista voce precisa ir na aba de lista",
            color: "error",
          });
          return;
        } else {
          tarefa.status = "Finalizado";
          await AXIOS_INSTANCE.put(`/tarefas/${id}`, tarefa);
        }

        this.$store.dispatch("snackbar/show", {
          content: "Tarefa em andamento!",
          color: "green",
        });

        this.listar();
      } catch (error) {
        this.$store.dispatch("snackbar/show", {
          content: error.response.data,
          color: "error",
        });
      }
    },
    async createTask(status) {
      try {
        if (status === undefined) {
           await AXIOS_INSTANCE.post("/tarefas", this.fields);

          this.$store.dispatch("snackbar/show", {
            content: "Tarefa criado com sucesso!",
            color: "green",
          });
        } else {
          this.fields.status = "Lista";
          await AXIOS_INSTANCE.post("/tarefas", this.fields);

          this.$store.dispatch("snackbar/show", {
            content: "Lista criada com sucesso!",
            color: "green",
          });
        }

        this.fields = {};
        this.listar();
      } catch (error) {
        this.$store.dispatch("snackbar/show", {
          content: error.response.data,
          color: "error",
        });
      }
    },
    async removerTask(tarefa) {
      try {
        const id = tarefa._id;
        await AXIOS_INSTANCE.delete(`/tarefas/${id}`);

        this.$store.dispatch("snackbar/show", {
          content: "Tarefa excluida com sucesso!",
          color: "green",
        });

        this.listar();
      } catch (error) {
        this.$store.dispatch("snackbar/show", {
          content: error.response.data,
          color: "error",
        });
      }
    },
  },
  mounted() {
    this.listar();
  },
};
</script>

<style></style>
