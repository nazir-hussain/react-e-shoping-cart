import list from '../Data'
import Card from './Card'
import '../styles/Shop.css'

const Shop =({handleClick})=> {
  

  return (
    <section>
        {list.map((item)=>(
            <Card key={item.id} item={item} handleClick={handleClick}/>
        ))}
    </section>
  )
}

export default Shop