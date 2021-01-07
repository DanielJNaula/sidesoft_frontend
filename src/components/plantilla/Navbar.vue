<template>
  <v-sheet>
    <v-app-bar app 
      color="blue darken-2"
      dark
      shrink-on-scroll
      prominent
      src="https://i.pinimg.com/originals/30/94/e0/3094e0fd1114787639e8e334a840ca02.jpg"
      fade-img-on-scroll>
      <v-app-bar-nav-icon class=" d-sm-flex d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Front-end Sidesoft producto</v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-toolbar-items class="d-none d-md-flex" > 
        
        <router-link  v-for="(item, index) in items" :key="index"  class="v-btn v-btn--flat v-btn--icon  theme--dark v-size--default item-navbar"  :to="{name:item.name_ruta}">{{item.title}}</router-link>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Challenge front-end</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <router-link v-for="(item, index) in items" :key="index" class="v-list-item v-list-item--link theme--light" :to="{name:item.name_ruta}">
          <v-list-item-icon>
            <v-icon color="orange darken-2">{{ item.icon }}</v-icon>
            
          </v-list-item-icon>

          <v-list-item-content>
            
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            
          </v-list-item-content>
        </router-link>
        
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
    
    
 
</template>

<script>
export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Inicio', icon: 'mdi-heart', name_ruta:'home'},
        ],
      }
    },
}
</script>

<style scope>
  .item-navbar{
    width: 100px !important;
  }
</style>