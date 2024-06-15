import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import Sofa from '../../../assets/icons/sofa.svg'
import { useState } from 'react'

function Asientos({children, selectedColor = '#222', }){
    const [isSelected, setIsSelected] = useState(false)
    return (
        <TouchableOpacity style={styles.contenedor} onPress={()=>{
            setIsSelected(
                !isSelected
            )
        }}>
            <Sofa width={20} height={20} fill={(isSelected) ? selectedColor: '#E31734'} />
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