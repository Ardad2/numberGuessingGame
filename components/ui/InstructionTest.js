import {Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';


function InstructionText({children, style}) {
    
    //The style on the right overrides the style on the left.

    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24
    },
});