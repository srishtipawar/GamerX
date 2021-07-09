import axios from "axios"

const instance=axios.create({
  baseURL:"http://localhost:5001/ins2-896a2/us-central1/api"
})

export default instance