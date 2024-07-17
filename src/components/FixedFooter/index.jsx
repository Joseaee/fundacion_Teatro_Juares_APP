import { View, StyleSheet } from 'react-native';

const FixedFooter = ({children}) => {
  return (
    <View style={styles.footer}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderTopColor: '#c7c7c7',
    borderTopWidth: 2
  }
});

export default FixedFooter;
