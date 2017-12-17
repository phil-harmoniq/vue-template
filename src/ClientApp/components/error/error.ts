import Vue from "vue";
import Component from "vue-class-component";

@Component({
    template: require("error.html")
})
export class ErrorComponent extends Vue {
    constructor() {
        super();
    }

    mounted() { }
}