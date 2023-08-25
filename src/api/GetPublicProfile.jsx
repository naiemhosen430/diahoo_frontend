import React from "react";
import api from "./api";
import { getToken } from "../Hook/getToken";
import { decodeToken } from "../Hook/decodeToken";

export default async function GetPublicProfile(id) {
  try {
    const token = getToken("accessToken");
    const data = decodeToken(token);
    const result = await api.get(
      `/api/v1/user/public/${id}?myid=${data.userId}`
    );

    return result.data.data;
  } catch (error) {
    throw error;
  }
}
