import { View, Text, StyleSheet, Modal, Button } from "react-native"
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from "react-native-responsive-screen";
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';


import Banco from "../../../assets/icons/banco.svg";
import Cedula from "../../../assets/icons/cedula.svg";
import User from "../../../assets/icons/user.svg";
import Tarjeta from "../../../assets/icons/tarjeta.svg";
import Telefono from "../../../assets/icons/phone.svg";

const datosPago = [
    {id: '1',  banco: 'Banco de Venezuela', documento: '28425445', propietario: 'Hendherson Patiño', cuenta: '01021234567890123456', telefono: '04125034460'},

    {id: '2',  banco: 'Banco Provincial', documento: '12022323', propietario: 'Norkys Gutierrez', cuenta: '01081234567890123456', telefono: '04121234567'},

    {id: '3',  banco: 'Banesco', documento: '13032132', propietario: 'Felipe Gonzalez', cuenta: '01081234567890123456', telefono: '04121234567'},
]

function ModalCuentas ( { title, visible, onClose } ){

    return(
        <>
          <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Datos de Pago:</Text>
                <Swiper
                    showsButtons={false}
                    autoplay={false}
                    showsPagination={true}
                    >
                    {datosPago.map((dp, id) => (
                        <View key={dp.id} style={styles.infoContent}>
                            <View style={styles.info}>
                                <Banco style={styles.icon} />
                                <Text style={styles.texto}>{dp.banco}</Text>
                            </View>
                            <View style={styles.info}>
                                <Cedula style={styles.icon} />
                                <Text style={styles.texto}>{dp.documento}</Text>
                            </View>
                            <View style={styles.info}>
                                <User style={styles.icon} />
                                <Text style={styles.texto}>{dp.propietario}</Text>
                            </View>
                            <View style={styles.info}>
                                <Tarjeta style={styles.icon} />
                                <Text style={styles.texto}>{dp.cuenta}</Text>
                            </View>
                            <View style={styles.info}>
                                <Telefono style={styles.icon} />
                                <Text style={styles.texto}>{dp.telefono}</Text>
                            </View>
                        </View>
                    ))}
                </Swiper>
                <View>
                  <Button color="#6c757d" title="Cerrar" onPress={onClose} />
                </View>
              </View>
            </View>
          </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: '#0008',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        height: 400,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        fontSize: 20,
        marginBottom: 18,
        textAlign: 'center',
        color: '#E31734',
        fontWeight: 'bold'
    },
    boton: {
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    infoContent: {
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    info: {
      flexDirection: 'row',
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    icon: {
        fill: "black",
        height: 18,
        width: 36
    },
    texto: {
        fontSize: 18
    },
});

export default ModalCuentas;