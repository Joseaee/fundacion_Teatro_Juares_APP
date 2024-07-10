import {Text, View} from 'react-native'

export default function LoadingScreen(){
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Cargando...</Text>
        </View>
    )
}