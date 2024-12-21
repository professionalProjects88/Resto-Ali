import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { fetchfood } from "../../reducers/getAll";
import { useNavigate } from 'react-router-dom';
const Page = () => {
  const navigate = useNavigate();
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

  return (<>
    <div className='searchBarContainer'>
    <input className='searchBar' onChange={handleOnChange} placeholder='Cherchez' type="text" />
    </div>
    <div className='mainFoodContainer'>
      {filteredFood.map((e) => {
        if(e.categorie==="Dessert"){
          return<div key={e.id} className='foodCards' onClick={()=>navigate(`/details/${e.id}`)}>
          <img className='cardsImg' src={e.imgUrl} alt={e.detail} />
          <h5 className='categorie-name'>{e.categorie} :</h5>
          <h2 className='detail-name'>{e.detail}</h2>
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
