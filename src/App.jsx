import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipe from "./components/OurRecipe";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([])

  const [preparedRecipe,setPreparedRecipe] = useState([])

  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)

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

  const handleRemove = id =>{
    // find which recipe to remove
    const deleteRecipe = recipeQueue.find(recipe=> recipe.recipe_id === id)
    // remove for on too cook table
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !==id)
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deleteRecipe])
  }

  const calculateTimeAndCalories =(time, calorie)=>{
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calorie)
  }
  // console.log(recipeQueue);

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
        <Sidebar 
        totalCalories={totalCalories} 
        totalTime={totalTime} 
        calculateTimeAndCalories={calculateTimeAndCalories} 
        handleRemove={handleRemove} 
        recipeQueue={recipeQueue} 
        preparedRecipe={preparedRecipe}></Sidebar>
      </section>
    </div>
  );
};

export default App;