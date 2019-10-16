import React, {Component} from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button, Icon } from 'react-native-elements';

class Btn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>

                <Button
                    icon={
                        <Icon
                        name="arrow-right"
                        size={15}
                        color="white"
                        />
                    }
                    style={{marginTop: 15}}
                    type="outline"
                    color="#c0392b"
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