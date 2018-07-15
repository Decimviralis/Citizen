import axios from 'axios'
export default {
  name: "add-complaint-popup",
  data() {
    return {
       popTitle: "",
       popDesc: "",
       popImage: {},
       popAdress: ""
    }
  },
  created() {

  },
  methods: {

    emitClose(){
      this.$emit('close')
    },
    loadImage(e){
     this.popImage =  e.target.files[0];
     console.log(this.popImage);

    },
    postData(){
      let data = {
        address: this.popAdress,
        title: this.popTitle,
        description: this.popDesc,
      };
      axios.post('http://attrax.digital:8093/api/citizen/citizen/', data)
        .then(
          response => {
            console.log(response.data);
            alert("Отправлена заявка : Адрес - " + this.popAdress + ", Заголовок - " + this.popTitle + ", Описание - " + this.popDesc);
            this.$emit('close')
          }
        )
        .catch(
          function (error) {
          console.log(error)
          }
        )
    }
  }
}
