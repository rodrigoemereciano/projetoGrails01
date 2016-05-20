// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better
// to create separate JavaScript files as needed.
//
//= require jquery/dist/jquery.min.js
//= require adminlte/dist/js/app.js
//= require bootstrap/dist/js/bootstrap.min.js
//= require select2/dist/js/select2.min.js
//= require vue/dist/vue.min.js
//= require vue-resource/dist/vue-resource.min.js
//= require apps/main.controller.js
//= require_self


new Vue({
  el:"#listContainer",
  data:{
    listaServidor:[],
    listaContainer:[]
  },
  created: function () {
      this.$http.get('/servidor/index.json', function (servidores) {
        this.$set('listaServidor', servidores);
        this.$http.get('/servidor/ps/'+servidores[0].id, function (containers) {
            console.log(containers)
            this.$set('listaContainer', containers)
        });
      });

  },
  methods: {

  }
});
