// Klasser och objekt

// Skapa en klass "House"
class House {
    constructor() {}


    addRoom() {

    }

    getAllRooms() {

    }


}
// Skapa en klass "Room"
class Room {
    constructor(roomType) {
        this.roomType = roomType
    }
}
// Klassen "house" ska ha en tom array på sig som värde.
// Det skall även finnas en funktion på klassen "House" som heter "addRoom".
// "addRoom" skall ta in ett värde och stoppa in den i den tomma arrayen som finns på klassen "house".


// Det skall även finnas en funktion på klassen "house" som heter "getAllRooms" som returnerar alla element i arrayen som finns på klassen "house".


// klassen "room" skall ha ett fält som heter "roomType".


// Skapa nu en instans av "house" klassen.
// använd sedan funktionen "addRoom" som finns på "House" klassen och anropa denna funktionen 3gånger.


// Första gången skall du skicka med ett nytt "Room" med "roomType":"Bedroom"
// Andra gången skall du skicka med ett nytt "Room" med "roomType": "Living room"
// Tredje gången skall du skicka med ett nytt "Room" med "roomType": "Bathroom"


// Anropa nu "getAllRooms" metoden på "house" klassen, loopa igenom arrayen den returnerar, console.logga ut varje rums "roomType"