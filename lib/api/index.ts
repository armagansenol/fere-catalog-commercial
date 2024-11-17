import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://cms.ferecatalog.com/services",
  headers: {
    "Content-Type": "application/json",
  },
})

export default apiClient
