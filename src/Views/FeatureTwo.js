import React from 'react';
import { Text, View, Image, TextInput, KeyboardAvoidingView, FlatList, Platform, Dimensions} from 'react-native';
import { FeatureTwoStyles as styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';


const FeatureTwo = ({ navigation }) => {
    const [content, setContent] = React.useState([]);
    const [message, setMessage] = React.useState('');
    const windowHeight = Dimensions.get('window').height;
    const handleText = (e) =>{
        setContent([...content, {type: 'text', content: message}]);
    }
    const handleContent =  (e) =>{
        let options = {
            title: 'You can choose one image',
            mediaType: 'photo',
            maxWidth: 256,
            maxHeight: 256,
            storageOptions: {
              skipBackup: true
            }
          };
          ImagePicker.showImagePicker({mediaType: 'photo'}, (response) =>{
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                const source = { uri: response.uri };
                console.log(source)
                //setContent([...content, {type: 'photo', content: source.uri}]);
            }
        });
    }
    return (
         <View style={styles.MainContainer}>
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios'?"padding":'height'}
                style={{width:'100%'}}
            >
                <View style={{width:'100%', height:windowHeight-200}}>
                    <FlatList

                        data = {content}
                        renderItem = {({item, index}) => 
                            <>
                            {item.type==="text" && <Text style = {styles.message} key = {index}>{item.content}</Text>}
                            {item.type==="photo" && <Image style = {styles.photo} key = {index} source={{uri:item.content}}></Image>}
                            </>
                        }/>
                </View>
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