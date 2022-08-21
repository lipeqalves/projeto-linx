import axios from "axios";

export const buscaItem = axios.create({
  baseURL:
    "https://frontend-intern-challenge-api.iurykrieger.now.sh/products",
});
