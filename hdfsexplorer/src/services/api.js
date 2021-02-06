import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://192.168.25.40:8080`
  })
}
