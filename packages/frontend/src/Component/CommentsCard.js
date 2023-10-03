import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import ImageCarousel from "./ImageCarousel";
import {
  Button,
  Stack,
  InputBase,
  Divider,
  TextField,
  Box,
  Modal,
} from "@mui/material";
import UserAvatar from "./UserAvatar";
import MentionInput from "./MentionInput";
import SendIcon from "@mui/icons-material/Send";
import CameraIcon from "@mui/icons-material/Camera";
// import btnStyles from "modules/common/buttons.styles.less";
import apiRequest from "../Service/auth";
import FileUpload from "./FileUpload";
import * as linkify from "linkifyjs";
import Linkify from "linkify-react";
import "linkify-plugin-hashtag";
import "linkify-plugin-mention";
import moment from "moment";
import { useTheme } from "@mui/material/styles";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { capitalizeFirstLetter } from "../helpers/functions";
import ImageShuffle from "./ImageShuffle";
// @ts-ignore
if (typeof String.prototype.replaceAll === "undefined") {
  // @ts-ignore
  String.prototype.replaceAll = function (match, replace) {
    return this.replace(new RegExp(match, "g"), () => replace);
  };
}

const options = {
  formatHref: {
    hashtag: (href) => "https://twitter.com/hashtag/" + href.substr(1),
    mention: (href) => "https://example.com/profiles/@" + href,
  },
  format: (value, type) => {
    console.log("S-s-s>>>>>>>>tytytty>>>>", value, type);
    if (type == "mention") {
      return (
        <Typography
          component={"span"}
          // className={btnStyles["text-primary-clr"]}
        >
          {value}
        </Typography>
      );
    }
    return (
      <Typography
        component={"span"}
        //  className={btnStyles["text-primary-clr"]}
      >
        {value}
      </Typography>
    );
  },
};
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
const CommentActions = ({
  placeholder = "Write a comment",
  parentId = null,
  postId = null,
  getComments = () => {},
  onClose = () => {},
}) => {
  const [value, setValue] = React.useState("");
  const [attachments, setAttachments] = React.useState([]);

  const createComment = async () => {
    const response = await apiRequest({
      url: "comment/create",
      method: "POST",
      data: {
        postId,
        text: value,
        attachments,
        parentId,
      },
    });
    if (response.success) {
      setAttachments([]);
      setValue("");
      onClose();
      getComments();
    }
  };

  return (
    <>
      <MentionInput
        value={value}
        setValue={setValue}
        placeholder={placeholder}
        customStyle={{
          borderWidth: 1,
          borderColor: "#00000099",
          borderStyle: "solid",
        }}
      />
      <CardActions sx={{ justifyContent: "flex-end", paddingRight: 0 }}>
        <Stack>
          <FileUpload
            // key={refresh}
            multiple={true}
            onChange={(files, multiple) => {
              setAttachments(files);
            }}
          />
        </Stack>
      </CardActions>
      <CardActions
        disableSpacing
        sx={{ justifyContent: "flex-end", paddingRight: 0 }}
      >
        <Button
          onClick={createComment}
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
          endIcon={<SendIcon />}
          // className={btnStyles["btn-primary-clr"]}
        >
          Post a comment
        </Button>
      </CardActions>
    </>
  );
};

