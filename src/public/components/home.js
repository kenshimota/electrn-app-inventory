'use strict'

// componente home
let signinApp = Vue.component('home', {

    data: function() {
        return {

            personas: [],

            headers: [
              { text: 'Nombre', value: 'name' },
              { text: 'Apellido', value: 'lastname' },
              { text: 'Correo', value: 'email' }
            ],

            valid: true,

            hidden:true,

            search: null,
            page: 1,
            pageCount: 0,

            id: null,
            name: null,
            lastname: null,
            email: null,

            nameRules: [ v => !!v || 'El nombre es requerido' ],
            lastnameRules: [ v => !!v || 'El apellido es requerido' ],
            emailRules: [ v => !!v || 'El correo es requerido' ],

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
        this.personas = await execute('index-employees',{});
      },

      createPersona: async function() {

          let new_persona = {
            name: this.name,
            lastname: this.lastname,
            email: this.email,
          };
          
          let result = await execute('create-employee',new_persona);
            
          console.log(result.code);

          if( result.code == 1) {
            alertApp({color:"success", text: result, icon: "success" });
            this.dialog = false;

          }else {
            alertApp({color:"error", text: result, icon: "alert" });  
          } 
          
      },

        openDialog: function() {
            this.name = null;
            this.lastname = null;
            this.email = null;
            this.valid = true;

            this.dialog = true;
        }
    },

	template: `
    <v-container>


    <v-card elevation="0">
      <v-card-title>
        <v-row>
        <v-col cols="12">
          <v-btn color="primary" text :icon="true" @click="openDialog"> <v-icon>mdi-plus</v-icon> </v-btn>
          <v-btn color="warning" text :icon="true"> <v-icon>mdi-pencil</v-icon> </v-btn>
          <v-btn color="error" text :icon="true"> <v-icon>mdi-delete</v-icon> </v-btn>
          <v-btn color="primary" text :icon="true" @click="hidden =!hidden"> <v-icon>mdi-magnify</v-icon> </v-btn>
        </v-col>
      </v-row>
        <v-spacer></v-spacer>

        <v-scroll-x-reverse-transition>
        <v-text-field
          v-show="hidden"
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          width="100px"
        ></v-text-field>
        </v-scroll-x-reverse-transition>
        
      </v-card-title>
      
      <v-data-table
        :headers="headers"
        :items="personas"
        :search="search"
        :page.sync="page"
        hide-default-footer
        @page-count="pageCount = $event"
        :items-per-page="14"
        he
      ></v-data-table>

      <div class="text-center pt-2 mt-4">
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
      </div>
  </v-card>


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
        <v-form v-model="valid">
        <v-container>
        <v-row>

          <v-col
            cols="6"
          >
            <v-text-field
              label="Nombre*"
              v-model="name"
              :rules="nameRules"
            ></v-text-field>
          </v-col>
          
          <v-col
          cols="6"
        >
          <v-text-field
            label="Apellido*"
            required
            v-model="lastname"
            :rules="lastnameRules"
          ></v-text-field>
        </v-col>

        <v-col cols="6">
         <v-text-field
           label="Email*"
           required
           v-model="email"
           :rules="emailRules"
         ></v-text-field>
       </v-col>

        </v-row>
      </v-container>
      <small>* Indica que campos son requeridos</small>
        </v-form>
     </v-card-text>
     <v-card-actions>
       <v-spacer></v-spacer>
       <v-btn
          text
         color="blue darken-1"
         @click="dialog = false"
       >
         Close
       </v-btn>

       <v-btn
         color="blue darken-1"
         text
         :disabled="!valid"
         @click="createPersona"
       >
         Save
       </v-btn>

     </v-card-actions>
   </v-card>
 </v-dialog>
</v-row>  
 </v-container>

    `
});

export default signinApp;
