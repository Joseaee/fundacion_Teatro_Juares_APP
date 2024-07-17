import {Text, ImageBackground, View, StyleSheet} from 'react-native'

import Navbar from '../navbar'

export default function Banner({children, image, goBack, darkOverlay = false, icons = {
  logout: false,
  bell: true,
  user: true
}}){
    return (
        <View style={{height: 160}}>
              <ImageBackground
                source={image} 
                style={[styles.backgroundImage]}
              >
                {(darkOverlay) ?  <View style={styles.darkOverlay}/> : null}
                <View style={{flexDirection: 'row'}}>
                <Navbar title='' loggedIn={true} transparent={true} back={goBack} icons={icons}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    {children}
                </View>
              </ImageBackground>
            </View>
    )
}

const styles = StyleSheet.create({
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
      },
      darkOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
})
