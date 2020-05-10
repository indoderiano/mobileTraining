import React from 'react';
import {Text} from 'react-native';

const Fontsize=({children,besarhuruf})=>{

    return(
        <Text
            style={{
                fontSize:besarhuruf,
                fontWeight:'bold'
            }}
        >
            {children}
        </Text>
    )


}

export default Fontsize
