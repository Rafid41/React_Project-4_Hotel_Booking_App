import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Spinner from "../Spinner/Spinner";
import BookRoom from "./BookRoom";
import {
    getDatabase,
    ref,
    onValue,
    query,
    equalTo,
    get,
    orderByChild,
} from "firebase/database";

// ============================= Room List fn =============================//
async function fetchRoomList(type) {
    const db = getDatabase();
    const Ref = ref(db, "rooms");

    try {
        const allRecordsSnapshot = await get(query(Ref, orderByChild("type")));
        const currentTime = new Date().getTime();

        let allAvailableRooms = [];
        if (allRecordsSnapshot.exists()) {
            allRecordsSnapshot.forEach((childSnapshot) => {
                const room = {
                    id: childSnapshot.key, // Store the unique ID
                    ...childSnapshot.val(),
                };

                if (room.type === type && room.departure_time < currentTime) {
                    allAvailableRooms.push(room);
                }
            });
        }
        return allAvailableRooms;
    } catch (error) {
        throw error;
    }
}

// =========================== main fn ============================== //
const Room = () => {
    const [roomList, setRoomList] = useState([]);
    const [Loading, setLoading] = useState(true);
    const params = useParams();
    const { type, price } = params;

    // ============== useEffect Must ==============================//
    useEffect(() => {
        // Use useEffect to fetch data when component mounts
        fetchRoomList(type)
            .then((rooms) => {
                setRoomList(rooms);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching Rooms:", error);
                setLoading(false); // Make sure Loading is set to false in case of error
            });
    }, [type]); // Dependency on type parameter

    // ======================= return ========================//
    let avalilableDiv = (
        <div>
            <h3 style={{ color: "red", fontWeight: "bold" }}>
                Sorry No room is currently Available
            </h3>
        </div>
    );

    if (roomList.length > 0) {
        avalilableDiv = (
            <div>
                <h3>
                    Available Rooms :{" "}
                    <strong style={{ color: "green" }}>
                        {roomList.length}
                    </strong>
                    <BookRoom roomList={roomList} price={price} />
                </h3>
            </div>
        );
    }
    const uu = `/img/${type}.jpg`;

    return (
        <div>
            <br />
            <div>
                <h3>Room Preview</h3>
                <img src={`/img/${type}.jpg`} width="700px" height="400px" />
                <br />
                <br />
                {/* Loading == true hole run korbe */}
                {Loading && <Spinner />}

                {!Loading && avalilableDiv}
            </div>
        </div>
    );
};

export default Room;
