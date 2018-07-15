import searchPanel from '../../components/search-panel/search-panel'
import acceptComplainPopup from '../../components/popups/accept-complaint-popup/accept-complaint-popup'
import addComplaintPopup from '../../components/popups/add-complaint-popup/add-complaint-popup'
import verificationPopup from '../../components/popups/verification-popup/verification-popup'
import axios from 'axios'
import moment from 'moment'
export default {
  name: "main-page",
  components: {
    searchPanel,
    acceptComplainPopup,
    addComplaintPopup,
    verificationPopup,

  },
  data() {
    return {


      contentBlocks: [

      ]
    }
  },
  created() {

  },
  mounted() {
    this.getRequestInfo()
  },
  methods: {
    getRequestInfo(){
      axios.get('http://attrax.digital:8093/api/complaint/complaint/')
        .then(
          response => {
            console.log(response.data);
            this.contentBlocks = response.data;
            for(let item in this.contentBlocks){
              this.contentBlocks[item].created_at = moment(this.contentBlocks[item].created_at).format("DD.MM.YYYY")
            }
          }
        )
        .catch(
          function (error) {
            console.log(error)
          }
        )
    },
    goToClaim(block) {
      console.log(this.contentBlocks[block]);
      let params = {id: block.id};
      this.$router.push({name: 'claim-page',  params: params})
    }
  }
}
