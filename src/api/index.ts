import axios from "axios";
/*
  instance : new axios 객체 
  requestSuccess : 요청 성공
  requestFail : 요청 실패
  responseSuccess : 응답 성공
  responseFail : 응답 실패 
*/

const baseURL = "https://window-6d51a-default-rtdb.firebaseio.com/";

const API = axios.create({
  baseURL,
  headers: {},
});

export { API };
