import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      weight: "",
      red: "255",
      green: "255",
      blue: "255",
      country_id: "1",
      color: "#FFFFFF",
      nameErrorClass: "hidden",
      weightErrorClass: "hidden",
      colorErrorClass: "hidden"
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.hexToR = this.hexToR.bind(this);
    this.hexToG = this.hexToG.bind(this);
    this.hexToB = this.hexToB.bind(this);
    this.cutHex = this.cutHex.bind(this);
  }

  hexToR(h) {
    return parseInt(this.cutHex(h).substring(0, 2), 16);
  }
  hexToG(h) {
    return parseInt(this.cutHex(h).substring(2, 4), 16);
  }
  hexToB(h) {
    return parseInt(this.cutHex(h).substring(4, 6), 16);
  }
  cutHex(h) {
    return h.charAt(0) === "#" ? h.substring(1, 7) : h;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "color") {
      const hex = e.target.value;
      const r = this.hexToR(hex);
      const g = this.hexToG(hex);
      const b = this.hexToB(hex);

      // Throws error and picks 'white' if a blue shade is selected.
      if (b <= (r + g) / 2) {
        this.setState({ red: r });
        this.setState({ green: g });
        this.setState({ blue: b });
        this.setState({ colorErrorClass: "hidden" });
      } else {
        this.setState({ red: 255 });
        this.setState({ green: 255 });
        this.setState({ blue: 255 });
        this.setState({ color: "#FFFFFF" });
        this.setState({ colorErrorClass: "error" });
      }
    }
  }

  validate() {
    let valError = false;
    if (this.state.name.length <= 4) {
      valError = true;
      this.setState({ nameErrorClass: "error" });
    } else {
      this.setState({ nameErrorClass: "hidden" });
    }

    if (this.state.weight <= 0) {
      valError = true;
      this.setState({ weightErrorClass: "error" });
    } else {
      this.setState({ weightErrorClass: "hidden" });
    }
    return valError;
  }

  onSubmit(e) {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      const post = {
        name: this.state.name,
        weight: this.state.weight,
        red: this.state.red,
        green: this.state.green,
        blue: this.state.blue,
        country_id: this.state.country_id
      };
      console.log(post);
      this.props.createPost(post);

      // Empty form
      this.setState({ name: "" });
      this.setState({ weight: "" });
      this.setState({ red: "255" });
      this.setState({ green: "255" });
      this.setState({ blue: "255" });
      this.setState({ country_id: "1" });
      this.setState({ color: "#FFFFFF" });
    }
  }

  render() {
    return (
      <div className="component-wrapper">
        <h1>Add Box</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <br />
            <input
              name="name"
              id="name"
              type="text"
              onChange={this.onChange}
              value={this.state.name}
            />{" "}
            <br />
            <span id="nameError" className={this.state.nameErrorClass}>
              You need more letters in your name.
            </span>
          </div>
          <br />
          <div>
            <label htmlFor="weight">Weight: </label>
            <br />
            <input
              name="weight"
              id="weight"
              type="text"
              onChange={this.onChange}
              value={this.state.weight}
            />{" "}
            <br />
            <span id="weightError" className={this.state.weightErrorClass}>
              Weight can't be a negative number.
            </span>
          </div>
          <br />
          <div>
            <label htmlFor="color">Color: (Blue shades not available)</label>
            <br />
            <input
              name="color"
              id="color"
              type="color"
              onChange={this.onChange}
              value={this.state.color}
            />{" "}
            <br />
            <span id="colorError" className={this.state.colorErrorClass}>
              You can't pick a color from the blue spectrum.
            </span>
          </div>
          <br />
          <div>
            <label htmlFor="country_id">Country: </label>
            <br />
            <select
              name="country_id"
              id="country_id"
              onChange={this.onChange}
              value={this.state.country_id}
            >
              <option value="1">Sweden</option>
              <option value="2">China</option>
              <option value="3">Brazil</option>
              <option value="4">Australia</option>
            </select>
          </div>
          <br />
          <div>
            <br />
            <button type="submit" id="submit" className="btn-form">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
  nameError: PropTypes.string
};
export default connect(
  mapStateToProps,
  { createPost }
)(PostForm);
