import { FETCH_POSTS, NEW_POST, NEW_SHIPMENT, FETCH_SHIPMENT } from './types';


export const fetchPosts = () => dispatch => {
    fetch(`http://localhost:4000/api/boxinator/packages/get`,{
        method: "GET",
    })
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        );
};

export const fetchShipment = () => dispatch => {
    fetch(`http://localhost:4000/api/boxinator/shipment/get`,{
        method: "GET",
    })
        .then(res => res.json())
        .then(posts =>
            dispatch({
                type: FETCH_SHIPMENT,
                payload: posts
            })
        );
};


export const createPost = postData => dispatch => {
  fetch('http://localhost:4000/api/boxinator/package/add', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

export const newShipment = () => dispatch => {
    fetch('http://localhost:4000/api/boxinator/shipment/add', {
        method: 'POST'
    })
        .then(res => res.text())
        .then(shipment =>
            dispatch({
                type: NEW_SHIPMENT,
                payload: parseInt(shipment)
            })
        );
};