const CommentItem = ({
  postId = null,
  comment = null,
  getComments = () => {},
}) => {
  const theme = useTheme();
  const [reply, setReply] = React.useState(false);
  const contentText = (comment.text || "")
    // @ts-ignore
    .replaceAll("[", "")
    .replaceAll("]", "")
    .replaceAll(/\(.*?\)/g, "");

  const [editMsg, setEditMsg] = React.useState("");

  const [editIndex, setEditIndex] = React.useState(null);
  const [isEditing, setIsEditing] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [editCommentId, setEditCommentId] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const updateMessage = async (commentId) => {
    const response = await apiRequest({
      url: "comment/update",
      method: "POST",
      data: {
        text: editMsg,
        commentId,
      },
    });
    if (response.success) {
      setOpen(false);
      setEditMsg("");
      getComments();
    }
  };

  const postModelClose = (value) => {
    console.log("ttttttttt", open);
    if (value === true) {
      // setPostmodel(true);
      // setOpen(false)
    } else {
      setOpen(false);
      setIsEditing(false);
      // setText("");
      // setFiles([])
      // setPostmodel(false)
    }
  };
  const deleteComment = async (commentId) => {
    const response = await apiRequest({
      url: "comment/delete",
      method: "DELETE",
      data: {
        commentId,
      },
    });
    if (response.success) {
      getComments();
    }
  };

  function confirmAction() {
    if (window.confirm("You want to delete ?")) {
      deleteComment(editCommentId);
    }
  }
  return (
    <Stack
      direction={"row"}
      spacing={2}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
    >
      <Stack width={"100%"}>
        <Stack spacing={1} direction={"row"}>
          <UserAvatar
            userId={comment.createdBy.profile.userId}
            src={comment.createdBy.profile.filename}
            text={comment.createdBy.userName}
          />
          <Stack width={"100%"}>
            <Typography variant="body2" color="text.primary">
              {capitalizeFirstLetter(comment.createdBy.userName)}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize={10}>
              {moment(comment.createdAt).fromNow()}
            </Typography>
            {contentText && (
              <Typography variant="body2" color="text.secondary" pt={1}>
                <Linkify tagName="p" options={options}>
                  {contentText}
                </Linkify>
                {comment.attachments.length > 0 && (
                  <CardContent>
                    <ImageShuffle images={comment.attachments} />
                  </CardContent>
                )}
              </Typography>
            )}
            <Stack
              direction={"row"}
              spacing={2}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} spacing={2} alignItems={"center"}
              >
                <IconButton sx={{cursor:'pointer'}} onClick={confirmAction} aria-label="DELETE">
                  <DeleteIcon sx={{ color: "#00000099" }} />
                </IconButton>
                <Typography
                sx={{cursor:'pointer'}}
                  onClick={() => setReply(true)}
                  variant="body2"
                  color="text.secondary"
                >
                  Reply
                </Typography>
                <Typography
                sx={{cursor:'pointer'}}
                  variant="body2"
                  color="text.secondary"
                  onClick={() => {
                    // seletedIndex(contentText);
                    setOpen(true);
                    setIsEditing(true);
                    setEditMsg(contentText);
                    setEditCommentId(comment._id);
                    // setSelectIndex(comment);
                    // setEditIndex((editIndex) =>
                    //   editIndex === i ? null : i
                    // );
                  }}
                >
                  Edit
                </Typography>
              </Stack>
              {reply && (
                <IconButton onClick={() => setReply(false)} aria-label="REPLY">
                  <CloseIcon sx={{ color: "#00000099" }} />{" "}
                </IconButton>
              )}
            </Stack>
            {reply && (
              <Stack width={"100%"} pt={1}>
                <CommentActions
                  placeholder="Write your reply..."
                  parentId={comment._id}
                  postId={postId}
                  getComments={getComments}
                  onClose={() => setReply(false)}
                />
              </Stack>
            )}
            {comment.children.map((c) => {
              return (
                <Stack pt={1}>
                  <CommentItem
                    postId={postId}
                    getComments={getComments}
                    comment={c}
                  />
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
      <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton>
      {isEditing && (
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
              bgcolor: theme.palette.mode === "dark" ? "#262c42" : "#E5E5E5",
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
  );
};

export default function CommentCard({
  setShowFirstCard = () => {},
  _id = null,
  colorTheme,
}) {
  const [comments, setComments] = React.useState([]);
  const [expanded, setExpanded] = React.useState(false);
  const [attachments, setAttachments] = React.useState([]);
  const [value, setValue] = React.useState("");
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log("S-s-s>>>>>>>>>>>>id>>>", _id);

  const getComments = async () => {
    const response = await apiRequest({
      url: "comment/get/" + _id,
      method: "GET",
    });
    if (response.success) {
      const nest = (items = [], _id = null, link = "parentId") =>
        items
          .filter((item) => item[link] === _id)
          .map((item) => ({ ...item, children: nest(items, item._id) }));
      setComments(nest(response.data));
    }
  };
  console.log("S-s-s>>>>>>>>>>>>comments>>>", comments);
  React.useEffect(() => {
    getComments();
  }, []);

  return (
    <Card
      sx={{
        padding: { xs: 1, md: 3 },
        paddingBottom: 0,
        paddingTop: 2,
        borderRadius: 5,
        bgcolor: colorTheme.palette.mode === "dark" ? "#262c42" : "#ffffff",
      }}
      elevation={3}
    >
      <CardHeader
        action={
          <IconButton onClick={setShowFirstCard} aria-label="close">
            <CloseIcon />
          </IconButton>
        }
        title={
          <Typography fontSize={20}>Comments({comments.length})</Typography>
        }
      />
      <CardContent>
        {comments.map((comment) => {
          return (
            <Stack pt={1}>
              <CommentItem
                postId={_id}
                getComments={getComments}
                comment={comment}
              />
            </Stack>
          );
        })}
      </CardContent>
      <CommentActions postId={_id} getComments={getComments} />
    </Card>
  );
}
