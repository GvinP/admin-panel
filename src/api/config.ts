import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')||'{}')?.auth || '{}')?.token || ''

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${TOKEN}`
    }
})