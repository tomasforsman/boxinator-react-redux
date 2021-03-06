import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, fetchShipment } from './../actions/postActions';

class Posts extends Component {

   UNSAFE_componentWillMount(){
       this.props.fetchPosts();
       this.props.fetchShipment();
   }

   // Removes decimals if not needed.
   static roundNumber(numb){
       return Math.round(numb) == numb ? Math.round(numb) : numb;
   }
    render() {

    const postItems = this.props.posts.map(post => (
        <tr key={post.id_package}>
            <td className="table-post">{post.name}</td>
            <td className="table-post">{Posts.roundNumber(post.weight)} Kg</td>
            <td className="table-post" style={{ background: `rgb(${post.red},${post.green},${post.blue})`}}><div>&nbsp;</div></td>
            <td className="table-post">{Posts.roundNumber(post.cost)} SEK</td>
        </tr>
    ));
      const shipmentInfo = this.props.shipmentinfo.map(ship => (
          <tr key={ship.id_shipment}>
              <td className="table-post"><div>&nbsp;</div></td>
              <td className="table-post">{Posts.roundNumber(ship.total_weight)} Kg</td>
              <td className="table-post"><div>&nbsp;</div></td>
              <td className="table-post">{Posts.roundNumber(ship.total_cost)} SEK</td>
          </tr>
      ));
    return (
      <div className="component-wrapper">
          <table className="tg">
              <tbody>
              <tr>
                  <th className="table-heading">Receiver</th>
                  <th className="table-heading">Weight</th>
                  <th className="table-heading">Color</th>
                  <th className="table-heading">Cost</th>
              </tr>
              {postItems}
              <tr>
                  <th className="table-heading"><div>&nbsp;</div></th>
                  <th className="table-heading">Total Weight:</th>
                  <th className="table-heading"><div>&nbsp;</div></th>
                  <th className="table-heading">Total Cost:</th>
              </tr>
              {shipmentInfo}
              </tbody>
          </table>
      </div>

    );
  }
}
 
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    fetchShipment: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    shipmentinfo: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item,
    shipment_id: state.posts.shipment,
    shipmentinfo: state.posts.shipmentinfo
});
export default connect(mapStateToProps, {  fetchPosts, fetchShipment })(Posts);