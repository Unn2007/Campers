import {  useNavigate } from 'react-router-dom';
import DocumentTitle from '../../components/DocumentTitle';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton.jsx';
import css from './HomePage.module.css'

export default function HomePage() {
  const navigate = useNavigate();
  
  const buttonClick = ()=> {
    navigate("/catalog");
  } 
    return (
      <section className={css.homePage}>
        <div className={`${css.container} container`}>
        <DocumentTitle>Home</DocumentTitle>
  
        <h1 className={css.mainHead}>Campers of your dreams</h1>
        <h2 className={css.secondHead}>You can find everything you want in our catalog</h2>
        
            <PrimaryButton handleClick={buttonClick}>View Now</PrimaryButton>
            </div>

      </section>
    );
  }
  