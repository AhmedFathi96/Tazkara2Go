import axios from "axios";

export async function getallmovies() {
  const response = await axios("http://41.196.0.251:81/Service2.svc/getshows");

  return response;
}
export async function Getworkers(_id) {
  const response = await axios(
    "http://41.196.0.251:81/Service2.svc/GetWorkersByShow/" + _id
  );
  return response;
}
export async function GetCinemasByShowID(_id) {
  const response = await axios.get(
    "http://41.196.0.251:81/Service2.svc/GetCinemasByShow/" + _id
  );
  return response;
}
export async function findmovie(_id) {
  let response = await getallmovies()
    .then()
    .find((item) => +item.ShowId === +_id);

  return response;
}
