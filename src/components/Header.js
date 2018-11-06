import React from 'react';

export default () => {
    return (

        <nav className={"navbar"}>
            <div className="navbar-nav">
                <a className="navbar-form" href="/addbox">Add Box</a>
                <a className="navbar-list" href="/listboxes">List Boxes</a>
                <a className="navbar-new" href="/newshipment">New Shipment</a>
            </div>
        </nav>
    )
}