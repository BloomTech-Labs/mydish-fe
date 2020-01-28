import React, { useEffect } from "react"
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from "react-native"
import { useSelector, useDispatch } from "react-redux"


import { fetchAllVersionHistory } from "../store/version-control/versionControlActions"
import formatdate from "../utils/helperFunctions/formatdate"

const VersionHistoryList = props => {
    const versionList = useSelector(state => state.versionsList.versionsList)
    const dispatch = useDispatch()

    const id = props.navigation.getParam("parentId", "parentId not passed");

    async function fetchAllVersions(id) {
        await dispatch(fetchAllVersionHistory(id))

    }

    useEffect(() => {
        fetchAllVersions(id)

    }, [id])

    return (

        <View>

            < FlatList data={versionList} keyExtractor={(item) => item.revision_number.toString()} renderItem={({ item }) => {

                {/*Format date to Month, Day, Year, H:MM AM/MP */ }
                formattedDate = formatdate(item.date_modified)

                return (
                    <TouchableOpacity
                        onPress={() => {
                            // getRecipeByRevisionNumber(item.changes.id, item.id)
                            props.navigation.navigate("IndividualR", {
                                recipeID: item.changes.id,
                                revisionID: item.id,
                                revisionNum: item.revision_number
                            })
                        }
                        }>


                        < View style={styles.versionView} >
                            <Text style={styles.label}>Version {item.revision_number}. </Text>
                            <Text>{formattedDate.toString()}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.commentLabel}>Author Comment: </Text>
                                <Text>{item.changes.author_comment}</Text>
                            </View>
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
    commentLabel: {
        fontWeight: 'bold'
    }
})

VersionHistoryList.navigationOptions = {
    headerTitle: "Version History"
}


export default VersionHistoryList

