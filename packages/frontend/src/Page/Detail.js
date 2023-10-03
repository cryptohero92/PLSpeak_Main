import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import {
  Card,
  Container,
  Grid,
  Typography,
  Stack,
  Avatar,
  Divider,
  Button,
  Box,
  Paper,
  TextField,
  Modal,
} from "@mui/material";
import Popover from "@mui/material/Popover";
import Eth from "../assets/Eth.png";
import Charts from "../Component/chart";
import set from "../assets/setting.png";
import whale from "../assets/whale.png";
import shark from "../assets/shark.png";
import trutle from "../assets/pngwing.com.png";
import arow from "../assets/arow.png";
import girl from "../assets/Girl.png";
import List from "../assets/List.svg";
import liked from "../assets/like.png";
import InputBase from "@mui/material/InputBase";
import like from "../assets/like1.png";
import share from "../assets/share1.png";
import save from "../assets/save.png";
import comment from "../assets/commen.png";
import ellis from "../assets/ellis.png";
import eli from "../assets/Ellipse.png";
import InputAdornment from "@mui/material/InputAdornment";
import { alpha, styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Midle from "../assets/midle.png";
import Position from "../Component/Position";
import Transactions from "../Component/Transactions";
import { useTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import apiRequest from "../Service/auth";
import UserAvatar from "../Component/UserAvatar";
import { capitalizeFirstLetter } from "../helpers/functions";
import moment from "moment";
import CustomModal from "../Component/customModal";
import { useSelector } from "react-redux";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const useStyles = makeStyles({
  Type: {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "18px",
  },
  Header: {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "22px",
    lineHeight: "25px",
  },
  Tap: {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "21px",
  },
  position: {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "18px",
  },
});
const badges = [
  {
    id: 1,
    image: whale,
    name: "Whale",
    padding: "10px",
    color: "#367a9e",
    imageProps: {
      width: "18",
      height: "18",
    },
  },
  {
    id: 2,
    image: shark,
    name: "Shark",
    padding: "6px",
    color: "#44a1e3",
    imageProps: {
      width: "16",
      height: "16",
    },
  },
  {
    id: 3,
    image: trutle,
    name: "Turtle",
    padding: "1px",
    color: "#6fc152",
    imageProps: {
      width: "14",
      height: "14",
    },
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Stack
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Stack>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ariaLabel = { "aria-label": "description" };

const data = [
  { xValue: "22", accountBalance: 5, totalEarnings: 5 },
  { xValue: "Dec", accountBalance: 2, totalEarnings: 10 },
  { xValue: "8", accountBalance: 18, totalEarnings: 12 },
  { xValue: "15", accountBalance: 17, totalEarnings: 14 },
  { xValue: "22", accountBalance: 16, totalEarnings: 15 },
  { xValue: "2022", accountBalance: 15, totalEarnings: 17 },
  { xValue: "8", accountBalance: 14, totalEarnings: 19 },
  { xValue: "15", accountBalance: 13, totalEarnings: 22 },
  { xValue: "Today", accountBalance: 12, totalEarnings: 24 },
  { xValue: "Feb", accountBalance: 11, totalEarnings: 26 },
  { xValue: "8", accountBalance: 10, totalEarnings: 29 },
  { xValue: "15", accountBalance: 5, totalEarnings: 30 },
];

let dataKeys = [
  {
    name: "Account balance",
    dataKey: "accountBalance",
    stroke: "#8884d8",
    dot: false,
    type: "monotone",
  },
  {
    name: "Total earnings",
    dataKey: "totalEarnings",
    stroke: "#82ca9d",
    dot: false,
    type: "monotone",
  },
];
const filters = [
  {
    name: "30D",
    isActive: false,
  },
  {
    name: "60D",
    isActive: false,
  },
  {
    name: "90D",
    isActive: true,
  },
  {
    name: "1Y",
    isActive: false,
  },
  {
    name: "All Time",
    isActive: false,
  },
];
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
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
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
const Detail = () => {
  const [value, setValue] = React.useState(0);
  const [currentBadge, setCurrentBadge] = React.useState(null);
  const [replyMessageId, setReplyMessageId] = useState(null);
  const [replyMsg, setReplyMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [editMsg, setEditMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [profile, setProfile] = useState(null);

  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [marketNotFound, setMarketNotFound] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editCommentId, setEditCommentId] = useState(false);
  const [selectIndex, setSelectIndex] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [postModel, setPostmodel] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const [shareMessage, setShareMessage] = useState("");
  const [shareMarketId, setShareMarketId] = useState("");
  const userAccount = useSelector((state) => state.profile.profile);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const opens = Boolean(anchorEl);
  const id = opens ? "simple-popover" : undefined;
  const onShare = (msg, marketId) => {
    console.log("test", msg);
    setShareMessage(msg);
    setShareMarketId(marketId);
    setShareOpen(!shareOpen);
  };

  const closeButton = () => {
    setOpen(!open);
  };
  const seletedIndex = (e, i) => {
    setOpen(true);
    // setEditMsg(e.message);
    // setEditCommentId(e._id);
    // setSelectIndex(e);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [values, setValues] = React.useState({
    numberformat: "1320",
  });

  const handleInputChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const classes = useStyles();
  const theme = useTheme();
  const params = useParams();
  const getMessages = async () => {
    const response = await apiRequest({
      url: "messages/get/" + params.id,
      method: "GET",
    });
    if (response.success) {
      const nest = (items = [], _id = null, link = "replyMessageId") =>
        items
          .filter((item) => item[link] === _id)
          .map((item) => ({ ...item, children: nest(items, item._id) }));
      setMessages(nest(response.data));
    }
  };
  const createMessage = async (msg, replyMessageId = true) => {
    const response = await apiRequest({
      url: "message/create",
      method: "POST",
      data: {
        marketId: params.id,
        message: msg,
        replyMessageId,
        badgeId: currentBadge,
      },
    });

    if (response.success) {
      getMessages();
      setMessage("");
      setReplyMsg("");
      setReplyMessageId(null);
    }
  };
  const likeMessage = async (messageId) => {
    const response = await apiRequest({
      url: "message/like",
      method: "POST",
      data: { messageId },
    });

    if (response.success) {
      getMessages();
    }
  };
  const updateMessage = async (messageId) => {
    const response = await apiRequest({
      url: "message/update",
      method: "POST",
      data: {
        message: editMsg,
        messageId,
        marketId: params.id,
      },
    });
    if (response.success) {
      setOpen(false);
      getMessages();
      setEditMsg("");
    }
  };

  const deleteMessage = async (messageId) => {
    const response = await apiRequest({
      url: "message/delete",
      method: "DELETE",
      data: { messageId },
    });
    if (response.success) {
      handleClose();
      getMessages();
      // setMessage("")
    }
  };
  const postModelClose = (value) => {
    console.log("ttttttttt", open);
    if (value === true) {
      setPostmodel(true);
      // setOpen(false)
    } else {
      setOpen(false);
      setIsEditing(false);
      // setText("");
      // setFiles([])
      // setPostmodel(false)
    }
  };
  useEffect(() => {
    const getUser = async () => {
      let userId = await localStorage.getItem("userId");
      if (userId) setUserId(userId);
      let profile = await localStorage.getItem("profile");
      if (profile) setProfile(profile);
    };
    getUser();
  }, []);

  useEffect(() => {
    getMessages();
  }, []);

  function confirmAction() {
    if (window.confirm("You want to delete ?")) {
      deleteMessage(editCommentId);
    }
  }
  console.log("params--------->>>>>>>>>>", params.id);

  const renderMessage = (msg, i) => {
    console.log("renderMessage", msg);

    const badge = badges.find((b) => b.id === msg.badgeId);
    return (
      <>
        <Stack
          className="row"
          direction={"row"}
          padding={1}
          // class={Styles.user}
        >
          <Stack>
            <UserAvatar
              userId={msg.senderId.profile.userId}
              src={msg.senderId.profile.filename}
              text={msg.senderId.userName}
            />
          </Stack>
          <Stack className="ms-2">
            <Stack
              display={"flex"}
              justifyContent={"space-between"}
              direction={"row"}
              className="d-flex justify-content-between"
            >
              <Stack
                //   className={Styles.postDate}
                direction={"row"}
                spacing={2}
              >
                <Stack style={{ fontWeight: "bold", marginLeft: "10px" }}>
                  {capitalizeFirstLetter(msg.senderId.userName)}
                </Stack>{" "}
                <Stack style={{ fontSize: 12, marginTop: "5px" }}>
                  {moment(msg.createdAt).fromNow()}{" "}
                </Stack>
                {badge?.image && (
                  <Stack>
                    <Box
                      type="button"
                      class={`btn p-0 pe-2 ps-1 ms-2 me-2`}
                      style={{
                        fontSize: badge.fontSize || 12,
                        backgroundColor: badge.color,
                        color: "#fff",
                        padding: 3,
                        borderRadius: 5,
                      }}
                    >
                      <img
                        src={badge.image}
                        width={10}
                        height={10}
                        // {...badge.imageProps}
                      />{" "}
                      {badge.name}
                    </Box>
                  </Stack>
                )}
              </Stack>
              <Stack
                display={"flex"}
                alignItems={"end"}
                className="d-flex align-items-center btn-group dropstart"
              >
                <div>
                  <Button
                    aria-describedby={id}
                    onClick={(e) => {
                      handleClick(e);
                      setEditMsg(msg.message);
                      setEditCommentId(msg._id);
                      setSelectIndex(msg);
                      setEditIndex((editIndex) => (editIndex === i ? null : i));
                    }}
                  >
                    <img
                      width={18}
                      height={18}
                      src={List}
                      alt="..."
                      role="button"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    />
                  </Button>
                  <Popover
                    id={id}
                    open={opens}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <Stack padding={1} spacing={1} direction={"column"}>
                      <Typography
                      sx={{cursor:'pointer'}}
                        //   className={`${Styles["dropdown-padding"]} m-2`}
                        onClick={() => {
                          seletedIndex(msg, i);
                          setOpen(true);
                          setIsEditing(true);
                          setEditIndex((editIndex) =>
                            editIndex === i ? null : i
                          );
                        }}
                      >
                        Edit
                      </Typography>
                      <Typography
                      sx={{cursor:'pointer'}}
                        // className={`${Styles["dropdown-padding"]} m-2`}
                        onClick={() => confirmAction()}
                      >
                        Remove
                      </Typography>
                    </Stack>
                  </Popover>
                </div>
                {/* <img
                width={18} height={18}
                  src={List}
                  alt="..."
                  role="button"
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul
                // className={`${Styles["dropdown-menu-bg"]} dropdown-menu`}
                >
                  <li>
                    <a
                      //   className={`${Styles["dropdown-padding"]} m-2`}
                      onClick={() => {
                        seletedIndex(msg, i);
                        setOpen(true);
                        setIsEditing(true);
                        setEditIndex((editIndex) =>
                          editIndex === i ? null : i
                        );
                      }}
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      // className={`${Styles["dropdown-padding"]} m-2`}
                      onClick={() => confirmAction(msg._id)}
                    >
                      Remove
                    </a>
                  </li>
                </ul> */}
              </Stack>
            </Stack>
            <Stack
              // className={Styles.commentText}
              padding={2}
            >
              {msg.message}
            </Stack>
            <Stack
              className="col-6"
              direction={"row"}
              spacing={3}

              // class={Styles.clmn}
            >
              {msg.liked.includes(userId) ? (
                <Stack

                  role="button"
                  direction={"row"}
                  spacing={1}
                  // className={Styles.replay}
                >
                  <img
                    //   className={Styles.like}
                    width={18}
                    height={18}
                    src={liked}
                  />
                  <Stack
                  //   className={Styles.likes}
              sx={{cursor:'pointer'}}

                  >
                    {msg.liked.length} {msg.liked.length > 1 ? "Likes" : "Like"}{" "}
                  </Stack>
                </Stack>
              ) : (
                <Stack
                  role="button"
                  direction={"row"}
                  spacing={1}
                  onClick={() => likeMessage(msg._id)}
              sx={{cursor:'pointer'}}

                  //   className={`d-flex align-items-center justify-content-center ${Styles.replay}`}
                >
                  <img
                    //   className={Styles.like}
                    width={18}
                    height={18}
                    src={like}
                  />
                  <Stack
                  
                  //   className={Styles.likes}
                  >
                    Like
                  </Stack>
                </Stack>
              )}
              <Stack
                role={"button"}
                direction={"row"}
                spacing={1}
                onClick={() => {
                  onShare(msg.message, params.id);
                }}
                display={"flex"}
                alignItems={"center"}
              sx={{cursor:'pointer'}}
              justifyContent={"center"}
                // className={`d-flex align-items-center justify-content-center ${Styles.replay}`}
              >
                <img
                  // className={Styles.like}
                  width={18}
                  height={18}
                  src={share}
                />
                <Stack
                // className={Styles.likes}
              sx={{cursor:'pointer'}}

                >
                  share
                </Stack>
              </Stack>
              <Stack
                role={"button"}
                direction={"row"}
                spacing={1}
                onClick={() => {
                  setReplyMsg("");
                  setReplyMessageId(msg._id);
                }}
                display={"flex"}
                alignItems={"center"}
              sx={{cursor:'pointer'}}
              justifyContent={"center"}
                // className={`d-flex align-items-center justify-content-center ${Styles.replay}`}
              >
                <Stack style={{ marginTop: "5px" }}
                >
                  <img
                    // className={Styles.like}
                    width={18}
                    height={18}
                    src={comment}
                  />
                </Stack>
                <Stack
              sx={{cursor:'pointer'}}

                // className={Styles.likes}
                >
                  Reply
                </Stack>
              </Stack>
            </Stack>
            {msg._id === replyMessageId && (
              <Stack padding={3} className="row">
                <BootstrapInput
                  value={replyMsg}
                  onKeyDown={(e) => {
                    if (e.code === "Enter") {
                      e.preventDefault();
                      createMessage(replyMsg, msg._id);
                    }
                  }}
                  userId
                  onChange={(e) => setReplyMsg(e.target.value)}
                  placeholder="Enter your comment"
                  sx={{
                    width: { xs: "auto", md: 300 },
                    height: "33px",
                  }}
                  id="bootstrap-input"
                />
              </Stack>
            )}
            {msg.children && (
              <Stack className="row" padding={1}>
                <Stack className=" ms-5">
                  {msg.children.map((m) => {
                    return renderMessage(m);
                  })}
                </Stack>
              </Stack>
            )}
          </Stack>
          {editIndex === i && isEditing && (
            // <CustomModal show={open} onClose={() => setOpen(false)}>
            //   <Stack className="modal-header">
            //     <Typography className="modal-title" id="staticBackdropLabel">
            //       Edit Your Comment
            //     </Typography>
            //     <Button
            //       type="button"
            //       className="btn-close"
            //       data-bs-dismiss="modal"
            //       aria-label="Close"
            //       onClick={() => postModelClose(false)}
            //     ></Button>
            //   </Stack>
            //   <Stack className="modal-body">
            //     <Stack>
            //       <h5 className="mt-2">Comment</h5>
            //       <br />
            //       <textarea
            //         role="text"
            //         value={editMsg}
            //         placeholder="Write your Description here..."
            //         aria-label="Example text with button addon"
            //         aria-describedby="button-addon1"
            //         onChange={(e) => {
            //           setEditMsg(e.target.value);
            //         }}
            //       ></textarea>
            //     </Stack>
            //   </Stack>

            //   <Stack className="modal-footer">
            //     <Button
            //       type="button"
            //       className="btn btn-secondary"
            //       data-bs-dismiss="modal"
            //       onClick={() => postModelClose(false)}
            //     >
            //       Close
            //     </Button>
            //     <Button
            //       type="button"
            //       className="btn btn-primary"
            //       onClick={() => updateMessage(editCommentId)}
            //     >
            //       Post
            //     </Button>
            //   </Stack>
            // </CustomModal>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  ...style,
                  bgcolor:
                    theme.palette.mode === "dark" ? "#262c42" : "#E5E5E5",
                }}
              >
                <Stack
                  direction={"row"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  style={{ marginBottom: "20px" }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",
                      fontWeight: "500",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    fontWeight={"bold"}
                  >
                    Edit Your Comment
                  </Typography>
                  <CloseOutlinedIcon
                    onClick={handleClose}
                    sx={{
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",
                      fontSize: "30px",
                      cursor: "pointer",
                    }}
                  />
                </Stack>
                <Divider />
                <Stack>
                  <Typography
                    sx={{
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",
                      fontWeight: "500",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                      mt: 4,
                    }}
                    fontWeight={"bold"}
                    id="modal-modal-description"
                  >
                    Comment
                  </Typography>
                  <TextField
                    sx={{ padding: "10px" }}
                    variant="outlined"
                    value={editMsg}
                    placeholder="Write your Description here..."
                    onChange={(e) => {
                      setEditMsg(e.target.value);
                    }}
                  />
                </Stack>
                <Stack
                  style={{ marginTop: "20px" }}
                  display={"flex"}
                  justifyContent={"end"}
                  spacing={2}
                  direction={"row"}
                  className="modal-footer"
                >
                  <Button
                    type="button"
                    variant="outlined"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      postModelClose(false);
                      handleClose();
                    }}
                  >
                    Close
                  </Button>
                  <Button
                    type="button"
                    variant="contained"
                    className="btn btn-primary"
                    onClick={() => {
                      updateMessage(editCommentId);
                      handleClose();
                    }}
                  >
                    Update
                  </Button>
                </Stack>
              </Box>
            </Modal>
          )}
        </Stack>
      </>
    );
  };

  return (
    <>
      <Box
        sx={{ bgcolor: theme.palette.mode === "dark" ? "#1c2033" : "#E5E5E5" }}
      >
        <Header />
        <Container sx={{ mt: 5, p: 3 }}>
          <Grid container spacing={5}>
            <Grid item sx={12} md={8}>
              <Card sx={{ p: 2 }}>
                <Grid item xs={12}>
                  <Grid container alignItems={"center"}>
                    <Grid item xs={3}>
                      <Stack
                        direction={"row"}
                        alignItems="center "
                        spacing={{ xs: 1, md: 2 }}
                      >
                        <Avatar
                          src={Eth}
                          sx={{
                            width: { xs: 30, md: "73px" },
                            height: { xs: 30, md: "73px" },
                          }}
                        />
                        <Typography
                          sx={{ fontSize: { xs: 20, md: "32px" } }}
                          fontWeight={700}
                        >
                          NFL
                        </Typography>
                      </Stack>
                    </Grid>
                    {/* <Grid xs={9} >
                                            <Typography color="#007DEC" textAlign={"end"}>Which Team will win?</Typography>
                                        </Grid> */}
                  </Grid>
                  <Grid sx={{ pt: 2 }}>
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "22px",
                        fontStyle: "normal",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      Which Team will win?
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "22px",
                        fontStyle: "normal",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      JAX VS NYJ
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "15px",
                        fontStyle: "normal",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                      color="#8E8E8E"
                    >
                      End time: Jan 8, 2022 at 2:00 AM GMT + 5
                    </Typography>
                  </Grid>
                  <Divider sx={{ py: 1 }} />
                </Grid>
                <Grid container sx={{ pt: 1 }}>
                  <Grid item xs={12} md={6}>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                      <Stack>
                        <Typography
                          sx={{
                            fontWeight: "400",
                            fontSize: "15px",
                            fontStyle: "normal",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                          color="#9FA2AF"
                        >
                          Total Volume
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "400",
                            fontSize: "15px",
                            fontStyle: "normal",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          $688,640.53
                        </Typography>
                      </Stack>
                      <Stack>
                        <Typography
                          sx={{
                            fontWeight: "400",
                            fontSize: "15px",
                            fontStyle: "normal",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                          color="#9FA2AF"
                          textAlign={"center"}
                        >
                          24hr Volume
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "400",
                            fontSize: "15px",
                            fontStyle: "normal",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                          textAlign={"center"}
                        >
                          $0.13
                        </Typography>
                      </Stack>
                      <Stack>
                        <Typography
                          sx={{
                            fontWeight: "400",
                            fontSize: "15px",
                            fontStyle: "normal",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                          color="#9FA2AF"
                        >
                          Liquidity
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "400",
                            fontSize: "15px",
                            fontStyle: "normal",
                            fontFamily: "'Poppins', sans-serif",
                          }}
                        >
                          $0.87
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                  {/* <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "end", justifyContent: { xs: "start", md: "end" } }}>
                                        <Typography textAlign={{ xs: "start", md: "end" }} sx={{ pt: { xs: 3, md: "" } }} color={"#8E8E8E"}>Liquidity:<span style={{ color: "#000" }}>$0.00</span></Typography>
                                    </Grid> */}
                </Grid>
              </Card>
              <Card sx={{ mt: 5 }}>
                <Grid container display={"flex"} alignItems="center">
                  <Grid xs={12}>
                    <Grid container sx={{ p: 2 }}>
                      <Grid xs={6} sx={{ pl: 2 }}>
                        <Typography className={classes.Type} color="#9FA2AF">
                          No
                        </Typography>
                        <Typography className={classes.Type} color="#000000">
                          $6
                        </Typography>
                      </Grid>
                      <Grid
                        xs={6}
                        sx={{ pr: 2 }}
                        display="flex"
                        justifyContent={"end"}
                      >
                        <Stack direction={"row"} spacing={2}>
                          <img width={"20px"} height={"16px"} src={arow} />
                          <img width={"19.5px"} height={"20px"} src={set} />
                        </Stack>
                      </Grid>
                    </Grid>
                    <Divider />
                  </Grid>
                  <Charts data={data} dataKeys={dataKeys} filters={filters} />
                </Grid>
              </Card>
              <Position />
              <Grid container sx={{ mt: 3 }}>
                <Grid item xs={12}>
                  <Typography className={classes.Header}>
                    Market Details
                  </Typography>
                </Grid>
                <Grid xs={12} sx={{ pt: 2 }}>
                  <Typography className={classes.Type} color="#9FA2AF">
                    {" "}
                    This market asks whether Ukraine will constitutionally
                    renounce its claim to at least one of the following—The
                    Autonomous Republic of Crimea, Luhansk Oblast, Donetsk
                    Oblast—by May 31, 2022, 11:59:59 PM ET.
                  </Typography>
                </Grid>
                <Grid xs={12} sx={{ pt: 2 }}>
                  <Typography className={classes.Type} color="#9FA2AF">
                    If Ukraine removes any claim to at least one of The
                    Autonomous Republic of Crimea, Luhansk Oblast, or Donetsk
                    Oblast in the Constitution of Ukr…{" "}
                    <span style={{ color: "#007DEC" }}>Rede More</span>
                  </Typography>
                </Grid>
              </Grid>
              <Transactions />
              <Grid xs={12} sx={{ mt: 3 }}>
                <Card sx={{ p: 3 }}>
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Stack>
                      <Typography className={classes.Header}>
                        Discussion
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                      {badges.map((badge) => {
                        return (
                          <Box
                            sx={{
                              cursor:'pointer',
                              border: "1px solid blue",
                              //   padding: "5px",
                              borderRadius: "7px",
                              padding: badge.padding,
                              ...(currentBadge === badge.id
                                ? {
                                    color: "#fff",
                                    backgroundColor: badge.color,
                                  }
                                : {}),
                            }}
                            onClick={() => setCurrentBadge(badge.id)}
                            // style={{

                            //   }}
                          >
                            <Stack direction={"row"} spacing={1}>
                              <img
                                height={"25px"}
                                width={"25px"}
                                src={badge.image}
                              />
                              <Typography sx={{ fontSize: "17px" }}>
                                {badge.name}
                              </Typography>
                            </Stack>
                          </Box>
                        );
                      })}
                      {/* <Box
                        sx={{
                          border: "1px solid blue",
                          padding: "4px",
                          height: "22px",
                          borderRadius: "7px",
                        }}
                      >
                        <Stack direction={"row"} spacing={1}>
                          <img height={"23px"} width={"23px"} src={shark} />
                          <Typography sx={{ fontSize: "15px" }}>
                            shark
                          </Typography>
                        </Stack>
                      </Box>
                      <Box
                        sx={{
                          border: "1px solid blue",
                          padding: "3px",
                          height: "19px",
                          borderRadius: "7px",
                        }}
                      >
                        <Stack direction={"row"} spacing={1}>
                          <img height={"21px"} width={"21px"} src={trutle} />
                          <Typography sx={{ fontSize: "13px" }}>
                            trutle
                          </Typography>
                        </Stack>
                      </Box> */}
                    </Stack>
                  </Stack>
                  <Grid container>
                    <Grid item xs={12}>
                      <Grid container sx={{ pt: 2 }} spacing={2}>
                        <Stack
                          sx={{ pt: 1, pl: 2 }}
                          direction={"row"}
                          spacing={2}
                        >
                          <Stack direction={"row"} spacing={1}>
                            <Stack>
                              <img
                                height={"21px"}
                                width={"21px"}
                                src={comment}
                              />
                            </Stack>
                            <Stack>
                              <Typography
                                color={"#9FA2AF"}
                                sx={{ fontSize: "12px" }}
                              >
                                {messages.length}{" "}
                                {messages.length > 1 ? "Comments" : "Comment"}
                              </Typography>
                            </Stack>
                          </Stack>
                          {/* <Stack direction={"row"}>
                            <Stack>
                              <img height={"18px"} width={"18px"} src={share} />
                            </Stack>
                            <Stack>
                              <Typography
                                color={"#9FA2AF"}
                                sx={{ pl: 1, fontSize: "12px" }}
                              >
                                share
                              </Typography>
                            </Stack>
                          </Stack>
                          <Stack direction={"row"}>
                            <Stack>
                              <img height={"16px"} width={"12px"} src={save} />
                            </Stack>
                            <Stack>
                              <Typography
                                color={"#9FA2AF"}
                                sx={{ pl: 1, fontSize: "12px" }}
                              >
                                save
                              </Typography>
                            </Stack>
                          </Stack> */}
                        </Stack>
                      </Grid>
                      <Divider sx={{ pt: 2 }} />

                      <Grid xs={12} sx={{ py: 3 }}>
                        <Stack
                          direction={"row"}
                          spacing={2}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <UserAvatar
                            userId={userAccount.userId}
                            src={userAccount.profile}
                            text={userAccount.userName}
                          />

                          <BootstrapInput
                            sx={{
                              width: { xs: "auto", md: 700 },
                              height: "33px",
                            }}
                            placeholder="Write your comment..."
                            id="bootstrap-input"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.code === "Enter") {
                                e.preventDefault();
                                createMessage(message, null);
                              }
                            }}
                          />
                        </Stack>
                      </Grid>
                      {messages.map((msg, idx) => {
                        return renderMessage(msg, idx);
                      })}
                      {/* <Grid xs={12}>
                        <Grid container>
                          <Grid xs={12}>
                            <Stack
                              direction={"row"}
                              alignItems="center"
                              spacing={2}
                            >
                              <Avatar
                                alt="Remy Sharp"
                                src={girl}
                                sx={{
                                  width: { xs: 38, md: 52 },
                                  height: { xs: 38, md: 52 },
                                }}
                              />
                              <Stack>
                                <Typography color="#9FA2AF" fontSize={"14px"}>
                                  HeMaNsHuJ 6 hr. ago
                                </Typography>
                                <Typography fontSize={"12px"}>
                                  Photographer
                                </Typography>
                              </Stack>
                            </Stack>
                          </Grid>
                          <Grid xs={12}>
                            <Grid
                              container
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              <Grid
                                xs={10}
                                sx={{ pl: { xs: 4, md: 1 }, pt: 1 }}
                              >
                                <Typography
                                  style={{
                                    fontFamily: "'Ysabeau Office', sans-serif",
                                  }}
                                  fontSize={"14px"}
                                  color="#7D7D7D"
                                >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit,Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit, Lorem ipsum dolor
                                  sit amet, consectetur adipiscing elit,Lorem
                                  ipsum dolor sit amet, consectetur adipiscing
                                  elit,
                                </Typography>
                              </Grid>
                              <Grid
                                xs={10}
                                sx={{ pl: { xs: 4, md: 1 }, pt: 1 }}
                              >
                                <Stack direction={"row"} spacing={2}>
                                  <Stack direction={"row"} spacing={1}>
                                    <Stack>
                                      <img
                                        height={"17px"}
                                        width={"17px"}
                                        src={like}
                                      />
                                    </Stack>
                                    <Stack>
                                      <Typography
                                        color={"#9FA2AF"}
                                        sx={{ fontSize: "12px" }}
                                      >
                                        Like
                                      </Typography>
                                    </Stack>
                                  </Stack>
                                  <Stack direction={"row"}>
                                    <Stack>
                                      <img
                                        height={"18px"}
                                        width={"18px"}
                                        src={comment}
                                      />
                                    </Stack>
                                    <Stack>
                                      <Typography
                                        color={"#9FA2AF"}
                                        sx={{ pl: 1, fontSize: "12px" }}
                                      >
                                        Replay
                                      </Typography>
                                    </Stack>
                                  </Stack>
                                </Stack>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid xs={12} sx={{ pt: 2 }}>
                            <Stack
                              direction={"row"}
                              alignItems="center"
                              spacing={2}
                            >
                              <Avatar
                                alt="Ellis"
                                src={ellis}
                                sx={{
                                  width: { xs: 38, md: 52 },
                                  height: { xs: 38, md: 52 },
                                }}
                              />
                              <Stack>
                                <Typography color="#9FA2AF" fontSize={"14px"}>
                                  Alicia Doe 6 hr. ago
                                </Typography>
                                <Typography fontSize={"12px"}>
                                  Photographer
                                </Typography>
                              </Stack>
                            </Stack>
                          </Grid>
                          <Grid xs={12}>
                            <Grid
                              container
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              <Grid
                                xs={10}
                                sx={{ pl: { xs: 4, md: 1 }, pt: 1 }}
                              >
                                <Typography
                                  style={{
                                    fontFamily: "'Ysabeau Office', sans-serif",
                                  }}
                                  fontSize={"14px"}
                                  color="#7D7D7D"
                                >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit,
                                </Typography>
                              </Grid>
                              <Grid
                                xs={10}
                                sx={{ pl: { xs: 4, md: 1 }, pt: 1 }}
                              >
                                <Stack direction={"row"} spacing={2}>
                                  <Stack direction={"row"} spacing={1}>
                                    <Stack>
                                      <img
                                        height={"17px"}
                                        width={"17px"}
                                        src={like}
                                      />
                                    </Stack>
                                    <Stack>
                                      <Typography
                                        color={"#9FA2AF"}
                                        sx={{ fontSize: "12px" }}
                                      >
                                        Like
                                      </Typography>
                                    </Stack>
                                  </Stack>
                                  <Stack direction={"row"}>
                                    <Stack>
                                      <img
                                        height={"18px"}
                                        width={"18px"}
                                        src={comment}
                                      />
                                    </Stack>
                                    <Stack>
                                      <Typography
                                        color={"#9FA2AF"}
                                        sx={{ pl: 1, fontSize: "12px" }}
                                      >
                                        Replay
                                      </Typography>
                                    </Stack>
                                  </Stack>
                                </Stack>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid xs={12} sx={{ pt: 2, pl: 2 }}>
                            <Stack
                              direction={"row"}
                              alignItems="center"
                              spacing={2}
                            >
                              <Avatar
                                alt="Ellis"
                                src={eli}
                                sx={{
                                  width: { xs: 30, md: "30px" },
                                  height: { xs: 30, md: "30px" },
                                }}
                              />
                              <Stack>
                                <Typography
                                  color="#9FA2AF"
                                  fontSize={"14px"}
                                  fontWeight={400}
                                >
                                  HeMaNsHuJ 6 hr. ago
                                </Typography>
                                <Typography
                                  style={{
                                    fontFamily: "'Ysabeau Office', sans-serif",
                                  }}
                                  fontSize={"14px"}
                                  color="#7D7D7D"
                                  fontWeight={400}
                                >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit,
                                </Typography>
                              </Stack>
                            </Stack>
                          </Grid>
                          <Grid xs={12} sx={{ pt: 2, pl: 2 }}>
                            <Stack
                              direction={"row"}
                              alignItems="center"
                              spacing={2}
                            >
                              <Avatar
                                alt="Ellis"
                                src={eli}
                                sx={{
                                  width: { xs: 30, md: "30px" },
                                  height: { xs: 30, md: "30px" },
                                }}
                              />
                              <Stack>
                                <Typography
                                  color="#9FA2AF"
                                  fontSize={"14px"}
                                  fontWeight={400}
                                >
                                  HeMaNsHuJ 6 hr. ago
                                </Typography>
                                <Typography
                                  style={{
                                    fontFamily: "'Ysabeau Office', sans-serif",
                                  }}
                                  fontSize={"14px"}
                                  color="#7D7D7D"
                                  fontWeight={400}
                                >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit,
                                </Typography>
                              </Stack>
                            </Stack>
                          </Grid>
                          <Grid xs={12} sx={{ pt: 2 }}>
                            <Stack
                              direction={"row"}
                              alignItems="center"
                              spacing={2}
                            >
                              <Avatar
                                alt="Remy Sharp"
                                src={girl}
                                sx={{
                                  width: { xs: 38, md: 52 },
                                  height: { xs: 38, md: 52 },
                                }}
                              />
                              <Stack>
                                <Typography color="#9FA2AF" fontSize={"14px"}>
                                  HeMaNsHuJ 6 hr. ago
                                </Typography>
                                <Typography fontSize={"12px"}>
                                  Photographer
                                </Typography>
                              </Stack>
                            </Stack>
                          </Grid>
                          <Grid xs={12}>
                            <Grid
                              container
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              <Grid
                                xs={10}
                                sx={{ pl: { xs: 4, md: 1 }, pt: 1 }}
                              >
                                <Typography
                                  style={{
                                    fontFamily: "'Ysabeau Office', sans-serif",
                                  }}
                                  fontSize={"14px"}
                                  color="#7D7D7D"
                                >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit,Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit, Lorem ipsum dolor
                                  sit amet, consectetur adipiscing elit,Lorem
                                  ipsum dolor sit amet, consectetur adipiscing
                                  elit,
                                </Typography>
                              </Grid>
                              <Grid
                                xs={10}
                                sx={{ pl: { xs: 4, md: 1 }, pt: 1 }}
                              >
                                <Stack direction={"row"} spacing={2}>
                                  <Stack direction={"row"} spacing={1}>
                                    <Stack>
                                      <img
                                        height={"17px"}
                                        width={"17px"}
                                        src={like}
                                      />
                                    </Stack>
                                    <Stack>
                                      <Typography
                                        color={"#9FA2AF"}
                                        sx={{ fontSize: "12px" }}
                                      >
                                        Like
                                      </Typography>
                                    </Stack>
                                  </Stack>
                                  <Stack direction={"row"}>
                                    <Stack>
                                      <img
                                        height={"18px"}
                                        width={"18px"}
                                        src={comment}
                                      />
                                    </Stack>
                                    <Stack>
                                      <Typography
                                        color={"#9FA2AF"}
                                        sx={{ pl: 1, fontSize: "12px" }}
                                      >
                                        Replay
                                      </Typography>
                                    </Stack>
                                  </Stack>
                                </Stack>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid xs={12} sx={{ pt: 2 }}>
                            <Stack
                              direction={"row"}
                              alignItems="center"
                              spacing={2}
                            >
                              <Avatar
                                alt="Remy Sharp"
                                src={girl}
                                sx={{
                                  width: { xs: 38, md: 52 },
                                  height: { xs: 38, md: 52 },
                                }}
                              />
                              <Stack>
                                <Typography color="#9FA2AF" fontSize={"14px"}>
                                  HeMaNsHuJ 6 hr. ago
                                </Typography>
                                <Typography fontSize={"12px"}>
                                  Photographer
                                </Typography>
                              </Stack>
                            </Stack>
                          </Grid>
                          <Grid xs={12}>
                            <Grid
                              container
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              <Grid
                                xs={10}
                                sx={{ pl: { xs: 4, md: 1 }, pt: 1 }}
                              >
                                <Typography
                                  style={{
                                    fontFamily: "'Ysabeau Office', sans-serif",
                                  }}
                                  fontSize={"14px"}
                                  color="#7D7D7D"
                                >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit,Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit, Lorem ipsum dolor
                                  sit amet, consectetur adipiscing elit,Lorem
                                  ipsum dolor sit amet, consectetur adipiscing
                                  elit,
                                </Typography>
                              </Grid>
                              <Grid
                                xs={10}
                                sx={{ pl: { xs: 4, md: 1 }, pt: 1 }}
                              >
                                <Stack direction={"row"} spacing={2}>
                                  <Stack direction={"row"} spacing={1}>
                                    <Stack>
                                      <img
                                        height={"17px"}
                                        width={"17px"}
                                        src={like}
                                      />
                                    </Stack>
                                    <Stack>
                                      <Typography
                                        color={"#9FA2AF"}
                                        sx={{ fontSize: "12px" }}
                                      >
                                        Like
                                      </Typography>
                                    </Stack>
                                  </Stack>
                                  <Stack direction={"row"}>
                                    <Stack>
                                      <img
                                        height={"18px"}
                                        width={"18px"}
                                        src={comment}
                                      />
                                    </Stack>
                                    <Stack>
                                      <Typography
                                        color={"#9FA2AF"}
                                        sx={{ pl: 1, fontSize: "12px" }}
                                      >
                                        Replay
                                      </Typography>
                                    </Stack>
                                  </Stack>
                                </Stack>
                                <Stack sx={{ pt: 2 }}>
                                  <Typography
                                    fontWeight={400}
                                    fontSize={"14px"}
                                    color="#007DEC"
                                  >
                                    View More...
                                  </Typography>
                                </Stack>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid> */}
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <Grid xs={12}>
                  <Grid>
                    <Box
                      sx={{ width: "100%" }}
                      style={{
                        borderRadius: "6px",
                        // background: "#FFFFFF",
                      }}
                    >
                      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          aria-label="basic tabs example"
                        >
                          <Tab
                            style={{
                              fontFamily: "Arial",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: "24px",
                              lineHeight: "28px",
                              color: "#000000",
                              width: "50%",
                            }}
                            label="Buy"
                            {...a11yProps(0)}
                          />
                          <Tab
                            style={{
                              fontFamily: "Arial",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: "24px",
                              lineHeight: "28px",
                              color: "#000000",
                              width: "50%",
                            }}
                            label="Sell"
                            {...a11yProps(1)}
                          />
                        </Tabs>
                      </Box>
                      <TabPanel value={value} index={0}>
                        <Stack>
                          <Stack
                            pt={2}
                            direction={"row"}
                            justifyContent={"space-between"}
                          >
                            <Typography
                              sx={{
                                fontWeight: "400",
                                fontSize: "15px",
                                fontStyle: "normal",
                                fontFamily: "'Poppins', sans-serif",
                              }}
                              color=" #9FA2AF"
                            >
                              Pick Outcome
                            </Typography>
                          </Stack>
                          <Stack marginTop={1} spacing={2}>
                            <Box
                              sx={{
                                width: "100%",
                                height: "44px",
                                border: "1px solid #47C6CE",
                                boxSizing: "border-box",
                                filter:
                                  "dropShadow(0px 0px 11px rgba(0, 0, 0, 0.15))",
                                borderRadius: "6px",
                                display: "flex",
                                ":hover": {
                                  background:
                                    "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                                  color: "white",
                                },
                                // justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontWeight: "400",
                                  fontSize: "18px",
                                  fontStyle: "normal",
                                  fontFamily: "'Poppins', sans-serif",
                                }}
                                paddingLeft={2}
                                style={{ color: "#FFFFFF" }}
                              >
                                JAX
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                width: "100%",
                                height: "44px",
                                border: "1px solid #47C6CE",
                                boxSizing: "border-box",
                                filter:
                                  "dropShadow(0px 0px 11px rgba(0, 0, 0, 0.15))",
                                borderRadius: "6px",
                                display: "flex",
                                ":hover": {
                                  background:
                                    "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                                  color: "white",
                                },
                                // justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontWeight: "400",
                                  fontSize: "18px",
                                  fontStyle: "normal",
                                  fontFamily: "'Poppins', sans-serif",
                                }}
                                paddingLeft={2}
                                style={{ color: "#FFFFFF" }}
                              >
                                NYJ
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                width: "100%",
                                height: "44px",
                                border: "1px solid #47C6CE",
                                boxSizing: "border-box",
                                filter:
                                  "dropShadow(0px 0px 11px rgba(0, 0, 0, 0.15))",
                                borderRadius: "6px",
                                display: "flex",
                                ":hover": {
                                  background:
                                    "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                                  color: "white",
                                },
                                // justifyContent: "center",
                                alignItems: "center",
                              }}
                              // style={{ opacity: 0.4 }}
                            >
                              <Typography
                                sx={{
                                  fontWeight: "400",
                                  fontSize: "18px",
                                  fontStyle: "normal",
                                  fontFamily: "'Poppins', sans-serif",
                                }}
                                paddingLeft={2}
                                textAlign="center"
                              >
                                Tie/No Contest
                              </Typography>
                            </Box>
                          </Stack>
                          <Stack
                            direction={"row"}
                            mt={2}
                            justifyContent={"space-between"}
                          ></Stack>
                          <Stack
                            mt={3}
                            direction={"row"}
                            justifyContent={"space-between"}
                          >
                            <Typography
                              sx={{
                                color: "#9FA2AF",
                                fontWeight: "400",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontFamily: "'Poppins', sans-serif",
                              }}
                            >
                              {" "}
                              Amount in: <img src={Midle} /> USDC
                            </Typography>
                            <Typography
                              sx={{
                                color: "#9FA2AF",
                                fontWeight: "400",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontFamily: "'Poppins', sans-serif",
                              }}
                            >
                              {" "}
                              balance:<span>30000</span>{" "}
                            </Typography>
                          </Stack>
                          <Stack sx={{ mt: 1 }}>
                            <Paper
                              component="form"
                              sx={{
                                width: "100%",
                                height: "46px",
                                border: "1px solid #9FA2AF",
                                boxSizing: "border-box",
                                filter:
                                  "drop-shadow(0px 0px 11px rgba(0, 0, 0, 0.15))",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                px: 3,
                                border: "1px solid #C4C4C4",
                              }}
                            >
                              <InputAdornment position="200">$ </InputAdornment>
                              <InputBase
                                sx={{ flex: 1 }}
                                placeholder="200"
                                inputProps={{
                                  "aria-label": "search google maps",
                                }}
                              />
                              <Button
                                variant="contained"
                                sx={{
                                  fontFamily: "Arial",
                                  fontStyle: "normal",
                                  fontWeight: "700",
                                  fontSize: "16px",
                                  lineHeight: "18px",
                                  background:
                                    "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                                  color: "#FFFFFF",
                                  fontStyle: "normal",
                                  fontFamily: "'Poppins', sans-serif",
                                }}
                              >
                                MAX
                              </Button>
                            </Paper>
                            <Stack
                              direction={"row"}
                              mt={2}
                              alignItems={"center"}
                              justifyContent={"space-between"}
                            >
                              <Typography
                                class="sub-header"
                                sx={{ color: "#9FA2AF" }}
                              >
                                Your Avg. Price
                              </Typography>
                              <Typography class="sub-header">$0.06</Typography>
                            </Stack>
                            <Stack
                              direction={"row"}
                              alignItems={"center"}
                              justifyContent={"space-between"}
                            >
                              <Typography
                                class="sub-header"
                                sx={{ color: "#9FA2AF" }}
                              >
                                {" "}
                                Estimated Shares Bought
                              </Typography>
                              <Typography
                                class="sub-header"
                                sx={{ color: " #000000" }}
                              >
                                $0.06
                              </Typography>
                            </Stack>
                            <Stack
                              direction={"row"}
                              justifyContent={"space-between"}
                            >
                              <Typography
                                class="sub-header"
                                sx={{ color: "#9FA2AF" }}
                              >
                                Maximum Winnings
                              </Typography>
                              <Typography class="sub-header">$0.06</Typography>
                            </Stack>
                            <Stack
                              direction={"row"}
                              justifyContent={"space-between"}
                            >
                              <Typography class="sub-header">
                                {" "}
                                Max Return on investment
                              </Typography>
                              <Typography
                                class="sub-header"
                                sx={{ color: " #000000" }}
                              >
                                $0.00%
                              </Typography>
                            </Stack>
                            <Stack
                              direction={"row"}
                              mt={5}
                              style={{ justifyContent: "center" }}
                            >
                              <Button
                                variant="contained"
                                size="small"
                                style={{
                                  background:
                                    "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                                  borderRadius: "7px",
                                  color: "#fff",
                                  width: "100%",
                                  fontFamily: "'Poppins', sans-serif",
                                  height: "43px",
                                }}
                              >
                                Approve To Buy
                              </Button>
                            </Stack>
                            <Stack
                              direction={"row"}
                              mt={2}
                              style={{ justifyContent: "center" }}
                            >
                              <Button
                                variant="contained"
                                size="small"
                                style={{
                                  background:
                                    "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                                  borderRadius: "7px",
                                  color: "#fff",
                                  width: "100%",
                                  fontFamily: "'Poppins', sans-serif",
                                  height: "53px",
                                }}
                              >
                                Liquidity Depleted
                              </Button>
                            </Stack>
                          </Stack>
                        </Stack>
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        <Stack>
                          <Stack
                            pt={2}
                            direction={"row"}
                            justifyContent={"space-between"}
                          >
                            <Typography
                              sx={{
                                fontWeight: "400",
                                fontSize: "15px",
                                fontStyle: "normal",
                                fontFamily: "'Poppins', sans-serif",
                              }}
                              color=" #9FA2AF"
                            >
                              Pick Outcome
                            </Typography>
                          </Stack>
                          <Stack marginTop={1} spacing={2}>
                            <Box
                              sx={{
                                width: "100%",
                                height: "44px",
                                border: "1px solid #47C6CE",
                                boxSizing: "border-box",
                                filter:
                                  "dropShadow(0px 0px 11px rgba(0, 0, 0, 0.15))",
                                borderRadius: "6px",
                                display: "flex",
                                ":hover": {
                                  background:
                                    "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                                  color: "white",
                                },
                                // justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontWeight: "400",
                                  fontSize: "18px",
                                  fontStyle: "normal",
                                  fontFamily: "'Poppins', sans-serif",
                                }}
                                paddingLeft={2}
                                style={{ color: "#FFFFFF" }}
                              >
                                JAX
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                width: "100%",
                                height: "44px",
                                border: "1px solid #47C6CE",
                                boxSizing: "border-box",
                                filter:
                                  "dropShadow(0px 0px 11px rgba(0, 0, 0, 0.15))",
                                borderRadius: "6px",
                                display: "flex",
                                ":hover": {
                                  background:
                                    "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                                  color: "white",
                                },
                                // justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontWeight: "400",
                                  fontSize: "18px",
                                  fontStyle: "normal",
                                  fontFamily: "'Poppins', sans-serif",
                                }}
                                paddingLeft={2}
                                style={{ color: "#FFFFFF" }}
                              >
                                NYJ
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                width: "100%",
                                height: "44px",
                                border: "1px solid #47C6CE",
                                boxSizing: "border-box",
                                filter:
                                  "dropShadow(0px 0px 11px rgba(0, 0, 0, 0.15))",
                                borderRadius: "6px",
                                display: "flex",
                                ":hover": {
                                  background:
                                    "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                                  color: "white",
                                },
                                // justifyContent: "center",
                                alignItems: "center",
                              }}
                              // style={{ opacity: 0.4 }}
                            >
                              <Typography
                                sx={{
                                  fontWeight: "400",
                                  fontSize: "18px",
                                  fontStyle: "normal",
                                  fontFamily: "'Poppins', sans-serif",
                                }}
                                paddingLeft={2}
                                textAlign="center"
                              >
                                Tie/No Contest
                              </Typography>
                            </Box>
                          </Stack>
                          <Stack
                            direction={"row"}
                            mt={2}
                            justifyContent={"space-between"}
                          ></Stack>
                          <Stack
                            mt={3}
                            direction={"row"}
                            justifyContent={"space-between"}
                          >
                            <Typography
                              sx={{
                                color: "#9FA2AF",
                                fontWeight: "400",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontFamily: "'Poppins', sans-serif",
                              }}
                            >
                              {" "}
                              Amount in: <img src={Midle} /> USDC
                            </Typography>
                            <Typography
                              sx={{
                                color: "#9FA2AF",
                                fontWeight: "400",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontFamily: "'Poppins', sans-serif",
                              }}
                            >
                              {" "}
                              balance:<span>30000</span>{" "}
                            </Typography>
                          </Stack>
                          <Stack sx={{ mt: 1 }}>
                            <Paper
                              component="form"
                              sx={{
                                width: "100%",
                                height: "46px",
                                border: "1px solid #9FA2AF",
                                boxSizing: "border-box",
                                filter:
                                  "drop-shadow(0px 0px 11px rgba(0, 0, 0, 0.15))",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                px: 3,
                                border: "1px solid #C4C4C4",
                              }}
                            >
                              <InputAdornment position="200">$ </InputAdornment>
                              <InputBase
                                sx={{ flex: 1 }}
                                placeholder="200"
                                inputProps={{
                                  "aria-label": "search google maps",
                                }}
                              />
                              <Button
                                variant="contained"
                                sx={{
                                  fontFamily: "Arial",
                                  fontStyle: "normal",
                                  fontWeight: "700",
                                  fontSize: "16px",
                                  lineHeight: "18px",
                                  background:
                                    "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                                  color: "#FFFFFF",
                                  fontStyle: "normal",
                                  fontFamily: "'Poppins', sans-serif",
                                }}
                              >
                                MAX
                              </Button>
                            </Paper>
                            <Stack
                              direction={"row"}
                              mt={2}
                              alignItems={"center"}
                              justifyContent={"space-between"}
                            >
                              <Typography
                                class="sub-header"
                                sx={{ color: "#9FA2AF" }}
                              >
                                Your Avg. Price
                              </Typography>
                              <Typography class="sub-header">$0.06</Typography>
                            </Stack>
                            <Stack
                              direction={"row"}
                              alignItems={"center"}
                              justifyContent={"space-between"}
                            >
                              <Typography
                                class="sub-header"
                                sx={{ color: "#9FA2AF" }}
                              >
                                {" "}
                                Estimated Shares Bought
                              </Typography>
                              <Typography
                                class="sub-header"
                                sx={{ color: " #000000" }}
                              >
                                $0.06
                              </Typography>
                            </Stack>
                            <Stack
                              direction={"row"}
                              justifyContent={"space-between"}
                            >
                              <Typography
                                class="sub-header"
                                sx={{ color: "#9FA2AF" }}
                              >
                                Maximum Winnings
                              </Typography>
                              <Typography class="sub-header">$0.06</Typography>
                            </Stack>
                            <Stack
                              direction={"row"}
                              justifyContent={"space-between"}
                            >
                              <Typography class="sub-header">
                                {" "}
                                Max Return on investment
                              </Typography>
                              <Typography
                                class="sub-header"
                                sx={{ color: " #000000" }}
                              >
                                $0.00%
                              </Typography>
                            </Stack>
                            <Stack
                              direction={"row"}
                              mt={5}
                              style={{ justifyContent: "center" }}
                            >
                              {/* <Button variant='contained' size='small' color='primary' style={{
                                                                background: "#007DEC",
                                                                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                                                                borderRadius: "7px",
                                                                width: "100%", height: "43px",
                                                            }} >Connect Wallet
                                                            </Button> */}
                              <Button
                                variant="contained"
                                size="small"
                                style={{
                                  background:
                                    "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                                  borderRadius: "7px",
                                  color: "#fff",
                                  width: "100%",
                                  fontFamily: "'Poppins', sans-serif",
                                  height: "43px",
                                }}
                              >
                                Connect Wallet
                              </Button>
                            </Stack>
                          </Stack>
                        </Stack>
                      </TabPanel>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
              {/* <Card sx={{ mt: 5 }}>
                                <Grid >
                                    <Box sx={{ width: '100%' }} style={{
                                    }}>
                                        <Typography p={2} style={{
                                            fontFamily: 'Arial',
                                            fontStyle: "normal",
                                            fontWeight: "700",
                                            fontSize: "22px",
                                            lineHeight: "25px",
                                            color: "#2D2D2D"
                                        }}>Positions
                                        </Typography>
                                        <Divider />
                                        <Stack direction={'row'} px={4} py={2} mt={2} justifyContent={'space-between'}  >
                                            <Typography className={classes.position} sx={{ color: "#9FA2AF" }}> Out Come</Typography>
                                            <Typography sx={{ color: "#2D2D2D" }}>Yes</Typography>
                                        </Stack>
                                        <Stack direction={'row'} px={4} py={2} justifyContent={'space-between'}  >
                                            <Typography className={classes.position} sx={{ color: "#9FA2AF" }}>Quantity Owned</Typography>
                                            <Typography sx={{ color: "#2D2D2D" }}>3</Typography>
                                        </Stack>
                                        <Stack direction={'row'} px={4} py={2} justifyContent={'space-between'}  >
                                            <Typography className={classes.position} sx={{ color: "#9FA2AF" }}>Avg.Price Paid</Typography>
                                            <Typography sx={{ color: "#2D2D2D" }}>$20</Typography>
                                        </Stack>
                                        <Stack direction={'row'} px={4} py={2} justifyContent={'space-between'}  >
                                            <Typography className={classes.position} sx={{ color: "#9FA2AF" }}>Init.Value</Typography>
                                            <Typography sx={{ color: "#2D2D2D" }}>$30</Typography>
                                        </Stack>

                                        <Stack direction={'row'} px={4} py={2} justifyContent={'space-between'}  >
                                            <Typography className={classes.position} sx={{ color: "#9FA2AF" }}>Cur. Value</Typography>
                                            <Typography sx={{ color: "#2D2D2D" }}>$15</Typography>
                                        </Stack>
                                        <Stack direction={'row'} px={4} py={2} justifyContent={'space-between'}  >
                                            <Typography className={classes.position} sx={{ color: "#9FA2AF" }}>P/L</Typography>
                                            <Typography sx={{ color: "#2D2D2D" }}>-11.43</Typography>
                                        </Stack>
                                    </Box>
                                </Grid>
                            </Card>
                            <Card sx={{ mt: 5 }}>
                                <Grid pb={2}>
                                    <Box style={{

                                        borderRadius: "6px",
                                        // background: "#FFFFFF",
                                        // border: "1px solid rgba(71, 198, 206, 0.2)",
                                        boxSizing: "border-box",
                                        // boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.18)"
                                    }}>
                                        <Typography p={2} style={{
                                            fontFamily: 'Arial',
                                            fontStyle: "normal",
                                            fontWeight: "700",
                                            fontSize: "22px",
                                            lineHeight: "25px",
                                            // color: "#2D2D2D"
                                        }}>Transactions
                                        </Typography>
                                        <Divider />

                                        <Stack direction={'row'} px={4} py={2} mt={2} justifyContent={'space-between'}  >
                                            <Typography className={classes.position} sx={{ color: "#9FA2AF" }}> Out Come</Typography>
                                            <Typography sx={{ color: "#2D2D2D" }}>Yes</Typography>
                                        </Stack>
                                        <Stack direction={'row'} px={4} py={2} justifyContent={'space-between'}  >
                                            <Typography className={classes.position} sx={{ color: "#9FA2AF" }}>All</Typography>
                                            <Typography sx={{ color: "#2D2D2D" }}>Above</Typography>
                                        </Stack>
                                        <Stack direction={'row'} px={4} py={2} justifyContent={'space-between'}  >
                                            <Typography className={classes.position} sx={{ color: "#9FA2AF" }}>Total Value</Typography>
                                            <Typography sx={{ color: "#2D2D2D" }}>$60</Typography>
                                        </Stack>
                                        <Stack direction={'row'} px={4} py={2} justifyContent={'space-between'}  >
                                            <Typography className={classes.position} sx={{ color: "#9FA2AF" }}>Share Amount</Typography>
                                            <Typography sx={{ color: "#2D2D2D" }}>$20</Typography>
                                        </Stack>

                                        <Stack direction={'row'} px={4} py={2} justifyContent={'space-between'}  >
                                            <Typography className={classes.position} sx={{ color: "#9FA2AF" }}>Account</Typography>
                                            <Typography sx={{ color: "#2D2D2D" }}>MetaMask</Typography>
                                        </Stack>
                                        <Stack direction={'row'} px={4} py={2} justifyContent={'space-between'}  >
                                            <Typography className={classes.position} sx={{ color: "#9FA2AF" }}>Time</Typography>
                                            <Typography sx={{ color: "#2D2D2D" }}>6:30 PM</Typography>
                                        </Stack>
                                        <Stack direction={'row'} px={4} py={2} justifyContent={'space-between'}  >
                                            <Typography className={classes.position} sx={{ color: "#9FA2AF" }}>P/L</Typography>
                                            <Typography sx={{ color: "#2D2D2D" }}>-11.43</Typography>
                                        </Stack>
                                    </Box>
                                </Grid>
                            </Card> */}
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Detail;
