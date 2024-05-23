let ws;
let listOfRooms;
let globalCode = "RoomCodeError";
let roomName = "";
let isThereSendMessageListener = false;

/**
 * Function sends a message for the server to handle. Message is read from the input field as a chat message and sent
 * with a time stamp for the server to format. Input field is then cleared.
 */
function sendMessage(){
    const inputField = document.getElementById("messageInput");
    console.log(inputField.value);
    console.log(globalCode);
    let request = {"type":"chat", "message":inputField.value, "time":timestamp(), "img":0};//also returns code to java
    console.log(JSON.stringify(request));
    ws.send(JSON.stringify(request))
    inputField.value = "";

    console.log("sent");
}

/**
 * Default function to create a new room. After the room is created, it is automatically joined.
 */
function newRoom(){
    // calling the ChatServlet to retrieve a new room ID
    let callURL= "http://localhost:8080/WSChatServer-1.0-SNAPSHOT/chat-servlet";
    fetch(callURL, {
        method: 'GET',
        headers: {
            'Accept': 'text/plain',
        },
    })
        .then(response => response.text())
        .then(response => enterRoom(response)); // enter the room with the code
}

/**
 * Enters the user into the chat room. Also handles receiving message input from users and displaying messages
 *
 * @param code is the alphanumeric room code
 */
function enterRoom(code) {
    console.log(code);
    //console.log(globalCode);

    // clear chat box
    document.getElementById("chat-messages").innerText = "";
    roomName = "";

    //close previous websockets
    if (ws && ws.readyState === WebSocket.OPEN) {
        document.getElementById("messageInput").removeEventListener("keyup", sendingEnterMessage);
        ws.close();
    }

    // create the web socket
    ws = new WebSocket("ws://localhost:8080/WSChatServer-1.0-SNAPSHOT/ws/" + code);
    globalCode = code
    document.getElementById("chatRoomName").innerText = roomName + " Room code: " + globalCode;

    //checks to make sure ws opens
    ws.onopen = function (event) {
        console.log("WebSocket connection established.");
    };

    // parse messages received from the server and update the UI accordingly
    ws.onmessage = function (event) {
        console.log(event.data);

        // parsing the server's message as json
        let message = JSON.parse(event.data);
        console.log("Parsed message:", message);


        // handle message
        displayMessage(message);

/*        Old ver
        if (message.type === "chat") {
            let msgSpan = document.createElement('span');
            msgSpan.textContent = "\n" + message.message + "\n";
            msgSpan.style.display = 'block';
            document.getElementById("chat-messages").appendChild(msgSpan);
        }
        else if (message.type === 'server') {
            let msgSpan = document.createElement('span');
            msgSpan.textContent = "\n" + message.message + "\n";
            msgSpan.style.color = 'yellow';
            msgSpan.style.display = 'block';
            document.getElementById("chat-messages").appendChild(msgSpan);
        }
 */
    }

    ws.onerror = function(event) {
        console.error("WebSocket error:", event);
    };

    ws.onclose = function(event) {
        console.log("WebSocket connection closed.", event);
    };

    //entering a message
    //document.getElementById("messageInput").removeEventListener("keyup", sendingEnterMessage);
    document.getElementById("messageInput").addEventListener("keyup", sendingEnterMessage);

    // update the list of rooms
    refreshRooms();
}

/**
 * Handles the message outputs the user sees.
 * Additionally, assigns a profile picture to the user sending the message depending on the first character of their username.
 *
 * @param message is the message being handled
 */
function displayMessage(message){
    // chooses random profile picture for each message
    let images = ['dinopfp.png', 'monkeypfp.png', 'regularpfp.png', 'Cardboardpfp.png'];
    let image = images[message.img];

    let div = document.createElement('div');
    div.classList.add('message');
    let img = document.createElement('img');

    // applies message with pfp if it's a user message and changes colour for server messages
    if (message.type === "server") {
        div.classList.add('server');
        div.innerText = message.message;
        document.getElementById("chat-messages").appendChild(div);
        document.getElementById("chat-messages").appendChild(document.createElement('br'));
    }
    else if (message.type === 'chat') {
        img.alt = "Message PFP";
        img.src = "./img/" + image;
        let text = document.createTextNode(message.message );
        div.appendChild(text);
        document.getElementById("chat-messages").appendChild(img);
        document.getElementById("chat-messages").appendChild(div);
        document.getElementById("chat-messages").appendChild(document.createElement('br'));
    }
}

/**
 * Allows for the message to appear once when the enter key is pressed
 */
function sendingEnterMessage(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

/**
 * Enters an existing room through the join button and the five character alphanumeric code
 */
function joinRoom() {
    enterRoom(document.getElementById("roomInput").value);
}

/**
 * Retrieves the current date and time to attach to the chat message
 *
 * @returns {string}, a format of the date in M-D hours:minutes:seconds
 */
function timestamp() {
    let d = new Date(), minutes = d.getMinutes(), seconds = d.getSeconds();
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    return (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + minutes + ':' + seconds;
}

/**
 * Refreshes the list of rooms, identified by their code, by fetching them from the servlet
 */
function refreshRooms() {
    //refresh list of joinable rooms
    let callURL= "http://localhost:8080/WSChatServer-1.0-SNAPSHOT/chat-servlet/rooms";
    fetch(callURL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(rooms => {
            //console.log("rooms:"+rooms)
            listOfRooms = rooms
            //console.log("listOfRooms:"+listOfRooms)

            //console.log(rooms)
            document.getElementById("roomListMenu").innerText = "";//set to nothing since its being refreshed

            //updating list with all current rooms
            for (let i = 0; i < listOfRooms.length; i++) {
                document.getElementById("roomListMenu").innerText += listOfRooms[i] + "\n";
            }
        })
        .catch(error => console.error('Error fetching rooms:', error));
}

/**
 * Function application to allow the user to change the name of the room, exclusive to the room code.
 * NOTE: currently only works client-side
 */
function changeRoomName() {
    roomName = document.getElementById("roomNameInput").value;
    document.getElementById("roomNameInput").value = "";
    document.getElementById("chatRoomName").innerText = roomName + " Room code: " + globalCode;
}
