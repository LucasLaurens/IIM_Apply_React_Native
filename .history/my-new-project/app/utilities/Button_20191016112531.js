import React from 'react';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native';

export default class Btn extends React.Component {
    render() {
        return (
            <Button
                title="More Details"
                onPress={() => {
                    this.props.navigation.navigate({
                        itemId: this.props.id,
                    });
                }}
            />
        )
    }
}

export default withNavigation(Btn);