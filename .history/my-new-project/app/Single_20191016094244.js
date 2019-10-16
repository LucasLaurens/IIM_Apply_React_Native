import React, {Component} from 'react';

export default class extends Component {
    constructor (props) {
        super(props)

        this.state = {
            productId: this.props.avigation.getParam('itemId', 0)
        }
    }

    componentDidMount() {
        return fetch(`https://world.openfoodfacts.org/api/v0/product/${this.state.productId}.json`)
                .then(res => {
                    console.log(res.json())
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