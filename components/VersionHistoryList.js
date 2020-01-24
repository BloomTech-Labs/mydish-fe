import React from "react"
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from "react-native"
import { useSelector, useDispatch } from "react-redux"


import IndividualRecipe from "../components/IndividualRecipe";
import { fetchVersionByRevisionId } from "../store/version-control/versionControlActions"

const VersionHistoryList = props => {
    const versionList = useSelector(state => state.versionsList.versionsList)
    const dispatch = useDispatch()
    // console.log('this is the versionHistoryList', versionList)

    const getRecipeByRevisionNumber = async (id, revisionId) => {
        console.log('id and revision#', id, revisionId)
        try {

            const res = await dispatch(fetchVersionByRevisionId(id, revisionId))
            console.log('res', res)
        } catch (error) {
            console.log(error)
            throw new Error('error getting recipe by revision #')
        }
    }

    // console.log('this is an items changes', item.date_modified)
    // getRecipeByRevisionNumber(item.changes.id, item.id)

    return (
        <FlatList data={versionList} keyExtractor={(item) => item.revision_number.toString()} renderItem={({ item }) => {
            return (
                <TouchableOpacity
                    onPress={() => {
                        // getRecipeByRevisionNumber(item.changes.id, item.id)
                        props.navigation.navigate("IndividualR", {
                            recipeID: item.changes.id,
                            revisionID: item.id
                        })
                    }
                    }>
                    < View style={styles.versionView} >
                        <Text>Version {item.revision_number}. {}{item.date_modified.toString()}</Text>
                    </View >
                </TouchableOpacity>

            )
        }} />

    )
}

const styles = StyleSheet.create({
    versionView: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
})

VersionHistoryList.navigationOptions = {
    headerTitle: "Version History"
}


export default VersionHistoryList

