import { TextInput, View } from 'react-native';

import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen() {
    return (
        <View>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;