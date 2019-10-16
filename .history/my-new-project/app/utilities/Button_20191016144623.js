import React, {Component} from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-elements';

class Btn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Button
                    type="outline"
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