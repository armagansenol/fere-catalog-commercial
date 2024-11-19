import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://cms.ferecatalog.com/services",
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },
})

export default apiClient
