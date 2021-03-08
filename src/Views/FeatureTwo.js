import React from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, FlatList, Platform} from 'react-native';
import { FeatureTwoStyles as styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
//import data from '../Data/FeatureTwoData.json';

const FeatureTwo = ({ navigation }) => {
    const [content, setContent] = React.useState([]);
    const [message, setMessage] = React.useState([]);
    const handleText = (e) =>{
        setContent([...content, {type: 'text', content: message}]);
    }
    const handleContent = (e) =>{
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
          })
          .then(r => {
            this.setState({ photos: r.edges });
          })
          .catch((err) => {
             //Error Loading Images
          });
    }
    return (
         <View style={styles.MainContainer}>
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios'?"padding":'height'}
                keyboardVerticalOffset={100}
                style={{width:'100%'}}
            >
                <FlatList
                    data = {content}
                    renderItem = {({item, index}) => 
                        <>
                        {item.type==="text" && <Text style = {styles.message} key = {index}>{item.content}</Text>}
                        </>
                    }/>
            <View style = {styles.textBar}>
                    <TextInput 
                    placeholder = "Jot something down"
                    style = {styles.textInput}
                    multiline
                    clearTextOnFocus = {true}
                    inlineImageLeft='search_icon'
                    placeholderTextColor="#FFFFFF"
                    keyboardType ={'default'}
                    onChangeText = {setMessage}
                    />
                    <View style={{flexDirection: 'row-reverse'}}>
                        <Icon 
                        name="add" 
                        type="ionicon" 
                        size={26} 
                        color ="#887700"
                        onPress={(e)=>handleContent(e)}
                        />
                        <Icon 
                        name="send" 
                        type="ionicon" 
                        size={26} 
                        color ="#887700"
                        onPress={(e)=>handleText(e)}
                        />
                    </View>
            </View>
            </KeyboardAvoidingView>
        </View>
    );
}


export default FeatureTwo;