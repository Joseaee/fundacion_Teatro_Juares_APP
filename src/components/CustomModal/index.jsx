import { View, Text, StyleSheet, Modal, Button } from "react-native"
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from "react-native-responsive-screen";
import React, { useState } from 'react';
import { useAuthActions } from '../../hooks/useAuthActions'

import Check from '../../../assets/icons/modals/check.svg'
import Error from '../../../assets/icons/modals/error.svg'
import Exclamation from '../../../assets/icons/modals/exclamation.svg'
import Info from '../../../assets/icons/modals/info.svg'
import Question from '../../../assets/icons/modals/question.svg'

function CustomModal ( { title, customFunctionAcceptButton, visible, onClose, icons={
  check: false,
  error: false,
  exclamation: false,
  info: false,
  question: false
} } ){

  const {logout} = useAuthActions()

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
                <View style={styles.icons}>
                {
                  icons.check ? 
                  <Check 
                    height={40}
                    width={40} 
                    fill={"#27AE60"} 
                  />
                  : null
                }
                {
                  icons.error ? 
                  <Error 
                    height={40}
                    width={40} 
                    fill={"#E31734"} 
                  />
                  : null
                }
                {
                  icons.exclamation ? 
                  <Exclamation 
                    height={40}
                    width={40} 
                    fill={"#3498DB"} 
                  />
                  : null
                }
                {
                  icons.info ? 
                  <Info 
                    height={40}
                    width={40} 
                    fill={"#3498DB"} 
                  />
                  : null
                }
                {
                  icons.question ? 
                  <Question 
                    height={40}
                    width={40} 
                    fill={"#3498DB"} 
                  />
                  : null
                }
                </View>
                <Text style={styles.modalText}>{title}</Text>
                <View >
                  <View style={{ width: 200, marginBottom: 10 }}>
                  <Button color="#E31734" title="Aceptar" onPress={customFunctionAcceptButton ? customFunctionAcceptButton : async () => {
                      try {
                        await logout()
                      } catch (error) {
                        console.error(error)
                      }
                    }}
                  />
                  </View>
                  <Button color="#6c757d" title="Cancelar" onPress={onClose} />
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
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 40,
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
        fontSize: 16,
        marginBottom: 18,
        textAlign: 'center',
    },
    boton: {
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    icons: {
      marginBottom: 8,
    }
});

export default CustomModal;