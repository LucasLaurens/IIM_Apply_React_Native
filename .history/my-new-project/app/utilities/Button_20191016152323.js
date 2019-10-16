import React, {Component} from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Btn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>

                <Button
                    buttonStyle= {{
                        borderColor: (this.props.index%2 == 0) ? {color: "#FFF"} : {color: "#e74c3c"}
                    }}
                    titleStyle={{
                        color: (this.props.index%2 == 0) ? {color: "#FFF"} : {color: "#e74c3c"}
                    }}
                    icon={
                        <Icon
                        name="arrow-right"
                        size={15}
                        style={{marginRight: 15}}
                        color="#fff"
                        />
                    }
                    style={{marginTop: 15}}
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