import axios from 'axios'
const url="https://my-json-server.typicode.com/EyuTes/real-world-vue";
const apiClient = axios.create({
    baseURL: url,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/events')
    },
    getEvent(id) {
        return apiClient.get('/events/' +id)
    },
    postEvent(event) {
        return apiClient.post('/events', event)
    }
}