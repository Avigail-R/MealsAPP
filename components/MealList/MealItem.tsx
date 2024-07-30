import { Text, View, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MealDetails from "../MealDetails";
import {RootStackParamList} from "../../App";


type MealItemProps = {
    id: string,
    title: string,
    imageUrl: string,
    duration: number,
    complexity: string,
    affordability: string
};


function MealItem(props: MealItemProps) {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    function pressHandler(){
        navigation.navigate('MealDetail', { mealId: props.id });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) =>
                    pressed ? styles.buttonPressed : null
                }
                onPress={pressHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{ uri: props.imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{props.title}</Text>
                    </View>
                   <MealDetails duration={props.duration} complexity={props.complexity} affordability={props.affordability} />
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: 'auto',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
   
    buttonPressed: {
        opacity: 0.5
    }
});
