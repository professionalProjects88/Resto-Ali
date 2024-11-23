import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchfood } from "../../reducers/getAll";
import './page.css';

const Page = () => {
  const dispatch = useDispatch();
  const [food, setFood] = useState([]);

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
    <div className='mainFoodContainer'>
      {food.map((e) => (
        <div key={e.id} className='foodCards'>
          <img className='cardsImg' src={e.imgUrl} alt={e.detail} />
          <h2 className='foodName'>{e.categorie} {e.detail}</h2>
          <h1 className='prix'>{e.price.toFixed(2)} €</h1>
        </div>
      ))}
    </div>
  );
};

export default Page;
