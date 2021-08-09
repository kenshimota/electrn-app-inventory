'use strict'

import snackbarAlert from '../utils/snackbar-alert.js';

// componente home
let signinApp = Vue.component('home', {

    data: function() {
        return {
            personas: [],

            id: null,
            name: null,
            lastname: null,
            email: null,
            password: null,

            alert: false,
            alert_message: "",
            dialog: null,
        }
    },

    mounted: function () {
      this.$nextTick(function () {
          this.getPersonas();
      });
    },

    watch: {
      dialog: function() {
          if(this.dialog == false)
            this.getPersonas();
      }
    },

    methods: {

      getPersonas: async function(){
        this.personas = await execute('index',{});
        console.log(this.personas);
      },

      createPersona: async function() {
          let new_persona = {
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            password: this.password
          };
          
          let result = await execute('create',new_persona);

          console.log(result);
          
          this.dialog = false;
      },

        openDialog: function() {
            this.dialog = true;
        }
    },

	template: `
    <v-container>
    <v-simple-table
     fixed-header
     height="300px"
  
    >
         <template v-slot:default>
         <thead>
             <tr>
                 <th class="text-center">id</th>
                 <th class="text-center">Nombre</th>
                 <th class="text-center">Apellido</th>
                 <th class="text-center">Email</th>
             </tr>
         </thead>
         <tbody>
             <tr
             v-for="persona in personas"
             :key="persona.id"
             >
             <td>{{ persona.dataValues.id }}</td>
             <td>{{ persona.dataValues.name }}</td>
             <td>{{ persona.dataValues.lastname }}</td>
             <td>{{ persona.dataValues.email }}</td>
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
               label="Nombre*"
               v-model="name"
             ></v-text-field>
           </v-col>
           
           <v-col
           cols="6"
         >
           <v-text-field
             label="Apellido*"
             required
             v-model="lastname"
           ></v-text-field>
         </v-col>

         <v-col cols="6">
          <v-text-field
            label="Email*"
            required
            v-model="email"
          ></v-text-field>
        </v-col>

        <v-col cols="6">
        <v-text-field
          label="Password*"
          required
          v-model="password"
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
<v-row>
    <v-col cols="6">
      <v-btn
        style="margin-left:7em;"
        class="mt-7"
        color="primary"
        dark
        @click="openDialog"
    > Crear Persona </v-btn>
    </v-col>
   
</v-row>  


    <snackbar-alert
        :active="alert"
        :text="alert_message"
    />
 </v-container>

    `
});

export default signinApp;
