import {Text, ImageBackground, View, StyleSheet} from 'react-native'

import Navbar from '../navbar'

export default function Banner({children, image, goBack}){
    return (
        <View style={{height: 160}}>
              <ImageBackground
                source={image} 
                style={styles.backgroundImage}
              >
                <View style={{flexDirection: 'row'}}>
                <Navbar title='' loggedIn={true} transparent={true} back={goBack}/>
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
})
