import request from "../utils/request";
import config from "./config";
import { func } from "prop-types";

const { basePath } = config;
const tag = true;
export async function getZlpj(params) {
  return request("/api/rule", {
    method: "POST",
    body: {
      ...params,
      method: "delete"
    }
  });
}

export async function getDbsy() {
  return request(`${basePath}/sjd/dbsx/list`, {
    method: "GET"
  });
}
export async function getQualityData(id) {
  return request(`${basePath}/sjd/dbsx/zlpj/table/${id}`, {
    method: "GET"
  });
}
export async function submitQuality(params) {
  return request(`${basePath}/sjd/dbsx/zlpj/vote/${params.id}`, {
    method: "POST",
    body: params.value
  });
}
export async function login(values) {
  console.log("dfsdf");
  const body = {
    login_name: values.a,
    password: values.b,
    login_type: "yzzh"
  };
  console.log(body);
  return request(
    `${basePath}/yzzh/login`,
    {
      method: "POST",
      body: body
    },
    tag
  );
}
export async function getSubmissionList() {
  return request(`${basePath}/sjd/yzbx/list`, {
    method: "GET"
  });
}
export async function submitMessage(params) {
  console.log("llllllllllll");
  return request(`${basePath}/sjd/yzbx/create`, {
    method: "POST",
    body: params
  });
}
export async function submitThing(params) {
  return request(`${basePath}/sjd/yzbx/eva/${params.id}`, {
    method: "POST",
    body: params.body
  });
}
export async function handleCx(params) {
  return request(`${basePath}/sjd/yzbx/recall/${params}`, {
    method: "DELETE"
  });
}
export async function getDetail(params) {
  return request(`${basePath}/sjd/yzbx/one/${params}`, {
    method: "GET"
  });
}
export async function getTsList() {
  return request(`${basePath}/sjd/yzts/list`, {
    method: "GET"
  });
}
export async function handleTsSubmit(params) {
  return request(`${basePath}/sjd/yzts/create`, {
    method: "POST",
    body: params
  });
}
// export async function fakeAccountLogin(params) {
//   console.log('params', params);
//   return request(`${API_PREFIX}/user/login`, {
//     method: 'POST',
//     body: {
//       login_name: params.userName,
//       password: params.password,
//       login_type: 'qy',
//     },
//   });
// }
