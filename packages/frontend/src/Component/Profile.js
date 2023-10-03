import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  Fade,
  Grid,
  IconButton,
  InputBase,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { alpha, styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import CameraIcon from "@mui/icons-material/Camera";
import girl from "../assets/Girl.png";
import shark from "../assets/shark.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ShareIcon from "@mui/icons-material/Share";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import { green, pink } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import Backdrop from "@mui/material/Backdrop";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
// import { capitalizeFirstLetter } from "../helpers/functions";
import Email from "../assets/email.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Whatsapp from "../assets/whatsapp.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import apiRequest, { cookies } from "../Service/auth";
import moment from "moment";
import { resetChat, setChat } from "../store/chat/chatReducers";
import { CLIENT_FQDN, FILE_SERVER_URL } from "../constants/portConstants";
import { resetModal } from "../store/modal/modalReducers";
import FileUpload from "./FileUpload";
import UserAvatarGroup from "./UserAvatarGroup";
import { capitalizeFirstLetter } from "../helpers/functions";
import UserAvatar from "./UserAvatar";
import ImageShuffle from "./ImageShuffle";
import { getProfile } from "../store/profile/profileActions";
import MyProfile from "./MyProfile";
import ChatBox from "./ChatBox";
import CommentCard from "./CommentsCard";
import Skeleton from "@mui/material/Skeleton";
import CardMedia from "@mui/material/CardMedia";
import PropTypes from "prop-types";
import ShareModel from "./shareModel";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import Eth from "../assets/Eth.png";

const teams = [
  {
    id: 1,
    question: "Which team will win?",
    team: "ABC vs DEF",
  },
  {
    id: 2,
    question: "Which team will win?",
    team: "GHI vs JKL",
  },
  {
    id: 3,
    question: "Which team will win?",
    team: "MNO vs PQR",
  },
  {
    id: 4,
    question: "Which team will win?",
    team: "STU vs VWX",
  },
  {
    id: 5,
    question: "Which team will win?",
    team: "YZS vs NYJ",
  },
  {
    id: 6,
    question: "Which team will win?",
    team: "JAX vs NYJ",
  },
];
function Media(props) {
  const { loading = false } = props;

  return (
    <Stack sx={{ maxWidth: "100%" }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar
              alt="Ted talk"
              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={20}
              width="100%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            "Ted"
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            "5 hours ago"
          )
        }
      />
    </Stack>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    position: "relative",
    // backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1e1e1e",
    border: "0px solid #ced4da",
    borderRadius: 50,
    fontSize: 16,
    padding: "10px 12px",
    height: "20px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: ["-apple-system", "BlinkMacSystemFont"].join(","),
    // '&:focus': {
    //     boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    //     borderColor: theme.palette.primary.main,
    // },
  },
}));

