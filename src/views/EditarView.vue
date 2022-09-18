<template>
  <div>
    <UpHeader />
    <div class="container">
      <form action="" class="form-horizontal">
        <b-row>
          <b-col cols="12">
            <b-card tag="article">
              <b-card-text>
                <div>
                  <b-row>
                    <b-col cols="6" md="6"></b-col>
                    <b-col cols="6" md="6">
                      <button
                        type="button"
                        class="btn btn-primary width100"
                        v-on:click="editar()"
                      >
                        Guardar
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger width100"
                        v-on:click="eliminar()"
                      >
                        Eliminar
                      </button>
                      <button
                        type="button"
                        class="btn btn-dark width100"
                        v-on:click="salir()"
                      >
                        Salir
                      </button>
                    </b-col>
                  </b-row>
                </div>
              </b-card-text>
              <b-card-text>
                <div>
                  <b-row>
                    <b-col cols="6" md="6"
                      ><label for="" class="control-label col-sm-2"
                        >id</label
                      ></b-col
                    >
                    <b-col cols="6" md="6"
                      ><input
                        type="text"
                        class="form-control"
                        readonly
                        name="id"
                        id="id"
                        v-model="form.id"
                    /></b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="6" md="6"
                      ><label for="" class="control-label col-sm-2"
                        >Nombre</label
                      ></b-col
                    >
                    <b-col cols="6" md="6"
                      ><input
                        type="text"
                        class="form-control"
                        name="username"
                        id="username"
                        v-model="form.username"
                    /></b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="6" md="6">
                      <div class="labelright">
                        <label for="" class="control-label col-sm-2"
                          >Nombre</label
                        >
                      </div>
                    </b-col>
                    <b-col cols="6" md="6"
                      ><input
                        type="text"
                        class="form-control"
                        name="direccion_calle"
                        id="direccion_calle"
                        v-model="form.direccion_calle"
                    /></b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="6" md="6">
                      <div class="labelright">
                        <label for="" class="control-label col-sm-2"
                          >Nombre</label
                        >
                      </div>
                    </b-col>
                    <b-col cols="6" md="6"
                      ><input
                        type="text"
                        class="form-control"
                        name="direccion_numero"
                        id="direccion_numero"
                        v-model="form.direccion_numero"
                      />
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col cols="6" md="6">
                      <div class="labelright">
                        <label for="" class="control-label col-sm-2"
                          >Nombre</label
                        >
                      </div>
                    </b-col>
                    <b-col cols="6" md="6">
                      <input
                        type="text"
                        class="form-control"
                        name="email"
                        id="email"
                        v-model="form.email"
                      />
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col cols="6" md="6">
                      <div class="labelright">
                        <label for="" class="control-label"
                          >fecha_creacion</label
                        >
                      </div>
                    </b-col>
                    <b-col cols="6" md="6">
                      <input
                        type="text"
                        v-model="form.fecha_creacion"
                        class="form-control"
                        name="fecha_creacion"
                        id="fecha_creacion"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="6" md="6">
                      <div class="labelright">
                        <label for="" class="control-label"
                          >fecha_modificacion</label
                        >
                      </div>
                    </b-col>
                    <b-col cols="6" md="6">
                      <input
                        type="text"
                        v-model="form.fecha_modificacion"
                        class="form-control"
                        name="fecha_modificacion"
                        id="fecha_modificacion"
                      />
                    </b-col>
                  </b-row>
                </div>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>

        <br />
      </form>
    </div>
    <DownFooter />
  </div>
</template>

<script>
import UpHeader from "@/components/UpHeader.vue";
import DownFooter from "@/components/DownFooter.vue";

import axios from "axios";

import Vue from "vue";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

export default {
  name: "EditarView",
  components: {
    UpHeader,
    DownFooter,
  },
  data: function () {
    return {
      itemid: null,
      form: {
        username: "",
        direccion_calle: "",
        direccion_numero: "",
        email: "",
        fecha_creacion: "",
        fecha_modificacion: "",
        id: "",
        token: "",
      },
    };
  },
  mounted: function () {
    this.itemid = this.$route.params.id;
    //console.log(this.itemid);
    let json = {
      id: this.itemid,
    };

    axios
      .post("http://localhost:8000/api/get_usuario/", json)
      .then((response) => {
        if (response.data.error == 0) {
          this.form.id = response.data.usuarios.id;
          this.form.username = response.data.usuarios.username;
          this.form.direccion_calle = response.data.usuarios.direccion_calle;
          this.form.direccion_numero = response.data.usuarios.direccion_numero;
          this.form.email = response.data.usuarios.email;
          this.form.fecha_creacion = response.data.usuarios.fecha_creacion;
          this.form.fecha_modificacion =
            response.data.usuarios.fecha_modificacion;
          this.form.token = localStorage.getItem("token");
          console.log(this.form);
        }
      });
  },
  methods: {
    editar() {
      axios
        .put("http://localhost:8000/api/get_usuario/", this.form)
        .then((data) => {
          console.log(data);
          this.display_toast("Guardado", "success");
        });
    },
    salir() {
      this.$router.push("/dashboard");
    },
    instance_toast() {
      Vue.use(VueToast);
      //Vue.$toast.open({/* options */});
      let instance = Vue.$toast.open("You did it!");

      // Force dismiss specific toast
      instance.dismiss();
      // Dismiss all opened toast immediately
      Vue.$toast.clear();
    },
    display_toast(texto, tipo) {
      this.instance_toast();
      Vue.$toast.open({
        message: texto,
        type: tipo,
        position: "top-right",
        duration: 1500,
        // all of other options may go here
      });
    },
    eliminar() {
      let json = {
        id: this.form.id,
        token: this.form.token,
        otro: "sss",
      };

      axios
        .delete("http://localhost:8000/api/get_usuario/", json)
        .then((data) => {
          console.log(data);
          this.$router.push("/dashboard");
        });
    },
  },
};
</script>


<style>
.left {
  text-align: left;
}

.labelright {
  text-align: right;
  width: 100%;
}
.width100 {
  width: 33%;
  margin-left: 2px;
}
</style>