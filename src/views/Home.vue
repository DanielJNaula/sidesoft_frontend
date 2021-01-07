<template>
    <v-container>
      <ListaProducto/>
    </v-container>
    
</template>

<script>
// @ is an alias to /src
import ListaProducto from '../components/ListaProducto'

export default {
  name: 'Home',
  components: {
    ListaProducto,
  }
}
</script>
