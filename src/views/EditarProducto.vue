<template>
  
  <v-container>
      <h1>Editar producto </h1>
        <form @submit.prevent="procesarEdicion()">
            <v-text-field
                solo
                label="Prepend"
                prepend-icon="mdi-map-marker"
                v-model.trim="producto.nombre"
            ></v-text-field>


            <v-btn
            depressed
            color="primary"
            type="submit"
            >
            Procesar
            </v-btn>
        </form>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            producto: {
                id: this.$route.params.id,
                nombre:'',
                
            },
        }
        
    },
    computed: {
        ...mapState(['server']) 
    },
    
    methods: {
        ...mapActions(['editarProducto']),
        getfile(e) {
            this.producto.imagen = e;
        },
        procesarEdicion(){
            
            this.editarProducto(this.producto)
            
        },
        async setProductoApi(){
            const res = await fetch(this.server+'/'+this.producto.id)
            const data = await res.json();
            this.producto.nombre = data.data.nombre
        },
    },
    mounted () {
        this.setProductoApi();
    },
}
</script>

<style>

</style>