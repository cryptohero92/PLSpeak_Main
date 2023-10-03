import { Box, Button, Divider, Grid, IconButton, Skeleton, Stack, TextField, Typography } from "@mui/material";
import apiRequest from "../../Service/auth";
import React, { useEffect, useRef, useState } from "react";
import UserAvatar from "../UserAvatar";
import { useDispatch, useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { capitalizeFirstLetter } from "../../helpers/functions";
// import { useUserStore } from "@augurproject/comps";
// import MentionInput from "../MentionInput";
import FileUpload from "../FileUpload";
import SendIcon from "@mui/icons-material/Send";
// import btnStyles from "modules/common/buttons.styles.less";
import moment from "moment";
import { getMessages, sendMessage } from "../../store/chat/chatActions";

import CloseIcon from '@mui/icons-material/Close';
import { resetChat} from "../../store/chat/chatReducers";
import { useTheme } from "@mui/material/styles";


export default function ChatBox() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const lastMessageRef = useRef();
  const chatObj = useSelector((state) => state.chat.chatObj);
  const messages = useSelector((state) => state.chat.currentChat.messages);
  // const { account, loginAccount, userAccount } = useUserStore();
  const [receiverProfile, setReceiverProfile] = useState(null);
  const [message, setMessage] = useState("");
  const [value, setValue] = React.useState("");
  const [attachments, setAttachments] = React.useState([]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const userAccount = useSelector((state) => state.profile.profile)
  const getProfile = async (userId) => {
    const response = await apiRequest({
      url: `users/profile/${userId}`,
      method: "GET",
    });
    if (response.success) {
      setReceiverProfile(response.data);
    }
  };

  const sendMsg = async () => {
    if (!message) return;
    // @ignore-ts-error
    dispatch(
      // @ignore-ts-error
      sendMessage({
        // @ignore-ts-error
        msg: {
          message,
          receiverId: receiverProfile.userId,
        },
        cb: () => {
          setMessage("");
        },
      })
    );
  };

  useEffect(() => {
    if (chatObj.open) {
      getProfile(chatObj.receiverId);
      dispatch(getMessages(chatObj.receiverId))
    }
  }, [chatObj.open, chatObj.receiverId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    chatObj.open && (
      <span>
        <Box>
          <Box
            position={"absolute"}
            bgcolor={"background.default"}
            height={window.innerHeight / 1.5}
            width={window.innerWidth / 5}
            bottom={0}
            right={10}
            sx={{ borderRadius: 2,boxShadow: 5 }}
          >
            <Stack spacing={2} height={"100%"} justifyContent={"space-between"} position={"relative"} p={2}>
              <Stack spacing={1}>
                {receiverProfile ? (
                  <Stack direction="row" alignItems={"center"} justifyContent={"space-between"}>
                    {" "}
                    <UserAvatar
                      src={receiverProfile.profile}
                      text={receiverProfile.userName}
                      userId={receiverProfile.userId}
                    />
                    <Typography fontSize={16}
                    sx={{                color: theme.palette.mode === "dark" ? "#fff" : "#000",
                  }}>{capitalizeFirstLetter(receiverProfile.userName)}</Typography>
                    <IconButton aria-label="close chat" onClick={() => {dispatch(resetChat());
                    }} >
                      <CloseIcon />
                    </IconButton>
                  </Stack>
                ) : (
                  <Stack direction={"row"} spacing={2} marginTop={3}>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="text" width={"100%"} sx={{ fontSize: "1rem" }} />
                  </Stack>
                )}
                <Divider style={{ width: "100%" }} />
              </Stack>

              <Stack height={"100%"} overflow={"scroll"} justifySelf={"flex-start"} id="scroll">
                {receiverProfile ? (
                  <Grid container spacing={2} pb={2}>
                    {messages.map((message, idx) => {
                      if (idx === 0) lastMessageRef.current = undefined;
                      let showAvatar = lastMessageRef.current
                        ? lastMessageRef.current.senderId._id !== message.senderId._id
                        : true;
                      lastMessageRef.current = message;
                      return message.senderId._id === userAccount.userId ? (
                        <Grid item xs={12}>
                          <Stack spacing={2} direction="row" justifyContent={"flex-end"}> 
                            <Box
                              sx={{
                                background:  "#ab00fb",
                                border: "1px solid #e8e8e8",
                                borderRadius: "20px 0px 20px 20px",
                                boxShadow: 1,
                              }}
                              p={1}
                              pl={2}
                              pr={2}
                            >
                              <Stack>
                                <Typography sx={{wordBreak:'break-all'}}  color={"#fff"}  fontSize={16}>
                                  {message.message}
                                </Typography>
                                <Typography textAlign={"right"} fontSize={10}   color={"#fff"} >
                                  {moment(message.createdAt).fromNow()}
                                </Typography>
                              </Stack>
                            </Box>
                            <UserAvatar
                              src={userAccount.profile}
                              text={userAccount.userName}
                              userId={userAccount.userId}
                              style={{ opacity: showAvatar ? 1 : 0 }}
                            />
                          </Stack>
                        </Grid>
                      ) : (
                        <Grid item xs={12}>
                          <Stack spacing={2} direction={"row"} >
                          <UserAvatar
                              src={receiverProfile.profile}
                              text={receiverProfile.userName}
                              userId={receiverProfile.userId}
                              style={{ opacity: showAvatar ? 1 : 0 }}
                            />
                            <Box
                              
                              sx={{
                                background: "#f6f8fa",
                                border: "1px solid #e8e8e8",
                                borderRadius: "0px 20px 20px 20px",
                                boxShadow: 1,
                              }}
                              p={1}
                              pl={2}
                              pr={2}
                            >
                              <Stack>
                                <Typography sx={{wordBreak:'break-all'}} color={"#575757"} fontSize={16}>
                                  {message.message}
                                </Typography>
                                <Typography textAlign={"left"} fontSize={10}  color={"#868686"}>
                                  {moment(message.createdAt).fromNow()}
                                </Typography>
                              </Stack>
                            </Box>
                            
                          </Stack>
                        </Grid>
                      );
                    })}
                    <span ref={messagesEndRef} />
                  </Grid>
                ) : (
                  <Grid container>
                    <Grid item xs={12}>
                      <Stack>
                        <Stack direction={"row"} spacing={2} marginTop={3}>
                          <Skeleton variant="circular" width={40} height={40} />
                          <Skeleton variant="text" width={"100%"} sx={{ fontSize: "1rem" }} />
                        </Stack>
                        <Stack direction={"row"} spacing={2} marginTop={3}>
                          <Skeleton variant="text" width={"100%"} sx={{ fontSize: "1rem" }} />
                          <Skeleton variant="circular" width={40} height={40} />
                        </Stack>
                      </Stack>
                    </Grid>
                  </Grid>
                )}
              </Stack>
              <Stack >
                <Divider style={{ width: "100%" }} />
                <Stack direction={"row"}
                //  borderTop="1px solid #e8e8e8"
                 padding={3}
                 display="flex"
                 alignItems="center"  
                >
                 
                  <TextField
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        sendMsg()
                      }
                    }}
                    fullWidth
                    size="small"
                    id="outlined-basic"
                    label="Send message..."
                    variant="outlined"
                  />
                  <IconButton onClick={sendMsg}>
                    <SendIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </span>
    )
  );
}
