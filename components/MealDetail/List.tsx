import {Text, View, StyleSheet} from "react-native";

function List({data}: {data: string[]}) {
    return data.map(dataPoint =>
        <View style={style.listItem} key={dataPoint}>
            <Text style={style.ItemText} >{dataPoint}</Text>
        </View>
    )
}
export default List;
const  style = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
    },
    ItemText: {
        color: '#351401',
        textAlign: 'center',
        
      
    }
});