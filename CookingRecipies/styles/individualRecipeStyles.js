import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: '#363838',
        fontWeight: 'bold', 
        marginTop: 8,
        marginBottom: 12,
        marginLeft: 17,
        //textAlign: 'center'
    },
    likes: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#6B6F70',
        borderBottomColor: '#6B6F70',
        paddingBottom: 25,
        paddingTop: 25,
        marginBottom: 16,
    },
    tags: {
        fontSize: 14,
        color: '#363838',
        fontWeight: '500',
        marginLeft: 17,
        marginBottom: 8,
    },
    individualTags: {
        fontSize: 14,
        color: '#363838',
        fontWeight: '500',
    },
    tagBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    editButton: {
        backgroundColor: '#8FCC70',
        borderRadius: 50,
        width: 25,
        height: 25,
    }
})

module.exports = styles