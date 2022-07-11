import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { lat: null, errorMessage: '' };
    // }
    state = { lat: null, errorMessage: '' };
    rendorContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage} </div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div> <SeasonDisplay lat = {this.state.lat}/></div>
        }

        return <Spinner message ="Please accept location request."/>;
    }
    render() {
        return (
            <div className="border red">
                {this.rendorContent()}
            </div>
        );

    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({ lat: position.coords.latitude }),
            err => { this.setState({ errorMessage: err.message })});
    }

    // componentDidUpdate() {
    //     console.log("My component is just updated");
    // }
}

createRoot(document.getElementById("root")).render(<App />);
