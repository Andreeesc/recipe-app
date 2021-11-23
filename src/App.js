import { useEffect, useState } from 'react';
import { Recipe } from './components/Recipe/Recipe';

import { ContainerApp, ContainerGrid } from './global.styles'


function App() {
  const APP_ID = 'abe2d356'
  const APP_KEY = '39bd637979d5e8fa7f591076ef15972b'

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  useEffect(() => {
    getRecipes();
  }, [query])

  return (

    <ContainerApp>
      <div className="App">

        <form className="search-form" onSubmit={getSearch}>
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
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
