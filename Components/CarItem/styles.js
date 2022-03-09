import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    carcontainer: {
        width: '100%',
        height: Dimensions.get('window').height,
      },
    
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
    
      subtitle: {
        fontSize: 16,
        color: '#5c5e62'
      },
    
      title: {
        fontSize: 40,
        fontWeight: '500',
      },
    
      image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },

      buttoncontainer:{
        position: 'absolute',
        bottom: 50,
        width: '100%',
      },

      subtitleCTA: {
        fontWeight: '500',
        textDecorationLine: 'underline',
      }
});

export default styles;


