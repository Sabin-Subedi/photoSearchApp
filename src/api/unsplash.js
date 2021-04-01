import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID frTKSVUhGylnk-C4yi9WRnAzzfFI3FARDFLTGhyet6A",
  },
});
