import React from 'react';
import { View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class Btn extends React.Component {
    constructor(props) {
        super(props)
    }
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