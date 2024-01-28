// src\Components\BodyComponent\Home.js
import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../../App.css";

class Home extends Component {
    render() {
        return (
            <div>
                <div
                    style={{
                        backgroundImage: "url('img/home-background.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "100vh",
                        margin: 0,
                        padding: 0,
                        // width: "100vh",
                    }}
                >
                    {/* Your content goes here */}
                    <br />
                    <img src="img/hotel_logo.png" />
                    <br />
                    <br />
                    <h2
                        style={{
                            color: "white",
                            fontFamily: "Roboto Slab",
                        }}
                    >
                        Experience Coastal Elegance at Ocean View
                    </h2>
                    <br />
                    <br />
                    <br />
                    <br />

                    <div className="container photo-grid">
                        <img src="img/f1.jpg" alt="Photo 1" />
                        <img src="img/f2.jpg" alt="Photo 2" />
                        <img src="img/f4.jpg" alt="Photo 3" />
                        <img src="img/f5.jpg" alt="Photo 3" />
                    </div>
                    <br />
                    <br />
                    <Link to={`/room_types/`}>
                        <Button color="warning">
                            <h3 className="home_h3_btn">
                                Click here to Book Now
                            </h3>
                        </Button>
                    </Link>
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}

export default Home;
