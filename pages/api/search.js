import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://api.spoonacular.com/recipes/complexSearch",
    params: {
      query: req.query.keyword,
      diet: req.query.diet,
      excludeIngredients: req.query.exclude,
      number: "10",
      offset: "0",
    },
    headers: {
      "x-api-key": "",
    },
  };

  try {
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.response);
  }
}
