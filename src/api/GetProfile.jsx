import React from 'react'
import { getToken } from '../Hook/getToken'
import { decodeToken } from '../Hook/decodeToken'
import api from './api'

export const GetProfile = async () => {
    const token = getToken('accessToken')
    const data = decodeToken(token)
    let result
    await api.get(`/api/v1/user/me/${data.userId}`)
    .then((response) => {
        if (response) {
            result = response.data.data
        }
    })
    .catch((error) => {
      if (error) {
        console.log(error)
      }
    })
  return result
}
