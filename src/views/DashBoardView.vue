<template>
  <div>
    <UpHeader />
    <div class="container">
      <b-row>
        <b-col cols="4" md="4"
          ><button class="btn btn-primary width100" v-on:click="nuevo()">
            Nuevo
          </button></b-col
        >

        <b-col cols="4" md="4"></b-col>
        <b-col cols="4" md="4"></b-col>
      </b-row>
      <hr />
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">id</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in listausuarios"
            :key="item.id"
            v-on:click="editar(item.id)"
          >
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.id }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <DownFooter />
  </div>
</template>


<script>
import UpHeader from "@/components/UpHeader.vue";
import DownFooter from "@/components/DownFooter.vue";
import axios from "axios";
export default {
  name: "DashBoardView",
  data() {
    return {
      listausuarios: null,
      pagina: 1,
    };
  },
  components: {
    UpHeader,
    DownFooter,
  },
  mounted: function () {
    let direccion = "http://localhost:8000/api/get_usuarios/";
    //"http://localhost:8000/api/get_usuarios?page=" + this.pagina;
    axios.get(direccion).then((data) => {
      console.log(data);
      this.listausuarios = data.data.usuarios;
      console.log(this.listausuarios);
    });
  },
  methods: {
    editar(id) {
      this.$router.push("/EditarView/" + id);
    },
    nuevo() {
      this.$router.push("/NuevoView");
    },
  },
};
</script>


<style scoped>
.width100 {
  width: 100%;
  margin-left: 2px;
}
</style>