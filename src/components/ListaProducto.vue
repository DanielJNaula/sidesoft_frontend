<template>
    <div>
        <h1>Lista de productos</h1>
        
        <router-link to="/crear-producto" class="v-btn v-btn--has-bg theme--light v-size--default indigo">Crear nuevo producto</router-link>
    <v-simple-table>
        
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-left">
                Producto
            </th>
            <th class="text-left">
                Imagen
            </th>
            <th class="text-left">
                Acciones
            </th>
            </tr>
        </thead>
        <tbody>
            
            <tr
              v-for="(producto, index) in arrayData" :key="index"  
            >
            <td>{{producto.nombre}}</td>
            <td>
                <div v-if="producto.imagen === null">
                    <span >Sin Imagen</span>
                </div>
                <div v-else>
                    <v-img
                    :src="serveBackend + producto.imagen.path"
                    aspect-ratio="1.7"
                    ></v-img>    
                </div>

                    
            </td>
            <td>
                <router-link :to="{name:'editarProducto', params: {id: producto.id}}" class="v-btn v-btn--has-bg theme--light v-size--default error">Editar</router-link>
                
            </td>
            </tr>
        </tbody>
        </template>
    </v-simple-table>
    </div>
 
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['arrayData','serveBackend']) 
    },
    methods: {
        ...mapActions(['setProductosApi'])
    },
    mounted () {
        this.setProductosApi();
    },
}
</script>

<style>

</style>