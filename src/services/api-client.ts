import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f11936be61204cc495133ecd7fdcd30f",
  },
});
