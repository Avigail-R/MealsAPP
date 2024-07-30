import {Text, View, StyleSheet} from "react-native";

function Subtitle({children}: {children: string}) {
    return <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{children}</Text>
    </View>
}
export default Subtitle;
const styles = StyleSheet.create({
    subTitle: {
        fontSize: 18,
        color: '#e2b497',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTitleContainer: {
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        margin: 4,
        marginHorizontal: 12,
        marginVertical: 4
    }
});