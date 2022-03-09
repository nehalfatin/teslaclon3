import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = (props) => {
    
    const {name, tagline, image, taglineCTA} = props.car;

    return (
        <View style={styles.carcontainer}>

        <ImageBackground 
          source={image}
          style = {styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}> {name}</Text>
          <Text style={styles.subtitle}> 
            {tagline}
            {' '}
            <Text style = {styles.subtitleCTA}>
                {taglineCTA}
            </Text>
          </Text>
        </View>

        
        <View style= {styles.buttoncontainer} >
            <StyledButton 
                type="primary" 
                content = {<Text>{"Custom Order"}</Text>} 
                onPress={()=>{

                }}/>
        
            <StyledButton 
                type="secondary" 
                content ={<Text>{"Existing inventory"}</Text>} 
                onPress={()=>{

                }}/>
        </View>
        
     
      </View>
    )
}

export default CarItem
