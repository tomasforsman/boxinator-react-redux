import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { newShipment} from '../actions/postActions';

class NewShipment extends Component {


    componentDidMount(){
        this.props.newShipment();
}

    render() {
        return (
            <div></div>
        )

    }
}
        const mapStateToProps = state => ({
            shipment_id: state.posts.shipment,
        });

        NewShipment.propTypes = {
            newShipment: PropTypes.func.isRequired,

        };
        export default connect(mapStateToProps, { newShipment })(NewShipment);