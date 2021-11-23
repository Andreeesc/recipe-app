import { Container } from "./recipe.styles"

export const Recipe = ({title, calories, image, ingredientLines}) =>{
  return (
    <Container>
      <h2>{title} <span>{Math.round(calories)} Cal</span></h2>
      <img src={image} alt={title} title={title}/>
      <ul>
        {
          ingredientLines.map(ingredient => (
            <li>{ingredient}</li>
          ))
        }
      </ul>
    </Container>
  )
}