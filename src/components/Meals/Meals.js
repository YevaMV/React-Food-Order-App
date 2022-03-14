import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import { Fragment } from 'react/cjs/react.production.min';

function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}

export default Meals;
