import "./styles/styles.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Recipes from "./components/recipes";
import NoMatch from "./pages/noMatch";
import Vegetarian from "./pages/vegetarian";
import Italian from "./pages/italian";
import American from "./pages/american";
import Chinese from "./pages/chinese";
import Dessert from "./pages/dessert";
import RecipeDetails from "./pages/recipeDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Recipes />} />
          <Route path="italian" element={<Italian />} />
          <Route path="vegetarian" element={<Vegetarian />} />
          <Route path="american" element={<American />} />
          <Route path="chinese" element={<Chinese />} />
          <Route path="desserts" element={<Dessert />} />
          <Route path="/recipe/:name" element={<RecipeDetails />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
