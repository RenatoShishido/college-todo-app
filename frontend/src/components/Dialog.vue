<template>
  <v-row justify="end">
    <v-btn
      class="text-center mr-10"
      color="#52a199"
      fab
      small
      dark
      @click.stop="dialog = true"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="800">
      <v-card class="py-5 px-5">
        <v-card-items>
          <v-text-field
            label="Titulo"
            v-model="fields_task.titulo"
            class="mt-10"
            outlined
          ></v-text-field>
          <div class="d-flex justify-center">
            <v-btn
              color="#52a199"
              dark
              medium
              @click="updateTask(project), (dialog = false)"
            >
              Enviar
            </v-btn>
          </div>
        </v-card-items>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    project: {},
  },
  data() {
    return {
      fields_task: {},
      dialog: false,
    };
  },
  methods: {
    async updateTask(tarefa) {
      tarefa.tasks.push(this.fields_task);
      this.$emit("updateTask", tarefa);
      this.fields_task = {};
    },
  },
};
</script>

<style></style>
