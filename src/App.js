import { useEffect, useState } from 'react';
import './App.css';
import { Recipe } from './Recipe';

function App() {
  const APP_ID = 'abe2d356'
  const APP_KEY = '39bd637979d5e8fa7f591076ef15972b'

  const [recipes, setRecipes] = useState([])

  useEffect(()=>{
    getRecipes()
  }, [])

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    console.log(data.hits.recipe)
    console.log(data.hits)
    setRecipes(data.hits)
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>

      {recipes.map(({recipe}) => (
        <Recipe 
          key={recipe.label}
          title={recipe.label}
          calories={recipe.calories}
          image={recipe.image}
        />
      ))}
      
    </div>
  );
}

export default App;
