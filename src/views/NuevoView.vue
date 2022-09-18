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
                        v-on:click="guardar()"
                      >
                        Guardar
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
                  <input
                    type="hidden"
                    class="form-control"
                    readonly
                    name="id"
                    id="id"
                    v-model="form.id"
                  />
                  <b-row>
                    <b-col cols="6" md="6">
                      <div class="labelright">
                        <label for="" class="control-label">username</label>
                      </div>
                    </b-col>
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
                        <label for="" class="control-label"
                          >direccion_calle</label
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
                        <label for="" class="control-label"
                          >direccion_numero</label
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
                          >email</label
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
  name: "NuevoView",
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
        id: 0,
        token: "",
      },
    };
  },
  methods: {
    guardar() {
      axios
        .put("http://localhost:8000/api/get_usuario/", this.form)
        .then((data) => {
          console.log(data);
          this.display_toast("Guardado", "success");
          this.$router.push("/dashboard");
        }).catch(e=>{
            console.log(e);
            this.display_toast("error", "error");
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
        //One of success, info, warning, error, default
      this.instance_toast();
      Vue.$toast.open({
        message: texto,
        type: tipo,
        position: "top-right",
        duration: 1500,
        // all of other options may go here
      });
    },
  },
};
</script>

<style scoped>
</style>