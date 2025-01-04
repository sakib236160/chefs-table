const Sidebar = ({
        recipeQueue, 
        handleRemove,
        preparedRecipe,
        calculateTimeAndCalories, 
        totalTime, 
        totalCalories}) => {
    return (
        <div className="w-1/3 border-2 rounded-2xl text-gray-600 p-3 bg-base-100">
            {/* want to cook table */}
            <div className="overflow-x-auto">
                <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2">Want To Cook:{recipeQueue.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calorie</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            recipeQueue.map((recipe,index)=>(
                                <tr className="hover" key={index}>
                                    <th>{index + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time} min</td>
                                    <td>{recipe.calories} calories</td>
                                    <td>
                                    <button onClick={()=>{
                                    handleRemove(recipe.recipe_id)
                                    calculateTimeAndCalories(recipe.preparing_time, recipe.calories)
                                    } }
                                    className=" bg-green-400 rounded-full px-2 py-1 md:px-4   text-gray-800  font-medium">Preparing</button>
                                    </td>
                                </tr>))
                        }
                    </tbody>
                </table>
            </div>
            {/* currently cooking table */}
            <div className="overflow-x-auto">
                <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2">Currently Cooking:{preparedRecipe.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calorie</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            preparedRecipe.map((recipe,index)=>(
                                <tr className="hover" key={index}>
                                    <th>{index + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time}</td>
                                    <td>{recipe.calories}</td>
                                </tr>))
                        }
                        <tr className="border-none">
                            <td></td>
                            <td></td>
                            <td>Total Time = {totalTime}</td>
                            <td>Total calories = {totalCalories} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sidebar;