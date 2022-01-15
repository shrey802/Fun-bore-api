const axios = require("axios");
axios.get("http://www.boredapi.com/api/activity/")
.then(res => {
  console.log(res.data["activity"])
})
