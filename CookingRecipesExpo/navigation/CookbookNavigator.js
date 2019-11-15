import {createStackNavigator} from 'react-navigation-stack';
import MyCookBook from '../components/MyCookBook';
import CookBookFolder from '../components/CookBookFolder';
import IndividualRecipes from '../components/IndividualRecipe.js'
import Course from '../components/Course';

    const CookBookNavigator =  createStackNavigator({
        CookBook : {screen: MyCookBook},
        Courses : {screen : CookBookFolder},
        RealCourses : {screen : Course},
        IndividualR : {screen : IndividualRecipes}
        },{initialRouteName: "CookBook"})

export default CookBookNavigator;