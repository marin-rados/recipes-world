import { useEffect, useState } from "react";
import { apiKey } from "../api/api";
import { RecipesType } from "../types/global";
import Select from "react-select";
import { Link } from "react-router-dom";

type Props = {
  recipeType?: string;
};

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "15", label: "15" },
  { value: "25", label: "25" },
  { value: "35", label: "35" },
];

const defaultLimit = "15";

const RecipeTag = ({ recipeType = "random"}: Props) => {
  const [recipes, setRecipes] = useState([]);
  const [limit, setLimit] = useState<string | undefined>("15");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    getRecipes(limit);
  }, [limit]);

  const getRecipes = async (limit: string | undefined) => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${limit ? limit : defaultLimit}&tags=${recipeType}`
      );
      const data = await api.json();
      localStorage.setItem(`${recipeType}`, JSON.stringify(data.recipes));
      setRecipes(data.recipes);
      console.log(data.recipes);
  };

  return (
    <>
      <div className="recipes">
      <input
        className="recipes__input"
        type="text"
        placeholder="Search for a recipe..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Select
        className="recipes__amount"
          onChange={(e) => {
            setLimit(e?.value);
          }}
          options={options}
        />
        <div className="cards">
        {recipes.filter((item: RecipesType) => {
          return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search);
        }).map((recipe: RecipesType) => {
          return (
            <div key={recipe.id} className="cards__card">
              <Link to={`/recipe/${recipe.id}`} className="cards__card__link">
              <p className="cards__card__title">{recipe.title}</p>
              <img
                className="cards__card__image"
                src={recipe.image}
                alt="recipe image"
              />
              </Link>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default RecipeTag;
