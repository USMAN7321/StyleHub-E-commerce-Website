import { useDispatch, } from "react-redux";
import { BagActions }  from "../store/BagSlice";

function Homeitem( { item } ) {

  let dispatch = useDispatch();
  

  
  return (
    <>
     
        <div  className="item1">
      <span  className="rating">  {item.rating.stars} ⭐ | <span  className="view">   {item.rating.count}</span></span>
      <img
        src= {item.image}
        alt="" />
      <div    className="name"><span>  {item.item_name}</span></div>
      <div  className="iteminfo"><span>  {item.company}</span></div>
      <div  className="price"><span  className="current">Rs.  {item.current_price}</span> <span  className="old">Rs.   {item.original_price}</span> <span  className="discount">
            {item.discount_percentage}%OFF
        </span></div>
      <button  className="addcart btn btn-outline-success" data-id={item.id} onClick={()=>dispatch(BagActions.addTobag(item))}>Add to Bag</button>
      
    </div>
    </>
  );
}
export default Homeitem;
