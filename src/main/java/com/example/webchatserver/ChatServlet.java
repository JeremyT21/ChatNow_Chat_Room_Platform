package com.example.webchatserver;

import java.io.*;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import org.apache.commons.lang3.RandomStringUtils;

/**
 * This is a class that has services
 * In our case, we are using this to generate unique room IDs
 *
 * NOTE: Added functionality to it to send the room IDs as well.
 * **/
@WebServlet(name = "chatServlet", value = {"/chat-servlet", "/chat-servlet/rooms"})
public class ChatServlet extends HttpServlet {
    private String message;

    //static so this set is unique
    public static Set<String> rooms = new HashSet<>();

    /**
     * Method generates unique room codes
     * **/
    static public String generatingRandomUpperAlphanumericString(int length) {
        String generatedString = RandomStringUtils.randomAlphanumeric(length).toUpperCase();
        // generating unique room code
        while (rooms.contains(generatedString)){
            generatedString = RandomStringUtils.randomAlphanumeric(length).toUpperCase();
        }
        rooms.add(generatedString);

        return generatedString;
    }

    /**
     * Handles fetch requests from the client for both getting a new room and a list of the rooms made, all identified
     * by the room code
     *
     * @param request URI for what is being requested. If it ends in "/rooms" it's a call for the room list
     * @param response the data requested. Sends a text response for the room code, a json response for the room list
     * @throws IOException
     */
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String requestURI = request.getRequestURI();
        System.out.println("Received GET request for URI: " + requestURI);
        if(requestURI.endsWith("/chat-servlet")){
            response.setContentType("text/plain");

            // send the random code as the response's content
            PrintWriter out = response.getWriter();

            String randomCode = generatingRandomUpperAlphanumericString(5);
            System.out.println("Generated random code: " + randomCode);

            out.println(randomCode);
        }

        else if(requestURI.endsWith("/rooms")){
            //This is an added element to assist in refreshing room codes

            response.setContentType("application/json");
            /*
            //Test code for checking the listOfRooms array
            rooms.add("Room1");
            rooms.add("Room2");
            rooms.add("Room3");
            */
            System.out.println("Added rooms: " + rooms);

            PrintWriter out = response.getWriter();
            out.println(new ObjectMapper().writeValueAsString(rooms));
        }
        else {
            System.out.println("Failed");
        }
    }

    /**
     *
     */
    public void destroy() {
    }
}