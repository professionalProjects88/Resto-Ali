import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchfood} from "../../reducers/getAll"
import './page.css'
const Page = () => {

    const dispatch = useDispatch()
    
    const {food,setFood}=useState([])

    const fetchFood=()=>{
        dispatch(fetchfood())
        .then(data=>{
            setFood(data.payload);
            
        })
        .catch(err=>console.log("error : ",err))
    }
    useEffect(
        fetchFood,
        console.log(food)
        
        ,[])
    

  return (
    <div className='mianFoodContainer'>
      <div className='foodCards'>

      </div>
      <div className='foodCards'>

      </div>
      <div className='foodCards'>

      </div>
      <div className='foodCards'>

      </div>
    </div>
  )
}

export default Page
