const Sidebar = ({recipeQueue}) => {
    return (
        <div className="w-1/3 border-2 rounded-2xl text-gray-600 p-3 bg-base-100">
            {/* want to cook table */}
            <div className="overflow-x-auto">
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
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time}</td>
                                    <td>{recipe.calories}</td>
                                </tr>))
                        }
                    </tbody>
                </table>
            </div>
            {/* currently cooking table */}
        </div>
    );
};

export default Sidebar;