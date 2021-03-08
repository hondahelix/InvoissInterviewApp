import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Animated, TouchableOpacity} from 'react-native';
import { FeatureOneStyles as styles } from './styles';
import data from "../Data/FeatureOneData.json";

const style = StyleSheet.create({
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
const FeatureOne = ({ navigation }) => {
    //const scrollY = new Animated.Value(0);
    const [toMove, setToMove] = React.useState(0);
    const [yState, setYState] = React.useState(true);
    const slide = React.useState(new Animated.Value(0))[0];
    const moveSlide = () =>{
        console.log(toMove)
        Animated.timing(slide,{
            // see if i can set it to -toMove
            toValue: -toMove,
            duration: 1000,
            useNativeDriver: true,
        }).start()
    }

    const handleScroll = (e) =>{
        if(e.nativeEvent.contentOffset.y>50 && yState===true){
            setYState(false);
            setToMove(0);
        }
        else if(e.nativeEvent.contentOffset.y<50 && yState===false){
            setYState(true);
        }
        // one for other direction
        setToMove(500/(2250/((e.nativeEvent.contentOffset.y+1) +1))); //->+1 to make sure not undefinded
        // use pan 
        moveSlide();
        
    }
    return (
        <>
        <ScrollView 
        style={{flex:1}}
        scrollEventThrottle={16}
        onScroll = {(e)=> handleScroll(e)}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        >
            {yState
            ?<Image 
            style = {style.img}
            source={{uri:"https://s3-media0.fl.yelpcdn.com/bphoto/LpVJS1JQ5thyPRCT99mMCQ/o.jpg"}}
            />
            : <View style ={style.nav}> 
                <Text style={style.bar}>Dumpling Time</Text>
                    <View style={style.navWrapper}>
                        <Animated.Text numberOfLines={1} style={ {flexWrap: 'wrap'}, {transform: [{translateX: slide}]}
                                }>{data.menu.map((item, index)=>
                            <View style = {style.navSection}>
                                <Text key = {index}>{item}</Text>
                            </View>
                        
                        )}</Animated.Text>
                    </View>
            </View>
            }
            <View>
                <Text style={style.heading}>Dumpling Time</Text>
            </View>
            <View>
                <Text style={style.storeInfo}>Store Info</Text>
                <Text style={{alignSelf:'center', padding: 10,}}>{data.businesses.location.display_address}</Text>
            </View>
            {data.menu.map((item, index) =>
                <View key = {index} style = {style.section}>
                    <Text style={style.heading}>{item}</Text>
                </View>
            )}
        </ScrollView>
        </>
    );
}


export default FeatureOne;