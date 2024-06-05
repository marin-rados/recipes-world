import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { apiKey } from "../api/api";
import { ExtendedIngredientsType, RecipesType } from "../types/global";

const RecipeDetails = () => {
    let params = useParams();
    const [details, setDetails] = useState<RecipesType | undefined>()
    const [active, setActive] = useState<string>("instructions");

    const getDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${apiKey}`);
        const detailData = await data.json();
        setDetails(detailData);
    }

    useEffect(() => {
        getDetails()
    }, [params.name])

    return <>
    <div className="recipe">
        <div className="image">
            <div className="recipe__image">
                <p className="recipe__image__title">{details?.title}</p>
                <img className="recipe__image__img" src={details?.image} alt="Image of a Recipe" />
            </div>
        </div>
        <div className="details">
            <div className="recipe__details">
                <button className={active === "instructions" ? "active" : ""} onClick={() => {setActive("instructions")}}>Instructions</button>
                <button className={active === "ingredients"  ? "active" : ""} onClick={() => {setActive("ingredients")}}>Ingredients</button>
                {active === "instructions" && (
                    <div className="recipe__instructions">
                    <h3 className="recipe__instructions__summary" dangerouslySetInnerHTML={{__html: details?.summary}}></h3>
                    <h3 className="recipe__instructions__guide" dangerouslySetInnerHTML={{__html: details?.instructions}}></h3>
                </div>
                )}
                {active === "ingredients" && (
                        <ul className="recipe__ingredients">
                        {details?.extendedIngredients.map((ingredient: ExtendedIngredientsType) => {
                            return <>
                            <li key={ingredient.id}>{ingredient.original}</li>
                            </>
                        })}
                    </ul>
                )}
                </div>
        </div>
    </div>
    </>
}

export default RecipeDetails;