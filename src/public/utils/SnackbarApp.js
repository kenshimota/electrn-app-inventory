'use strict';

export default Vue.component('snackbar-app',{
    props: ["active", "text", "icon", "color"],

    data: function(){
        return {
            snackbar: false,
        };
    },

    watch: {
        active: function(value){
            this.snackbar = value;
        }
    },

    template: `
        <v-snackbar 
            v-model = "snackbar"  
            :color="color"
            :timeout = "5000"
            :top = "true"
            :vertical="'vertical'"
        >
            
            <p>
                <v-icon v-if = "icon != null" dark>
                    mdi-{{ icon }}
                </v-icon>
                <span  style = "margin-left: 5px;">
                    {{ text.message }}
                </span>
            </p>
        </v-snackbar>
    `
});