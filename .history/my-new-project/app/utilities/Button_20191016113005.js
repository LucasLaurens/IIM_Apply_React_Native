import React from 'react';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native';

class Btn extends React.Component {
    render() {
        return (
            <Button
                title="More Details"
                onPress={() => {
                    this.props.navigation.navigate('single', {
                        itemId: this.props.itemId,
                    });
                }}
            />
        )
    }
}

export default withNavigation(Btn);