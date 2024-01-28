import React, { Component } from "react";
import "../../App.css";
import { getDatabase, ref, set, update } from "firebase/database";
import { UncontrolledAlert } from "reactstrap";
import Spinner from "../Spinner/Spinner";

class BookRoom extends Component {
    // receive props
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        Loading: false,
        alertColor: null,
        alertMessage: "null",
    };

    // ===================== database submit===================== //
    // ============================= Room List fn =============================//
    updateDataBase = async (roomData) => {
        try {
            const db = getDatabase();

            var seconds = new Date().getTime();

            update(ref(db, `rooms/${roomData.roomPk}`), {
                departure_time: roomData.departure_time,
                entry_time: new Date().getTime(),
                room_user: roomData.Name,
                user_phone_number: roomData.Phone_number,
            });
            return true;
        } catch (error) {
            throw error;
            return error.message;
        }
    };

    handleSubmit(event) {
        event.preventDefault();
        // index onujayi ashe
        const selectedRoomObject = JSON.parse(
            event.target[0].getAttribute("data-room")
        );
        const roomData = {
            roomPk: event.target[0].value,
            Name: event.target[1].value,
            Phone_number: event.target[2].value,
            departure_time:
                new Date().getTime() +
                event.target[3].value * 24 * 60 * 60 * 1000,
        };

        event.target.reset();
        this.setState({ Loading: true });
        this.updateDataBase(roomData)
            .then((output) => {
                // this.setState({ Loading: false });
                this.setState({
                    Loading: false,
                    alertColor: "info",
                    alertMessage: "Confirmed!",
                });
                setTimeout(() => {
                    // Reload the page
                    window.location.reload();
                }, 3000);
            })
            .catch((error) => {
                this.setState({
                    Loading: false,
                    alertColor: "danger",
                    alertMessage: error.message,
                });
                // this.setState({ Loading: false });
            });
    }

    render() {
        // access values
        //{} er vitor oi name e dte hbe j name e props send kora hoise
        const { roomList, price } = this.props;

        return (
            <div className="container">
                <br />
                <h4>Room Price/Day: {price} Tk</h4>
                <br />
                {this.state.alertColor && (
                    <UncontrolledAlert color={this.state.alertColor}>
                        {this.state.alertMessage}
                    </UncontrolledAlert>
                )}
                <br />
                {this.state.Loading && <Spinner />}
                <form
                    style={{
                        border: "5px solid aquamarine",
                        padding: "2rem",
                        borderRadius: "2rem",
                    }}
                    onSubmit={this.handleSubmit}
                >
                    <div className="form-group">
                        <h3>Select a Room</h3>
                        <br />
                        <select
                            name="selectOption"
                            className="form-select form-select-md"
                            aria-label=".form-select-sm example"
                        >
                            {roomList.map((room) => (
                                <option value={room.id} key={room.id}>
                                    Room No. {room.room_number}
                                </option>
                            ))}
                        </select>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                        />
                        <br />
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Your Phone Number"
                            required
                        />
                        <br />
                        <input
                            type="number"
                            className="form-control"
                            placeholder="How may day(s) you want to stay?"
                            required
                        />
                        <br />
                        <button
                            type="submit"
                            className="btn btn-primary form-control"
                            required
                        >
                            Confirm
                        </button>
                    </div>
                </form>
                <br />
                <br />
            </div>
        );
    }
}

export default BookRoom;
