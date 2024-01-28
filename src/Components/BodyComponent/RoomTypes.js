import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "../../App.css";

class RoomTypes extends Component {
    render() {
        return (
            <div>
                <div
                    style={{
                        backgroundImage: "url('/img/types.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "90vh",
                        margin: 0,
                        padding: 0,
                        // width: "100vh",
                    }}
                >
                    <br />
                    <br />
                    <h2 style={{ color: "white" }}>Select Room Types</h2>

                    <div className="types_btn_div">
                        <Link to={`/room/${"single"}/5000`}>
                            <Button
                                color="warning"
                                outline
                                style={{
                                    width: "50%",
                                    marginBottom: "15px",
                                }}
                            >
                                <h3 className="types_h3">Single Room</h3>
                            </Button>
                        </Link>
                        <Link to={`/room/${"double"}/8000`}>
                            <Button
                                color="warning"
                                outline
                                style={{
                                    width: "50%",
                                    marginBottom: "15px",
                                }}
                            >
                                <h3 className="types_h3">Double Room</h3>
                            </Button>
                        </Link>
                        <Link to={`/room/${"family"}/12000`}>
                            <Button
                                color="warning"
                                outline
                                style={{
                                    width: "50%",
                                    marginBottom: "15px",
                                }}
                            >
                                <h3 className="types_h3">Family Room</h3>
                            </Button>
                        </Link>
                        <Link to={`/room/${"deluxe"}/20000`}>
                            <Button
                                color="warning"
                                outline
                                style={{
                                    width: "50%",
                                    marginBottom: "15px",
                                }}
                            >
                                <h3 className="types_h3">Deluxe Room</h3>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomTypes;