const Profile = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [shareOpen, setShareOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleShareClose = () => setShareOpen(false);
  const [showFirstCard, setShowFirstCard] = useState(true);
  const navigate = useNavigate();
  const [attachments, setAttachments] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [postLists, setPostLists] = useState([]);
  const [users, setUsers] = React.useState([]);
  const [userId, setUserId] = React.useState(null);
  const [postId, setPostId] = React.useState(null);

  console.log("userId--->>>>>>>>>>", userId);
  const toggleCards = () => {
    setShowFirstCard(!showFirstCard);
  };

  const [userProfile, setUserProfile] = React.useState(null);
  const dispatch = useDispatch();

  const inputStyle = {
    fontFamily: "'Poppins', sans-serif",
  };
  //   const getProfile = async (userId) => {
  //     const response = await apiRequest({
  //       url: `users/profile/${userId}`,
  //       method: "GET",
  //     });
  //     if (response.success) {
  //       setUserProfile(response.data);
  //     }
  //   };
  const createPost = async () => {
    setLoading(true);
    const response = await apiRequest({
      url: "post/create",
      method: "POST",
      data: {
        text: value,
        attachments,
      },
    });
    setLoading(false);
    if (response.success) {
      setValue("");
      setAttachments([]);
      getPosts();

      // setPostLists(response.data);
    }
  };

  const getPosts = async () => {
    setLoading(true);
    const response = await apiRequest({
      url: "post/getAll",
      method: "GET",
    });
    setLoading(false);
    if (response.success) {
      setPostLists(response.data);
    }
  };
  const like = async (id) => {
    setLoading(true);
    const response = await apiRequest({
      url: "post/like",
      method: "POST",
      data: { postId: id },
    });
    setLoading(false);
    if (response.success) {
      getPosts();
      // setPostLists(response.data);
    }
  };
  const disLike = async (id) => {
    setLoading(true);
    const response = await apiRequest({
      url: "post/dislike",
      method: "POST",
      data: { postId: id },
    });
    setLoading(false);
    if (response.success) {
      getPosts();
      // setPostLists(response.data);
    }
  };
  const user = useSelector((state) => state.profile.profile);
  console.log("user--->>>>>>>>>>");
  useEffect(() => {
    getPosts();
  }, []);

  React.useEffect(() => {
    if (cookies.get("SID")) dispatch(getProfile());
  }, []);
  // React.useEffect(() => {
  //     if (modalObj.open) {
  //         getProfile(modalObj.props.userId);
  //     } else {
  //         setUserProfile(profile);
  //     }
  // }, [modalObj]);
  const getUsers = async () => {
    const response = await apiRequest({
      url: "users/getAll",
      method: "GET",
    });
    if (response.success) {
      setUsers(response.data);
    }
  };

  React.useEffect(() => {
    getUsers();
    // dispatch(getProfile());
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item sx={12} md={3}>
          <Box
            boxShadow={3}
            sx={{
              p: { xs: 2, md: 2 },
              borderRadius: "8px",
              bgcolor: theme.palette.mode === "dark" ? "#262c42" : "#ffffff",
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                fontStyle: "normal",
                fontFamily: "'Poppins', sans-serif",
                // color: "#858383"
                fontSize: 17,
                lineHeight: "1.6",

                color: theme.palette.mode === "dark" ? "#fff" : "#000",
              }}
            >
              Recommended Markets
            </Typography>
            {/* <Media loading />
            <Media loading />
            <Media loading />
            <Media loading />
            <Media loading /> */}
            {teams.map((team) => {
              return (
                <Stack
                  sx={{ cursor: "pointer" }}
                  direction={"row"}
                  marginTop={2}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  onClick={() => navigate(`/detail/${team.id}`)}
                >
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Stack>
                      {/* <CheckBoxOutlineBlankIcon sx={{ fontSize: 35 }} /> */}
                      <Avatar
                        src={Eth}
                        sx={{
                          width: { xs: 30, md: "33px" },
                          height: { xs: 30, md: "33px" },
                        }}
                      />
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "17px",
                          fontStyle: "normal",
                          fontFamily: "'Poppins', sans-serif",
                          // color: "#858383"
                          color:
                            theme.palette.mode === "dark" ? "#fff" : "#000",
                        }}
                      >
                        {team.question}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "12px",
                          fontStyle: "normal",
                          fontFamily: "'Poppins', sans-serif",
                          color: "#9FA2AF",
                        }}
                      >
                        {team.team}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack>
                    <MoreVertIcon
                      sx={{
                        color: theme.palette.mode === "dark" ? "#fff" : "#000",
                        fontSize: 25,
                      }}
                    />
                  </Stack>
                </Stack>
              );
            })}
            {/* <Stack
              direction={"row"}
              marginTop={2}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Stack>
                  <CheckBoxOutlineBlankIcon sx={{ fontSize: 35 }} />
                </Stack>
                <Stack>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                      // color: "#858383"
                    }}
                  >
                    which team will win?
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                      color: "#9FA2AF",
                    }}
                  >
                    JAX vs NYJ
                  </Typography>
                </Stack>
              </Stack>

              <Stack>
                <MoreVertIcon sx={{ fontSize: 25 }} />
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              marginTop={2}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Stack>
                  <CheckBoxOutlineBlankIcon sx={{ fontSize: 35 }} />
                </Stack>
                <Stack>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                      // color: "#858383"
                    }}
                  >
                    which team will win?
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                      color: "#9FA2AF",
                    }}
                  >
                    JAX vs NYJ
                  </Typography>
                </Stack>
              </Stack>

              <Stack>
                <MoreVertIcon sx={{ fontSize: 25 }} />
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              marginTop={2}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Stack>
                  <CheckBoxOutlineBlankIcon sx={{ fontSize: 35 }} />
                </Stack>
                <Stack>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                      // color: "#858383"
                    }}
                  >
                    which team will win?
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                      color: "#9FA2AF",
                    }}
                  >
                    JAX vs NYJ
                  </Typography>
                </Stack>
              </Stack>

              <Stack>
                <MoreVertIcon sx={{ fontSize: 25 }} />
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              marginTop={2}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Stack>
                  <CheckBoxOutlineBlankIcon sx={{ fontSize: 35 }} />
                </Stack>
                <Stack>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                      // color: "#858383"
                    }}
                  >
                    which team will win?
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                      color: "#9FA2AF",
                    }}
                  >
                    JAX vs NYJ
                  </Typography>
                </Stack>
              </Stack>

              <Stack>
                <MoreVertIcon sx={{ fontSize: 25 }} />
              </Stack>
            </Stack>
            <Stack
              direction={"row"}
              marginTop={2}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Stack>
                  <CheckBoxOutlineBlankIcon sx={{ fontSize: 35 }} />
                </Stack>
                <Stack>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "17px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                      // color: "#858383"
                    }}
                  >
                    which team will win?
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                      color: "#9FA2AF",
                    }}
                  >
                    JAX vs NYJ
                  </Typography>
                </Stack>
              </Stack>

              <Stack>
                <MoreVertIcon sx={{ fontSize: 25 }} />
              </Stack>
            </Stack> */}
            <Stack
              marginTop={3}
              alignItems={"end"}
              style={{ cursor: "pointer" }}
            >
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontFamily: "'Poppins', sans-serif",
                  color: "#9FA2AF",
                }}
              >
                See more...
              </Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            height: "calc(110vh)",
            overflow: "scroll",
            scrollbarWidth: "none",
          }}
        >
          <Stack spacing={2}>
            <Box
              boxShadow={3}
              // style={{paddingTop:'unset'}}
              style={{
                marginRight: 1,
                // paddingTop:'unset'
              }}
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: "12px",
                bgcolor: theme.palette.mode === "dark" ? "#262c42" : "#ffffff",
              }}
            >
              <Grid xs={12}>
                <Stack
                  direction={"row"}
                  spacing={2}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Avatar
                    sx={{
                      width: { xs: 38, md: "44px" },
                      height: { xs: 38, md: "44px" },
                    }}
                    src={FILE_SERVER_URL + user?.profile}
                  ></Avatar>
                  <BootstrapInput
                    sx={{ width: { xs: "auto", md: 700 }, height: "33px" }}
                    placeholder="Write something about you..."
                    id="bootstrap-input"
                    // style={inputStyle}
                    style={{ fontFamily: "Poppins" }}
                     onChange={(e) => setValue(e.target.value)} // Update the state on input change
                     value={value} // Bind the input value to the state

                  />
                </Stack>
                <Stack marginTop={6}>
                  <Stack sx={{ width: { xs: "100%", md: "25%" } }}>
                    <FileUpload
                      multiple={true}
                      colorTheme={theme}
                      onChange={(files, multiple) => {
                        setAttachments(files);
                      }}
                    />
                  </Stack>
                </Stack>
                <Stack py={1}>
                  <Button
                    endIcon={
                      loading ? <CircularProgress size="sm" /> : <SendIcon />
                    }
                    onClick={createPost}
                    variant="contained"
                    sx={{
                      borderRadius: "2px",
                      // fontWeight: "400",
                      // fontSize: "15px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                      color: "#fff",
                      my: { xs: 1, md: "none" },
                      height: { xs: "20px", md: "40px" },
                      // width: { xs: "50px", md: "109px" },

                      background:
                        "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                    }}
                  >
                    Speak
                  </Button>
                </Stack>
              </Grid>
            </Box>
            {postLists.map((post) => {
              console.log("post.attachments", post.attachments);
              return (
                <>
                  {showFirstCard || postId != post._id ? (
                    <Box
                      boxShadow={3}
                      style={{
                        marginRight: 1,
                      }}
                      sx={{
                        p: { xs: 2, md: 2 },
                        borderRadius: "8px",
                        bgcolor:
                          theme.palette.mode === "dark" ? "#262c42" : "#ffffff",
                      }}
                    >
                      <Grid xs={12}>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                        >
                          {/* <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={1}
                          > */}
                          {/* <Avatar
                              alt="Remy Sharp"
                              src={girl}
                              sx={{
                                width: { xs: 38, md: 52 },
                                height: { xs: 38, md: 52 },
                              }}
                            /> */}
                          {post.createdBy && (
                            <CardHeader
                              avatar={
                                post.createdBy ? (
                                  <UserAvatar
                                    userId={post.createdBy._id}
                                    setModalOpen={setModalOpen}
                                    modalOpen={modalOpen}
                                    text={post.createdBy.userName}
                                    src={post.createdBy.profile?.filename}
                                  />
                                ) : null
                              }
                              // action={
                              //   <IconButton aria-label="settings">
                              //     <MoreVertIcon />
                              //   </IconButton>
                              // }
                              title={
                                post.createdBy
                                  ? capitalizeFirstLetter(
                                      post.createdBy.userName
                                    )
                                  : "N/A"
                              }
                              style={{
                                color:
                                  theme.palette.mode === "dark"
                                    ? "#fff"
                                    : "#000",
                              }}
                              subheader={
                                post.createdAt
                                  ? moment(post.createdAt).fromNow()
                                  : "N/A"
                              }
                            />
                          )}
                          {/* <Stack>
                              <Typography color="#9FA2AF" fontSize={"14px"}>
                                {post.createdBy.userName}
                              </Typography>
                              <Typography fontSize={"12px"}>
                                {moment(post.createdAt).fromNow()}
                              </Typography>
                            </Stack> */}
                          {/* </Stack> */}

                          <Stack>
                            <MoreVertIcon
                              sx={{
                                color:
                                  theme.palette.mode === "dark"
                                    ? "#fff"
                                    : "#000",
                                fontSize: 25,
                              }}
                            />
                          </Stack>
                        </Stack>
                        <Stack py={1} sx={{ px: 2 }}>
                          <Typography
                            fontSize={"14px"}
                            sx={{
                              color:
                                theme.palette.mode === "dark" ? "#fff" : "#000",
                            }}
                          >
                            {post.text}
                          </Typography>
                          {post.attachments.length > 0 && (
                            <CardContent>
                              <ImageShuffle images={post.attachments} />
                            </CardContent>
                          )}
                        </Stack>
                        <Stack
                          // marginTop={6}
                          sx={{ px: 2 }}
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                        >
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={1}
                          >
                            {/* <Avatar
                              alt="Remy Sharp"
                              src={girl}
                              sx={{
                                width: { xs: 38, md: 52 },
                                height: { xs: 38, md: 52 },
                              }}
                            /> */}
                            <Stack>
                              {post.likedBy.length > 0 ? (
                                <UserAvatarGroup
                                  isLike={true}
                                  users={post.likedBy.map((lb) => {
                                    return {
                                      text: lb.userName,
                                      src: lb.profile?.filename,
                                      userId: lb._id,
                                    };
                                  })}
                                  max={4}
                                />
                              ) : (
                                <Typography
                                  variant="body1"
                                  color="text.secondary"
                                >
                                  0 Likes
                                </Typography>
                              )}
                            </Stack>
                          </Stack>
                          <Stack>
                            {post.disLikedBy.length > 0 ? (
                              <UserAvatarGroup
                                // isLike={true}
                                isDisLike={true}
                                users={post.disLikedBy.map((lb) => {
                                  return {
                                    text: lb.userName,
                                    src: lb.profile?.filename,
                                    userId: lb._id,
                                  };
                                })}
                                max={4}
                              />
                            ) : (
                              <Typography
                                variant="body1"
                                color="text.secondary"
                              >
                                0 DisLikes
                              </Typography>
                            )}
                          </Stack>
                          <Stack direction={"row"} spacing={2}>
                            <Avatar
                              sx={{
                                background:
                                  "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                              }}
                              onClick={() => like(post._id)}
                            >
                              <ThumbUpIcon
                                sx={{ fontSize: 25, cursor: "pointer" }}
                              />
                            </Avatar>
                            <Avatar
                              sx={{
                                background:
                                  "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                              }}
                              onClick={() => disLike(post._id)}
                            >
                              <ThumbDownAltIcon
                                sx={{ fontSize: 25, cursor: "pointer" }}
                              />
                            </Avatar>
                            {/* <Avatar
                              sx={{
                                background:
                                  "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                              }}
                            >
                              <ShareIcon
                                onClick={handleOpen}
                                sx={{ fontSize: 25, cursor: "pointer" }}
                              />
                            </Avatar> */}
                            <Avatar
                              sx={{
                                background:
                                  "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                              }}
                            >
                              <InsertCommentIcon
                                onClick={() => {
                                  toggleCards();
                                  setPostId(post._id);
                                }}
                                sx={{ fontSize: 25, cursor: "pointer" }}
                              />
                            </Avatar>
                            <Avatar
                              sx={{
                                background:
                                  "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                              }}
                            >
                              <ShareIcon
                                onClick={() => {
                                  setShareOpen(true);
                                  setPostId(post._id);
                                  setMsg(post.text);
                                }}
                                sx={{ fontSize: 25, cursor: "pointer" }}
                              />
                            </Avatar>
                            {/* <ShareModel
                              link={`${CLIENT_FQDN}/#!/post?id=${post._id}`}
                              marketId={post._id}
                              modalTitle={"Share post"}
                              msg={post.text}
                              open={shareOpen}
                              setOpen={setShareOpen}
                            /> */}
                          </Stack>
                        </Stack>
                      </Grid>
                    </Box>
                  ) : (
                    <CommentCard
                      _id={postId}
                      colorTheme={theme}
                      setShowFirstCard={() => setShowFirstCard(!showFirstCard)}
                    />
                  )}
                </>
              );
            })}
          </Stack>
        </Grid>
        <Grid item sx={12} md={3}>
          <Typography
            color={theme.palette.mode === "dark" ? "#fff" : "#000"}
            sx={{
              fontWeight: "600",
              fontSize: 17,
              lineHeight: "1.6",
            }}
          >
            My Profile
          </Typography>
          <Box padding={1} marginTop={1}>
            <img
              height={"300px"}
              width={"100%"}
              src={FILE_SERVER_URL + user?.profile}
            />

            <Stack spacing={1} marginTop={3}>
              <Typography
                fontSize={"15px"}
                color={theme.palette.mode === "dark" ? "#fff" : "#000"}
              >
                {user?.userName}
              </Typography>
              <Typography
                fontSize={"13px"}
                color={theme.palette.mode === "dark" ? "#fff" : "#000"}
              >
                @{user?.userName}
              </Typography>
              <Typography
                fontSize={"11px"}
                color={theme.palette.mode === "dark" ? "#fff" : "#000"}
              >
                {moment(user?.createdAt).fromNow()}
              </Typography>
            </Stack>
          </Box>

          <Box
            boxShadow={3}
            sx={{
              padding: 1,
              bgcolor: theme.palette.mode === "dark" ? "#262c42" : "#ffffff",
              borderRadius: 3,
              height: "calc(45vh)",
              overflow: "scroll",
              scrollbarWidth: "none",
            }}
          >
            <Typography
              padding={2}
              sx={{
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
              }}
            >
              New people
            </Typography>
            {users.map((user) => {
              return (
                <>
                  <Stack
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleOpen();
                      setUserId(user.userId);
                    }}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      spacing={1}
                      padding={2}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={FILE_SERVER_URL + user.profile}
                        sx={{
                          width: { xs: 38, md: 52 },
                          height: { xs: 38, md: 52 },
                        }}
                      />
                      <Stack>
                        <Typography
                          sx={{
                            color:
                              theme.palette.mode === "dark" ? "#fff" : "#000",
                          }}
                        >
                          {user.userName}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack>
                      {/* <MyProfile /> */}
                      <MoreVertIcon
                        sx={{
                          fontSize: 25,
                          color:
                            theme.palette.mode === "dark" ? "#fff" : "#000",
                        }}
                      />
                    </Stack>
                  </Stack>
                  <Divider />
                </>
              );
            })}
          </Box>
        </Grid>
      </Grid>

      <Modal
        open={shareOpen}
        onClose={setShareOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 450,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            bgcolor: theme.palette.mode === "dark" ? "#262c42" : "#E5E5E5",
          }}
        >
          <Stack
            direction={"row"}
            width={"100%"}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            padding={1}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
              }}
            >
              Share post
            </Typography>
            <CloseOutlinedIcon
              onClick={handleShareClose}
              sx={{
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
                fontSize: "30px",
                cursor: "pointer",
              }}
            />
          </Stack>
          <Divider />
          <Stack spacing={3} marginTop={2}>
            {/* <div style={{ fontSize: 14 }}>Message: {msg}</div> */}
            <div
              style={{
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
                fontSize: 14,
              }}
            >
              Message : {msg}
            </div>
            <div className="m-2 mt-4 mb-4">
              <TextField
                // className={`${Styles["input-style"]}`}
                fullWidth
                value={`${CLIENT_FQDN}/#!/post?id=${postId}`}
              />
            </div>
            <div className="d-flex gap-3 justify-content-end">
              <Stack
                spacing={2}
                direction={"row"}
                display={"flex"}
                justifyContent={"end"}
              >
                <FacebookShareButton
                  url={`${CLIENT_FQDN}/#!/post?id=${postId}`}
                  title={`Checkout my comment: ${msg}`}
                  // quote={msgTitle}
                  className="Demo__some-network__share-button"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <WhatsappShareButton
                  url={`${CLIENT_FQDN}/#!/post?id=${postId}`}
                  title={`Checkout my comment: ${msg}`}
                  // title={msgTitle}
                  className="Demo__some-network__share-button"
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>

                <TwitterShareButton
                  url={`${CLIENT_FQDN}/#!/post?id=${postId}`}
                  title={`Checkout my comment: ${msg}`}
                  // title={msgTitle}
                  className="Demo__some-network__share-button"
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>

                <EmailShareButton
                  url={`${CLIENT_FQDN}/#!/post?id=${postId}`}
                  title={`Checkout my comment in plspeak`}
                  // subject={msgTitle}
                  body={msg}
                  className="Demo__some-network__share-button"
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
              </Stack>
            </div>
          </Stack>
        </Box>
      </Modal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            borderRadius: 3,
            transform: "translate(-50%, -50%)",
            width: 350,
            // bgcolor: 'background.paper',
            // border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            bgcolor: theme.palette.mode === "dark" ? "#262c42" : "#E5E5E5",
          }}
        >
          {userId && (
            <MyProfile
              colorTheme={theme}
              profile={userId}
              handleClose={handleClose}
            />
          )}
        </Box>
      </Modal>

      <ChatBox />
    </>
  );
};

export default Profile;
