import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Animated, TouchableOpacity} from 'react-native';
import { FeatureOneStyles as styles } from './styles';
import data from "../Data/FeatureOneData.json";

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
            style = {styles.img}
            source={{uri:"https://s3-media0.fl.yelpcdn.com/bphoto/LpVJS1JQ5thyPRCT99mMCQ/o.jpg"}}
            />
            : <View style ={styles.nav}> 
                <Text style={styles.bar}>Dumpling Time</Text>
                    <View style={styles.navWrapper}>
                        <Animated.Text numberOfLines={1} style={ {flexWrap: 'wrap'}, {transform: [{translateX: slide}]}
                                }>{data.menu.map((item, index)=>
                            <View style = {styles.navSection}>
                                <Text key = {index}>{item}</Text>
                            </View>
                        
                        )}</Animated.Text>
                    </View>
            </View>
            }
            <View>
                <Text style={styles.heading}>Dumpling Time</Text>
            </View>
            <View>
                <Text style={styles.storeInfo}>Store Info</Text>
                <Text style={{alignSelf:'center', padding: 10,}}>{data.businesses.location.display_address}</Text>
            </View>
            {data.menu.map((item, index) =>
                <View key = {index} style = {styles.section}>
                    <Text style={styles.heading}>{item}</Text>
                </View>
            )}
        </ScrollView>
        </>
    );
}


export default FeatureOne;