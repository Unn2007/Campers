import RatingList from '../../components/RatingList/RatingList.jsx';
import css from './ReviewsItem.module.css';
import {capitalizeFirstLetter,getFirstLetter} from '../../utils/utils.js';

export const ReviewsItem = ({name,text,rating}) => {
    return (
        <div className={css.wrapper}>
            <div>
                <span>{capitalizeFirstLetter(getFirstLetter(name))}</span>
                <div>
                <p>{capitalizeFirstLetter(name)}</p>
                <RatingList rating={rating}/>
                </div>
               

            </div>
            <p>${text}</p>

        </div>
    )
}