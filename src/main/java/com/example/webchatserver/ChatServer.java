package com.example.webchatserver;

import jakarta.websocket.*;
import jakarta.websocket.server.PathParam;
import jakarta.websocket.server.ServerEndpoint;
import org.json.JSONObject;

import java.io.IOException;
import java.util.*;


/**
 * This class represents a web socket server, a new connection is created and it receives a roomCode as a parameter
 */
@ServerEndpoint(value="/ws/{roomCode}")
public class ChatServer {

    //The map maps the codes to the associated chatroom's history
    //the list contains the chat history corresponding to the room code
    private static Map<String, List<String>> histories = new HashMap<>(); //Maps a chatroom code to a list of messages (strings)
    //Map<chatRoomCode, listOfMessages>

    private static Map<Session, String> roomList = new HashMap<>();
    private static Map<Session, String> usernames = new HashMap<>();

    /**
     * Handles the opening of the chat room by the user.
     * Greets them and prompts them for their username.
     *
     * @param roomCode the alphanumeric code identifying the room
     * @param session current session
     * @throws IOException
     * @throws EncodeException
     */
    @OnOpen
    public void open(@PathParam("roomCode") String roomCode, Session session) throws IOException, EncodeException {
        session.getBasicRemote().sendText("{\"type\": \"server\", \"message\":\"(Server): Welcome to chat room: "+roomCode+"! Enter your username:\"}");

        // checks if the key already exists in histories. If not, start new history
        if (!histories.containsKey(roomCode)){
            histories.put(roomCode, new ArrayList<>());
        }
        roomList.put(session, roomCode);
    }

    /**
     * Handles the closing of the chat for the user.
     * When the user leaves, announces to the whole chat room that this specific user has left
     *
     * @param session current session, to be closed
     * @throws IOException
     * @throws EncodeException
     */
    @OnClose
    public void close(Session session) throws IOException, EncodeException {
        String username = usernames.remove(session);
        String roomID = roomList.remove(session);
        if (username != null && roomID != null) {
            for (Session peer : roomList.keySet()) {
                if (roomList.get(peer).equals(roomID)) {
                    peer.getBasicRemote().sendText("{\"type\": \"server\", \"message\":\"(Server): " + username + " left the chat room.\"}");
                }
            }
        }
    }

    /**
     * Handles message input from the user. Formats the message before sending it back as
     * "[when message was sent] (user) message". Has different handling cases based on if it is the user's first message
     *
     * @param roomCode the alphanumeric code identifying the room
     * @param comm the data being received from the client containing type, message content, and time as a json
     * @param session current session being interacted in
     * @throws IOException
     * @throws EncodeException
     */
    @OnMessage
    public void handleMessage(@PathParam("roomCode") String roomCode, String comm, Session session) throws IOException, EncodeException {
        String roomID = roomList.get(session);
        JSONObject jsonmsg = new JSONObject(comm);
        String type = jsonmsg.getString("type");
        String message = jsonmsg.getString("message");
        String timestamp = jsonmsg.getString("time");

        //not user's first message
        if (usernames.containsKey(session)) {
            String username = usernames.get(session);
            for (Session peer : roomList.keySet()) {
                if (roomList.get(peer).equals(roomID)) {
                    // index to reference the user's profile picture based on the ASCII value of the first character in their username
                    int imgIndex = ((int) username.charAt(0)) % 4;

                    peer.getBasicRemote().sendText("{\"type\": \"chat\", \"message\":\"[" + timestamp + "] (" + username + "): " + message + "\",\"img\": \"" + imgIndex + "\"}");

                    // formats the message in the same way it's sent back to the client before storing it
                    String formattedMsg = "{\"type\": \"chat\", \"message\":\"[" + timestamp + "] (" + username + "): " + message + "\",\"img\": \"" + imgIndex + "\"}";
                    histories.get(roomCode).add(formattedMsg);
                }
            }
        }

        //first message from user
        else {
            for (String m : histories.get(roomCode)){
                session.getBasicRemote().sendText(m);
                System.out.println("Sent" + m);
            }

            usernames.put(session, message);
            session.getBasicRemote().sendText("{\"type\": \"server\", \"message\":\"[" + timestamp + "] (Server): Welcome, " + message + "!\"}");

            //lets the chat know person joined the server
            for (Session peer : roomList.keySet()) {
                if (!peer.equals(session) && roomList.get(peer).equals(roomID)) {
                    peer.getBasicRemote().sendText("{\"type\": \"server\", \"message\":\"[" + timestamp + "] (Server): " + message + " joined the chat room.\"}");
                }
            }
        }
/*
        for (String m : histories.get(roomCode)){
            System.out.println(m);
        }
*/
    }
}
