const Cake = ({cake}) => {

    const ingredients = cake.ingredients.map((ingredient)=>{
        return(
            <li>{ingredient}</li>
        )
    });
    //this will take an array of strings and transform (create a new array) it into an array of <li> containing the string of each ingredient


    return (
        <article>
            <h2>{cake.cakeName}</h2>
            <p>Rating: {cake.rating}</p>
            <ul>
                {ingredients}
            </ul>
            <p>£{cake.price}</p>
        </article>
        
    )

}
//button needs to be in the component but the functionality in the container 


export default Cake;