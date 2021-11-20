export const Recipe = ({title, calories, image}) =>{
  return (
    <div>
      <h1>{title}</h1>
      <p>{Math.round(calories)}</p>
      <img src={image} alt={title} title={title}/>
    </div>
  )
}