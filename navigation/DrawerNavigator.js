import { FlatList, Text } from "react-navigation"
import { useSelector } from "react-redux"
import { createDrawerNavigator } from 'react-navigation-drawer';

import IndividualRecipe from "../components/IndividualRecipe";

const myCustomComp = props => {
    const versionHistoryList = useSelector(state => state.versionsList.versionsList)

    return (
        <FlatList data={versionHistoryList} renderItem={(item) => {
            <Text>Item</Text>
        }} />
    )
}
const DrawerNavigator = createDrawerNavigator({
    IndividualRecipeDrawer: {
        screen: IndividualRecipe,
        navigationOptions: {
            drawerLabel: "Recipe"
        }
    }
},
    {
        drawerPosition: "right",
        drawerWidth: 400
    })

export default DrawerNavigator