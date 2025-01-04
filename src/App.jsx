import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipe from "./components/OurRecipe";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);

  const addRecipeToQueue = (recipe)=>{
    const isExist = recipeQueue.find(
      previousRecipe =>previousRecipe.recipe_id === recipe.recipe_id
    )
    if(!isExist){
      setRecipeQueue([...recipeQueue,recipe]);
    }else{
      alert('Recipe already exists in the queue');
    }
  }
  console.log(recipeQueue);

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recipe Section */}
      <OurRecipe></OurRecipe>
      {/* Recipes Card Section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* card section  */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* side bar */}
        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>
    </div>
  );
};

export default App;