function setRoomStyle(roomOccupancy) {
    let roomStyle;

    switch (roomOccupancy) {
        case 0:
            roomStyle = {color: 'black', opacity: 0, fillOpacity: 0.25, fillColor: 'green' }; // Set the style for empty room
            break;
        case 1:
            roomStyle = {color: 'black', opacity: 0, fillOpacity: 0.5, fillColor: 'green' }; // Set the style for a partially occupied room
            break;
        case 2:
            roomStyle = {color: 'black', opacity: 0, fillOpacity: 0.75, fillColor: 'green' }; // Set the style for a fully occupied room
            break;
        case 3:
            roomStyle = {color: 'black', opacity: 0, fillOpacity: 0.75, fillColor: 'red' }; // Set the style for a fully occupied room
            break;
        case 4:
            roomStyle = {color: 'black', opacity: 0, fillOpacity: 1, fillColor: 'gray' }; // Set the style for a fully occupied room
        default:
            roomStyle = {color: 'black', opacity: 0, fillOpacity: 0.1, color: 'green' }; // Set a default style for unknown occupancy
    }

    return roomStyle;
}