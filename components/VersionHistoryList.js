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

        <View>

            < FlatList data={versionList} keyExtractor={(item) => item.revision_number.toString()} renderItem={({ item }) => {
                console.log('each item', item)
                {/*Format date to Month, Day, Year, H:MM AM/MP */ }
                const modifiedDate = new Date(item.date_modified)
                const month = modifiedDate.toLocaleString('default', { month: 'long' })
                const curr_date = modifiedDate.getDate()
                const curr_year = modifiedDate.getFullYear()

                const curr_hour = modifiedDate.toLocaleString('en-US', {
                    hour: '2-digit', minute: '2-digit', hour12: true
                })

                const formattedDate = month + ' ' + curr_date + "," + curr_year + ' ' + curr_hour
                console.log(month + ' ' + curr_date + ", " + curr_year + ' ' + curr_hour);


                console.log('modifieddate', modifiedDate.toDateString())
                console.log('this is the author comment', item.author_comment)
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
                            <Text style={styles.label}>Version {item.revision_number}. </Text>
                            <Text>{}{formattedDate.toString()}</Text>
                            <Text>{item.author_comment}</Text>
                        </View >
                    </TouchableOpacity >

                )
            }} />

        </View>

    )
}

const styles = StyleSheet.create({
    versionView: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        margin: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
    ,
    label: {
        fontSize: 18,
        marginBottom: 15,
        fontWeight: 'bold'
    },
})

VersionHistoryList.navigationOptions = {
    headerTitle: "Version History"
}


export default VersionHistoryList

