import { Navigation } from '../Navigation/Navigation';
import Icons from '../../assets/icons/sprite.svg';
import css from './AppBar.module.css';

export const AppBar = () => {
  

  return (
    <header className={css.header}>
      <svg className={css.iconStat} width="136" height="16">
          <use href={Icons + '#icon-logo'} ></use>
        </svg>
      
      <Navigation />
      
    </header>
  );
};
