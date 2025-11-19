import React,{useEffect,useState} from "react";
import "./Page.css";
import { useDispatch } from 'react-redux';
import { fetchfood } from "../../reducers/getAll";
import {deleteOne} from "../../reducers/deleteOne"
import {updateOne} from "../../reducers/updateOne"
import { fetchOne } from "../../reducers/getOne";
import { TiEdit } from "react-icons/ti";
import { MdDeleteOutline } from "react-icons/md";
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';

const Page = () => {
  const [food,setFood]=useState([])
  const [edit,setEdit]=useState({})

  const getOne=async(id)=>{
    try {
      const result=await dispatch(fetchOne(id))
      setEdit(result.payload)
    } catch (error) {
      console.log(error);
      
    }
  }

  

  const [anchor, setAnchor] = useState(null);

  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? 'simple-popup' : undefined;

  

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

    

  return (<>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Catégorie</th>
            <th>Repas</th>
            <th>Image</th>
            <th>Prix</th>
            <th>Metre a jour</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        {food.map(e=>{
          return<tbody key={e.id}>
          <tr >
            <td>
              {e.categorie}
            </td>
            <td >
              {e.detail}
            </td>
            <td>
              <img
                className="table-image"
                src={e.imgUrl}
                alt="Pizza"
              />
            </td>
            <td style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10}}>
            <p>{e.price} $</p>
            </td>
            <td>
              <TiEdit style={{cursor:"pointer"}} onClick={(event)=>{handleClick(event),getOne(e.id)}} size={30}/>
              
            </td>
            <td onClick={()=>{del(e.id),fetchFood()}}>
              <MdDeleteOutline style={{cursor:"pointer"}} size={30}/>
            </td>
            
          </tr>
        </tbody>
        })}
        
      </table>
    </div>
    <div>
    <BasePopup  id={id} open={open} anchor={anchor}>
    <form className="meal-form">
  <label className="meal-label">Categorie de Repas:</label>
  <select className="meal-select" id="">
    <option value="">{edit.categorie}</option>
  </select>
  
  <label className="meal-label" >Nom de Repas:</label>
  <input className="meal-input" type="text" id="nomDeRepas" name="detail"  defaultValue={edit.detail || ""} />
  
  <label className="meal-label">Image de Repas:</label>
  <input className="meal-file" id="imageDeRepas" type="file" style={{cursor:"pointer"}}/>
  
  <label className="meal-label">Prix de Repas:</label>
  <input className="meal-input" type="text" id="prixDeRepas" name="price"  defaultValue={edit.price || ""} />
  
  <label className="meal-label">Details de Repas:</label>
  <textarea className="text-aria-input"  type="text" name="productDetails"  defaultValue={edit.productDetails || ""}/>
  
  <button className="meal-button" >Enregistrer</button>
</form>

              </BasePopup>
    </div>
  </>
  );
};

export default Page;
