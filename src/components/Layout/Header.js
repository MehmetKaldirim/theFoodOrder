import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div children = {classes['main-image']}>
            <img src = {mealsImage} alt = "acim ac ayiptir"/>
        </div>


    </Fragment>
    );
};

export default Header;