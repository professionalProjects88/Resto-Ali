import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { fetchfood } from "../../reducers/getAll";
const Page = () => {
  const dispatch = useDispatch();
  const [food, setFood] = useState([]);
  const [query, setQuery] = useState("");

  const handleOnChange=(e)=>{
    setQuery(e.target.value.toLowerCase());
  }
  const filteredFood = food.filter((item) => 
    item.categorie.toLowerCase().includes(query) || 
    item.detail.toLowerCase().includes(query)
  );

  const fetchFood = async () => {
    try {
      const result = await dispatch(fetchfood());
      setFood(result.payload);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <>
    <div className='searchBarContainer'>
    <input className='searchBar' onChange={handleOnChange} placeholder='Recherche' type="text" />
    </div>
    <div className='mainFoodContainer'>
      {filteredFood.map((e) => {
        if(e.categorie==="Salade"){
          return<div key={e.id} className='foodCards'>
          <img className='cardsImg' src={e.imgUrl} alt={e.detail} />
          <h2 className='foodName'>{e.categorie} {e.detail}</h2>
          <h1 className='prix'>{e.price.toFixed(2)} €</h1>
        </div>
        }
        
      }
      )}
    </div>
    </>
  )
}

export default Page
