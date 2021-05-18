/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const DEVICE_WIDTH = Dimensions.get('window').width;

function App() {

  const scrollRef = useRef(); 
  const [height1, setHeight1] = useState(null);
  const [height2, setHeight2] = useState(null);
  const [height3, setHeight3] = useState(null);
  const [height4, setHeight4] = useState(null);

  const array = [
    {
      id:1,
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id:2,
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id:3,
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id:4,
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id:5,
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]

  return (
    <SafeAreaView style={{backgroundColor:"#FFFFFF", paddingHorizontal:10}}>
      <StatusBar barStyle='dark-content' backgroundColor={'#FFFFFF'} />
      <ScrollView
        style={{marginTop:20}}
        ref={scrollRef}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.appViews}>
          <Text style={styles.appQuickLinksText}>
            {"Quick Links"}
          </Text>
          <TouchableOpacity onPress={() => scrollRef.current.scrollTo({ y: height1, animated: true})}>
            <Text style={styles.appTexts}>
              {"What is Lorem Ipsum?"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => scrollRef.current.scrollTo({ y: height2, animated: true})}>
            <Text style={styles.appTexts}>
              {"Where can I get some?"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => scrollRef.current.scrollTo({ y: height3, animated: true})}>
            <Text style={styles.appTexts}>
              {"Why do we use it?"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => scrollRef.current.scrollTo({ y: height4, animated: true})}>
            <Text style={styles.appTexts}>
              {"Where does it come from?"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.appDivider}/>
        <View 
          onLayout={(event) => {
            const layout = event.nativeEvent.layout;
            setHeight1(layout.y);
            console.log('height:', layout.height);
            console.log('width:', layout.width);
            console.log('x:', layout.x);
            console.log('y:', layout.y);
          }} 
          style={styles.appViews}>
          <Text style={styles.appViewText}>
            {"What is Lorem Ipsum?"}
          </Text>
          <Text style={styles.appViewSubText}>
            {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
          </Text>
        </View>
        <View style={styles.appDivider}/>
        <View 
          onLayout={(event) => {
            const layout = event.nativeEvent.layout;
            setHeight2(layout.y);
            console.log('height:', layout.height);
            console.log('width:', layout.width);
            console.log('x:', layout.x);
            console.log('y:', layout.y);
          }}  
          style={styles.appViews}>
          <Text style={styles.appViewText}>
            {"Where can I get some?"}
          </Text>
          {array.length !== 0 ?
            array.map((l, i) => (
              <ListItem key={l.id}  containerStyle={styles.appListContainer}>
              <Avatar title={`${l.id}`} titleStyle={styles.appAvatar} containerStyle={styles.appAvatarContainer} />
              <ListItem.Content>
                  <ListItem.Title style={styles.appTitle}>{l.text}</ListItem.Title>
              </ListItem.Content>
              </ListItem>
          )) : null
          } 
        </View>
        <View style={styles.appDivider}/>
        <View 
          onLayout={(event) => {
            const layout = event.nativeEvent.layout;
            setHeight3(layout.y);
            console.log('height:', layout.height);
            console.log('width:', layout.width);
            console.log('x:', layout.x);
            console.log('y:', layout.y);
          }}  
          style={styles.appViews}>
          <Text style={styles.appViewText}>
            {"Why do we use it?"}
          </Text>
          <Text style={[styles.appViewSubText,{marginBottom:20}]}>
            {"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
          </Text>
        </View>
        <View  style={styles.appDivider}/>
        <View 
          onLayout={(event) => {
            const layout = event.nativeEvent.layout;
            setHeight4(layout.y);
            console.log('height:', layout.height);
            console.log('width:', layout.width);
            console.log('x:', layout.x);
            console.log('y:', layout.y);
          }} 
          style={styles.appViews}>
          <Text style={styles.appViewText}>
            {"Where does it come from?"}
          </Text>
          <Text style={styles.appViewSubText}>
            {"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appViews:{
    marginTop:20
  },
  appQuickLinksText:{
    fontWeight:'700',
    fontStyle:'normal',
    fontSize:24,
    lineHeight:30,
    justifyContent:'center',
    color:'#018786',
    marginBottom:20,
  },
  appTexts:{
    fontWeight:'500',
    fontStyle:'normal',
    fontSize:14,
    lineHeight:19,
    justifyContent:'center',
    color:'#3FADA0',
    marginBottom:10,
    textDecorationLine:'underline'
  },
  appDivider:{
    borderBottomWidth: 1,
    borderBottomColor: '#AEB0B5',
    width: DEVICE_WIDTH - 20,
    marginVertical:10,
  },
  appViewText:{
    fontWeight:'500',
    fontStyle:'normal',
    fontSize:18,
    lineHeight:20,
    justifyContent:'center',
    color:'#3FADA0',
    marginBottom:10,
  },
  appViewSubText:{
    fontWeight:'400',
    fontStyle:'normal',
    fontSize:14,
    lineHeight:21,
    justifyContent:'center',
    color:'#AEB0B5',
  },
  appListContainer:{
    width: DEVICE_WIDTH, 
    backgroundColor:'#FFFFFF',
  },
  appAvatar:{
      color:'#FFFFFF', 
      fontSize:16, 
      fontStyle:'normal', 
      fontWeight:'700', 
      textAlign:'center',
  },
  appAvatarContainer:{
      width:35, 
      height:35, 
      borderRadius:50, 
      backgroundColor:'#3FADA0',
  }, 
  appTitle:{
      fontSize:14, 
      fontStyle:'normal', 
      fontWeight:'400', 
      lineHeight:21, 
      color:'#AEB0B5',
  },
});

export default App;
