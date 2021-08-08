'use strict'

import snackbarAlert from '../utils/snackbar-alert.js';

// componente home
let signinApp = Vue.component('home', {

    data: function() {
        return {
            personas: [],
            id: null,
            name: null,
            sex: null,
            alert: false,
            alert_message: "",
            dialog: null,
        }
    },

    methods: {


        createPersona: function() {
            let new_persona = {id: this.id, name: this.name, sex: this.sex};
            this.personas.push(new_persona);
            this.dialog = null;
            this.alert_message = "Persona agregada correctamente";
            this.alert = true;
        },

        openDialog: function() {
            this.dialog = true;
        }
    },

	template: `
    <v-container>
    <v-simple-table
     fixed-header
     height="500px"
    >
         <template v-slot:default>
         <thead>
             <tr>
                 <th class="text-center">id</th>
                 <th class="text-center">Nombre</th>
                 <th class="text-center">Sexo</th>
             </tr>
         </thead>
         <tbody>
             <tr
             v-for="persona in personas"
             :key="persona.id"
             >
             <td>{{ persona.id }}</td>
             <td>{{ persona.name }}</td>
             <td>{{ persona.sex }}</td>
             </tr>
         </tbody>
         </template>
     </v-simple-table>

<v-row justify="center">
 <v-dialog
   v-model="dialog"
   persistent
   max-width="600px"
 >
   <v-card>
     <v-card-title>
       <span class="text-h5">Crear Persona</span>
     </v-card-title>
     <v-card-text>
       <v-container>
         <v-row>

         <v-col
         cols="6"
       >
         <v-text-field
           label="id*"
           required
           v-model="id"
         ></v-text-field>
       </v-col>

           <v-col
             cols="6"
           >
             <v-text-field
               label="Nombre*"
               v-model="name"
             ></v-text-field>
           </v-col>
           
           <v-col
           cols="6"
         >
           <v-text-field
             label="Sexo*"
             required
             v-model="sex"
           ></v-text-field>
         </v-col>
         </v-row>
       </v-container>
       <small>*indicates required field</small>
     </v-card-text>
     <v-card-actions>
       <v-spacer></v-spacer>
       <v-btn
         color="blue darken-1"
         text
         @click="dialog = false"
       >
         Close
       </v-btn>

       <v-btn
         color="blue darken-1"
         text
         @click="createPersona"
       >
         Save
       </v-btn>

     </v-card-actions>
   </v-card>
 </v-dialog>
</v-row> 
     <v-btn
     class="mt-7"
       color="primary"
       dark
       @click="openDialog"
     >
       Crear Persona
     </v-btn>

    <snackbar-alert
        :active="alert"
        :text="alert_message"
    />
 </v-container>

    `
});

export default signinApp;
