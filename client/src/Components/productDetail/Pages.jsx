import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchOne } from '../../reducers/getOne';
import "./page.css"

const Pages = () => {
  const { foodId } = useParams();
  const [food, setFood] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await dispatch(fetchOne(foodId));
        setFood(result.payload);
      } catch (error) {
        console.error('Error fetching food:', error);
      }
    };

    fetchData();
  }, [foodId]);

  return (
    <div className='detailContainer'>
      {food ? (
        <div >
        <img className='imageDetail' src={food.imgUrl}  alt="" />
        
        </div>
      ) : (
        <div></div>
      )}
      {food ? (
        <div >
        <h1  className='foodName'>{food.categorie} {food.detail}</h1>
        <br />
        <div className='pagargraphDetailContainer'>
        <h3 style={{color:"red"}}>Details :</h3>
        <p className='paragrapheDetail'>{food.productDetails}</p>
        <h2 className='price'>Prix : {food.price} €</h2>
        </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Pages;