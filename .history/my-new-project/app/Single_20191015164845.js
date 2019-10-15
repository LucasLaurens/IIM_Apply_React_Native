import React, {Component} from 'react';

export default class extends Component {
    constructor (props) {
        super(props)

        this.state = {
            productId: navigation.getParam('itemId')
        }
    }

    componentDidMount() {
        return fetch(`https://world.openfoodfacts.org/api/v0/product/${this.state.productId}.json`)
                .then(res => {
                    console.log(res.json())
                })
    }
}