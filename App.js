/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList
} from 'react-native';

import { Button,CheckBox,Divider,Header,Input,Icon,Avatar,Card } from 'react-native-elements';

var DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '4',
    title: '4 Item',
  },
  {
    id: '5',
    title: '5 Item',
  },
  {
    id: '6',
    title: '6 Item',
  },
  {
    id: '7',
    title: '7 Item',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const activities=[
  {
    name: 'Eat'
  },
  {
    name: 'Ride'
  },
  {
    name: 'Coffee'
  },
  {
    name: 'Fitness'
  },
  {
    name: 'Music'
  }
]

function toDo(){
  activities.map((val,index)=>{
    return (
      <View
      style={{
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:10,
        backgroundColor:'rgba(255,255,255,.4)',
        borderRadius:8,

        elevation: 3,
      }}
      >
        <Icon name='rowing' size={35} reverse color='#639a67'/>
        <View style={{flex:1,justifyContent:'center',paddingHorizontal:10}}>
          <Text style={{fontSize:30}}>
            {val.name}
          </Text>

        </View>
      </View>
    )
  })
  
}

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const App= () => {

  const onRefresh1=()=>{
    setrefresh(true)
    console.log('masuk refresh')
    setTimeout(() => {
      console.log('selesai')
      DATA.push({
        id:'100',
        title:'isi seratus'
      })
      setrefresh(false)
    }, 3000);
  }
  const [refresh,setrefresh]=useState(false)
  const [checked,setchecked]=useState(false)
  const [visible,setvisible]=useState(true)


  return (
    
    <View
      style={{
        flex:1,
        fontFamily:'Iowan Old Style'
      }}
    >
    <ScrollView>

      {/* <Header 
        containerStyle={{padding:0}}
        leftComponent={{ icon: 'menu', color: '#fff'}}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff'} }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      /> */}

      {/* <Header
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{ text: 'Dashboard', style: { color: '#fff' } }}
          outerContainerStyles={{ backgroundColor: '#324C66' }}
      /> */}

      <View
        style={{
          // flexDirection:"column",
          // justifyContent:'space-between',
          // borderBottomColor:'#ce66fa',
          // borderBottomWidth:1,
          // paddingHorizontal:10,
          // height:150,
          margin:0,
          backgroundColor:'rgba(0,0,0,.1)'
        }}
      >
        <View
          style={{
            height:75,
            // width:'100%',
            backgroundColor:'rgba(0,0,0,.7)',
            borderWidth:1,
            borderColor:'black'
          }}
        />
        <Avatar
          rounded
          source={{
            uri:
              'https://playjoor.com/assets/avatar/matthew.png',
          }}
          // style={{padding:'5px'}}
          size='large'
          containerStyle={{
            position:'absolute',
            top:40,
            left:20,
            // transform: [{ translateY: -50 }]
          }}
        />
        <Text style={{
            position:'absolute', 
            top:80,
            right:20,
            fontSize:30,
            fontFamily:'normal',
            letterSpacing:2
          }}
        
        >My App</Text>
        
        <View style={{paddingHorizontal:20,paddingVertical:20,marginTop:50,elevation:9}}>
          <Text
            style={{
              fontSize:25,
              marginBottom:30
            }}
          >
            To Do
          </Text>

          {
            activities.map((val,index)=>{
              return (
                <View
                key={index}
                style={{
                  flexDirection:'row',
                  paddingVertical:10,
                  paddingHorizontal:10,
                  marginBottom:10,
                  backgroundColor:'rgba(255,255,255,.4)',
                  borderRadius:8,
          
                  elevation: 3,
                }}
                >
                  <Icon 
                    
                    name='ios-american-football'
                    type='ionicon'
                    size={35} reverse color='#639a67'/>
                  <View style={{flex:1,justifyContent:'center',paddingHorizontal:10}}>
                    <Text style={{fontSize:30}}>
                      {val.name}
                    </Text>
          
                  </View>
                </View>
              )
            })
          }
          

          {/* <View
          style={{
            flexDirection:'row',
            paddingVertical:10,
            paddingHorizontal:10,
            backgroundColor:'rgba(255,255,255,.4)',
            borderRadius:8,

            elevation: 3,
          }}
          >
            <Icon name='rowing' size={35} reverse color='#639a67'/>
            <View style={{flex:1,justifyContent:'center',paddingHorizontal:10}}>
              <Text style={{fontSize:30}}>
                Eat
              </Text>

            </View>
          </View> */}

        </View>

        

        {/* <Card
          title='HELLO WORLD'
          // image={require('../images/pic2.jpg')}
          // containerStyle={{padding:40}}
        >
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card> */}
        


      </View>



      {/* <Button
        title="Outline button"
        type="outline"
      />

      <Button
        icon={
          <Icon
            name="build"
            size={15}
            color="white"
          />
        }
        title="Button with icon component"
      />

      <Button
        containerStyle={{
          width:150,
          height:100,
          margin:3
        }}
        buttonStyle={{
          backgroundColor:'black'
        }}
        title="Loading button"
        loading
      />

      <CheckBox
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        title='show password'
        onPress={()=>setchecked(!checked)}
        checked={checked}
      />

      <Input
        placeholder='password'
        secureTextEntry={visible}
        leftIcon={<Icon name='lock' color='blue' size={24}/>}
        rightIcon={
          <Icon
            name={visible ? 'visibility':'visibility-off'}
            size={24}
            onPress={()=>setvisible(!visible)}
            color={visible?'blue':'gray'}
          />
        }
      /> */}
      
    </ScrollView>
    </View>

  )
};


// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
