import searchPanel from '../../components/search-panel/search-panel'
import axios from "axios/index";
import moment from "moment/moment";
export default {
  name: "claim-page",
  components: {
    searchPanel
  },
  data: function () {
    return {
      description: "",
      claim: null,
      photos: [],
      id: this.$route.params.id,
      sameClaims: []
    }
  },
  created() {
    this.getRequestInfo();
    this.getClaims();
  },
  methods: {
    getRequestInfo(){
      console.log(this.id);
      axios.get('http://192.168.88.229:8000/api/complaint/complaint/' + this.id)
        .then(
          response => {
            console.log(response.data);
            this.claim = response.data;
            this.claim.created_at = moment(this.claim.created_at).format("DD.MM.YYYY")
            // this.contentBlocks = response.data;
            // for(let item in this.contentBlocks){
            //   this.contentBlocks[item].created_at = moment(this.contentBlocks[item].created_at).format("DD.MM.YYYY")
            // }
          }
        )
        .catch(
          function (error) {
            console.log(error)
          }
        )
    },
    getClaims() {
      axios.get('http://192.168.88.229:8000/api/complaint/complaint/')
        .then(
          response => {
            console.log(response.data);
            this.sameClaims = response.data;
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
