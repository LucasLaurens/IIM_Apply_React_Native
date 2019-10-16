import React from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native';

class Btn extends React.Component {
    render() {
        return (
            <View>
                <Button
                    title="More Details"
                    onPress={() => {
                        this.props.navigation.navigate('Single', {
                            itemId: this.props.itemId,
                        });
                    }}
                />
            </View>
        )
    }
}

export default withNavigation(Btn);