<template>
    <v-container>
        <h1>Crear Producto</h1>
        <form @submit.prevent="procesarRegistro()">
            <v-text-field
                solo
                label="Prepend"
                prepend-icon="mdi-map-marker"
                v-model.trim="producto.nombre"
            ></v-text-field>

            <v-file-input
                label="File input"
                filled
                prepend-icon="mdi-camera"
                @change="getfile($event)"
            ></v-file-input>

            <v-btn
            depressed
            color="primary"
            type="submit"
            >
            Registrar
            </v-btn>
        </form>
    </v-container>
    
  
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            producto:{
                nombre:'',
                imagen:''
            },
            form: new FormData(),
        }
    },
    methods: {
        ...mapActions(['registrarProducto']),
        getfile(e) {
            this.producto.imagen = e;
        },
        procesarRegistro(){
            this.form.append("nombre", this.producto.nombre);
            this.form.append("imagen", this.producto.imagen);
            this.registrarProducto(this.form)
        }
        
    },
}
</script>

<style>

</style>