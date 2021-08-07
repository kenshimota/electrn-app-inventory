'use_strict'

export default Vue.component('snackbar-alert', {
    props: ["active", "text", "color", "icon" ],

    data: function() {
        return {
            snackbar: false
        }
    },

    whatch: {
        active: function(value) {
            console.log(value);
            this.snackbar = value;
        }
    },

    template: `
        
        <v-snackbar
        v-model="snackbar"
        multi-line
        timeout="3000"
        top
        >
        {{ text }}
        </template>
    </v-snackbar>
    `
});