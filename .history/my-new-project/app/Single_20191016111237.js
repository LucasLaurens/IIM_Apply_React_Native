import React, {Component} from 'react';

export default class extends Component {
    constructor (props) {
        super(props)

        const { itemId } = this.props.navigation.state.params;

        this.state = {
            productId: this.props.navigation.getParam('iitemIdd', 1)
        }
    }

    componentDidMount() {
        return fetch(`https://world.openfoodfacts.org/api/v0/product/${this.state.productId}.json`)
                .then(res => {
                    res.json()
                })
                .then(responseAProduct => {
                    console.log(responseAProduct)
                })

        /* 
        details à ajouter : 

        - generic_name
        - categories
        - quantity ?
        - image_url
        - nutriments (bouche for)


        */
    }
}