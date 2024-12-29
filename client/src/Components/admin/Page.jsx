import React,{useEffect,useState} from "react";
import "./page.css";
import { useDispatch } from 'react-redux';
import { fetchfood } from "../../reducers/getAll";
import {deleteOne} from "../../reducers/deleteOne"
import {updateOne} from "../../reducers/updateOne"
import { TiEdit } from "react-icons/ti";
import { FaRegSave } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const Page = () => {
  const [food,setFood]=useState([])
  const [edit,setEdit]=useState({
    imgUrl:"",
    categorie:"",
    detail:"",
    productDetails:"",
    price:null
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const dispatch=useDispatch()
  const fetchFood = async () => {
      try {
        const result = await dispatch(fetchfood());
        setFood(result.payload);
      } catch (err) {
        console.log("Error:", err);
      }
    };
    useEffect(()=>{fetchFood()
      console.log(edit,"de,oif");
      
    },[])

    const del = async(id)=>{
      try {
        const result = await dispatch(deleteOne(id))
        if (result.payload) {
          await fetchFood(); 
        }
      } catch (error) {
        console.log(error);
        
      }
    }

    const handleSave = async()=>{
      try {
        const result = await dispatch(updateOne(id))
      } catch (error) {
        
      }
    }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Catégorie</th>
            <th>Repas</th>
            <th>Image</th>
            <th>Prix</th>
            <th>Détails</th>
            <th>
            <FaRegSave style={{cursor:"pointer"}} size={25}/>
            </th>
          </tr>
        </thead>
        {food.map(e=>{
          return<tbody key={e.id}>
          <tr >
            <td>
              <select style={{height:35,width:80,cursor:"pointer"}}  id="category">
                <option value="pizza">{e.categorie}</option>
              </select>
            </td>
            <td >
              <input className="repasInput" onChange={handleChange} type="text"  defaultValue={e.detail}/>
            </td>
            <td>
              <img
                className="table-image"
                src={e.imgUrl}
                alt="Pizza"
              />
            </td>
            <td style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10}}>
            <input className="pixInput" type="text" onChange={handleChange}   defaultValue={e.price} />
            <p>$</p>
            </td>
            <td>
              <TiEdit style={{cursor:"pointer"}} size={30}/>
            </td>
            <td onClick={()=>{del(e.id),fetchFood()}}>
              <MdDeleteOutline style={{cursor:"pointer"}} size={30}/>
            </td>
            
          </tr>
        </tbody>
        })}
        
      </table>
    </div>
  );
};

export default Page;
