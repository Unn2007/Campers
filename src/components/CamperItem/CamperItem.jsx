import { Icon } from "../../components/Icon/Icon.jsx";
import  PrimaryButton  from "../PrimaryButton/PrimaryButton.jsx";
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../../redux/campers/slice.js";
import {selectIsFavorite} from '../../redux/campers/selectors.js'
import {EquipmentItem} from '../EquipmentItem/EquipmentItem.jsx'
import css from "./CamperItem.module.css";

export const CamperItem = ({data}) => {
 
const {
  id,
  gallery,
  name,
  price,
  rating,
  reviews,
  location,
  description,
  AC:acEquipment,
  bathroom,
  kitchen,
  TV:tvEquipment,
  radio,
  refrigerator,
  microwave,
  gas,
  water,
  transmission,
  engine

} = data;
const favoriteCampers=useSelector(selectIsFavorite);
let isFavorite = favoriteCampers.includes(id);
console.log(isFavorite)
const imageLink=gallery[0].thumb;
const reviewsNumber = reviews.length;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buttonClick = ()=> {
    navigate(`${id}`);
  } 
  const heartClick = () => {
dispatch(setFavorite(id));
  }
  return (
    
    <div className={css.camperItem}>
      <img className={css.image} alt="campers foto" src={imageLink} />
      <div className={css.camperData}>
        <div className={css.camperHeader}>
          <h2 className={css.header}>{name}</h2>
          <p className={css.price}>{`\u20AC${price}.00`}</p>
          <button className={css.buttonHeart} type="button" onClick={()=>{heartClick()}}>
          <Icon
            width={26}
            height={24}
            href="icon-heart"
            className="iconheart"
            style={isFavorite ? { fill: "rgba(216, 67, 67, 1)" } : undefined}
          />
          </button>
        </div>
        <div className={css.reviewsLocation}>
          <Icon width={16} height={16} href="icon-star" className={css.iconStar} />
          <p className={css.rating}>{`${rating}(${reviewsNumber} Reviews)`}</p>
          <Icon width={16} height={16} href="icon-map" className={css.iconMap} />
          <p>{`${location}`}</p>
        </div>
        <p className={css.description}>{`${description}`}</p>
        <div className={css.equipmentList}>
        <EquipmentItem name={`${transmission}`} className={css.equipment} width={20} height={20} icon="icon-automatic" classNameIcon={css.equipmentIcon}/>
        <EquipmentItem name={`${engine}`} className={css.equipment} width={20} height={20} icon="icon-petrol" classNameIcon={css.equipmentIcon}/>
          {acEquipment&&<EquipmentItem name="AC" className={css.equipment} width={20} height={20} icon="icon-ac" classNameIcon={css.equipmentIcon}/>}
          {bathroom&&<EquipmentItem name="Bathroom" className={css.equipment} width={20} height={20} icon="icon-bathroom" classNameIcon={css.equipmentIcon}/>}
          {kitchen&&<EquipmentItem name="Kitchen" className={css.equipment} width={20} height={20} icon="icon-kitchen" classNameIcon={css.equipmentIcon}/>}
          {radio&&<EquipmentItem name="Radio" className={css.equipment} width={20} height={20} icon="icon-radio" classNameIcon={css.equipmentIcon}/>}
          {refrigerator&&<EquipmentItem name="Refrigerator" className={css.equipment} width={20} height={20} icon="icon-refrigerator" classNameIcon={css.equipmentIcon}/>}
          {tvEquipment&&<EquipmentItem name="TV" className={css.equipment} width={20} height={20} icon="icon-tv" classNameIcon={css.equipmentIcon}/>}
          {microwave&&<EquipmentItem name="Microwave" className={css.equipment} width={20} height={20} icon="icon-microwave" classNameIcon={css.equipmentIcon}/>}
          {gas&&<EquipmentItem name="Gas" className={css.equipment} width={20} height={20} icon="icon-gas" classNameIcon={css.equipmentIcon}/>}
          {water&&<EquipmentItem name="Water" className={css.equipment} width={20} height={20} icon="icon-water" classNameIcon={css.equipmentIcon}/>}


        </div>
        
       
          <PrimaryButton  handleClick={buttonClick}>Show more</PrimaryButton>
     
      </div>
    </div>
  );
};


