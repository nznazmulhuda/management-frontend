import axios from "axios"

export const getTotalProfit = async () => {
  axios.get('/dashboard/total-profit')
    .then((res) => res.data)
    .catch((error) => error.response)
}