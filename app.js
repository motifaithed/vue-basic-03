const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  watch:{
    counter(value){
      if(value > 50){
        this.counter = 0;
      }
    }
  },
  computed:{
    fullName(){
      console.log('we are here');
      if(!this.name){
        return;
      }
      return `${this.name} Andaya`; 
    }
  },
  methods: {
    showFullName(){
      console.log('we are here');
      if(!this.name){
        return;
      }
      return `${this.name} Andaya`; 
    },
    resetName(){
      this.name = '';
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
