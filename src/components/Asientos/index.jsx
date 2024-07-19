import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import Sofa from '../../../assets/icons/sofa.svg'
import { useState } from 'react'

function Asientos({children, color = 'gray', onPress = ()=>{}, disabled = false, selected = false}){
    const [isSelected, setIsSelected] = useState(selected)
    return (
        <TouchableOpacity disabled={disabled} style={styles.contenedor} onPress={()=>{
            setIsSelected(
                !isSelected
            )
            onPress()
        }}>
            <Sofa width={20} height={20} fill={(isSelected) ? '#222': color} />
            <Text style={{color: '#222'}}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        width: 50,
        height: 80,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    asientos: {
        width: 20,
        height: 20,
    },
})

export default Asientos;