import { io, Socket } from "socket.io-client";
import { SOCKET_URL } from "../../constants/portConstants";
import { resetChat, setChat, updateCurrentChat } from "../chat/chatReducers";

import socketEvents from "./socketEvents";

const socketMiddleware = () => {
  let socket = null;

  const onMessage = (store, payload) => {
    // const payload = JSON.parse(event.data);
    console.log("receiving server message", payload);

    switch (payload.type) {
      case socketEvents.NEW_CHAT_MESSAGE:
        console.log("indside middleware redupauloaddgame id", payload);
        store.dispatch(updateCurrentChat(payload.data));
        if (payload.data) {
          const userId = store.getState().profile.profile.userId;
          console.log("s-s-s>>>>>>>>>>>>>>>>>auserId>>>", userId);

          if (userId) {
            const receiver = payload.data.members.find((member) => member._id !== userId)
            store.dispatch(resetChat());
            store.dispatch(setChat({
              open: true,
              receiverId: receiver._id
            }));
          }
        }
        break;
      // case socketEvents.NEW_MATCH:
      //   console.log("indside middleware reducer to set game id");
      //   // store.dispatch(fetchMatch_Addresses());
      //   break;
      // case socketEvents.START_MATCH:
      //   console.log("START_MATCH");
      //   // store.dispatch(handleMatchStart(payload.data));
      //   break;
      default:
        break;
    }
  };

  return (store) => (next) => (action) => {
    // const userId = store.getState().socket.userId;
    const userId = store.getState().profile.profile.userId;
    console.log("s-s-s>>>>>>>>>>>>>>>>>auserId>>>", userId);
    switch (action.type) {
      case socketEvents.WS_CONNECT:
        console.log("s-s-s>>>>>>>>>>>>>>>>>action type>>>", action.type);
        if (socket !== null) {
          socket.close();
        }

        // connect to the remote host
        socket = io(SOCKET_URL, {
          transports: ["websocket", "polling", "flashsocket"],
        });
        console.log("WebSocket created in Middleware!");
        // socket = new WebSocket(action.host);

        // websocket handlers
        // store.dispatch(actions.wsConnect());
        socket.on("connect", () => {
          socket.emit(socketEvents.JOIN, userId);
          // socket.emit(socketEvents.RequestAllMessages);
        });
        socket.on(socketEvents.RECEIVE_MESSAGE, (data) => {
          console.log("set game id req received", data);
          onMessage(store, data);
        });
        break;
      case socketEvents.WS_DISCONNECT:
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        // store.dispatch(actions.wsDisconnect());
        console.log("websocket closed");
        break;
      case socketEvents.SEND_MESSAGE:
        console.log("sending a message", action);
        socket.emit(socketEvents.NEW_MESSAGE, action.payload);
        break;
      default:
        console.log("the next action:", action);
    }
    next(action);
  };
};

export default socketMiddleware();
