<template>
    
    <v-row>
        <v-col 
            cols="12" sm="6" md="4"
            v-for="(ticket, index) in tickets"
            :key="index"
        >
            <v-card class="mx-auto ">
                <v-card-title>{{ticket.nombre_aerolinea}}</v-card-title>

                <v-card-text>
                    <v-row
                    align="center"
                    class="mx-0"
                    >
                    <v-rating
                        :value="4.5"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                    ></v-rating>

                    <div class="grey--text ml-4">
                        4.5 (413)
                    </div>
                    </v-row>

                    <div class="my-4 subtitle-1">
                    $ {{ticket.precio}}
                    </div>

                    <div> <strong>Numero Escalas:</strong> {{ticket.numero_escalas}}</div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title>Duración vuelo</v-card-title>

                <v-card-text>
                    <v-chip-group
                    
                    active-class="deep-purple accent-4 white--text"
                    column
                    >
                    <v-chip>{{ticket.duracion_vuelo}}</v-chip>
                    </v-chip-group>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                    color="deep-purple lighten-2"
                    text
                    
                    >
                    Reservar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        
    </v-row>
    
    
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
    name:'Cards',
    computed:{
        ...mapState(['tickets']),
    }
}
</script>

<style>

</style>