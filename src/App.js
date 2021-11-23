import { useEffect, useState } from 'react';
import { Recipe } from './components/Recipe/Recipe';

import { ContainerApp, ContainerGrid } from './global.styles'


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
    setRecipes(data.hits)
  }

  return (

    <ContainerApp>
      <div className="App">

        <form className="search-form">
          <input className="search-bar" type="text"/>
          <button className="search-button" type="submit">Search</button>
        </form>

        <ContainerGrid>
          {recipes.map(({recipe: {label, calories, image, ingredientLines}}) => (
            <Recipe 
              key={label}
              title={label}
              calories={calories}
              image={image}
              ingredientLines={ingredientLines}
            />
          ))}
        </ContainerGrid>

      </div>
    </ContainerApp>
    
  );
}

export default App;
