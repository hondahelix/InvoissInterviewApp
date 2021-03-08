import { StyleSheet } from 'react-native';
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';

const HomeScreenStyles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
const FeatureOneStyles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img:{
        flex:1,
        alignItems: 'stretch',
        height: 200,

    },
    nav:{
        position: 'absolute',
        left: 0,
        right: 0,
        flex:2,
        height: 130,
        zIndex: 10,
        backgroundColor: 'white',
    },
    section:{
        height: 500,
        borderWidth: 1,
        borderColor: 'gray',
    },
    navSection:{
        marginLeft: 10,
        padding: 10,

    },
    navWrapper:{
        position: 'relative',
        top: 45,
    },
    storeInfo:{
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10,
    },
    heading:{
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        marginTop: 10,
    },
    bar:{
        padding: 10,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 20,
        position: 'relative',
        top: 40,
    }
});
const FeatureTwoStyles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    textBar:{
        backgroundColor: 'black',
        width: '100%',
        borderTopColor: 'white',
        borderWidth: .25,
        borderStyle: 'solid',
    },
    textInput:{
        color: '#FFFFFF',
        opacity: 1,
        fontWeight: 'normal',
        textShadowColor: 'white',
        fontSize: 15,
        padding: 10,
    },
    message:{
        color: "white",
        fontSize: 15,
        padding: 10,
    }
});
const FeatureThreeStyles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export { HomeScreenStyles, FeatureOneStyles, FeatureTwoStyles, FeatureThreeStyles };