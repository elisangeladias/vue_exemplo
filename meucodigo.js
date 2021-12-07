MeuApp = {
  data() {
    return {
      titulo: 'Exemplo Vue!',
      subtitulo: 'Contador Vue!',
      contador: 0
                  
    }
  },
  methods: {
    addContador() {
      this.contador++;
    },

    decContador(){
      
      this.contador--;
    }
   
  }
}
Vue.createApp(MeuApp).mount('#meuapp')