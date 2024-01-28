import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
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
    const params = useParams();
    const { type } = params;

    // ============== call fetchRoomList info fn ==============================//
    fetchRoomList(type)
        .then((rooms) => {
            setRoomList(rooms);
        })
        .catch((error) => {
            console.error("Error fetching Rooms:", error);
        });

    // ======================= return ========================//
    return (
        <div>
            <div>{roomList.length}</div>
        </div>
    );
};

export default Room;
