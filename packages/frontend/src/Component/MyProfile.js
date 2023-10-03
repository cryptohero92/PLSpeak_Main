import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { FILE_SERVER_URL } from "../constants/portConstants";
import { capitalizeFirstLetter } from "../helpers/functions";
import moment from "moment";
import apiRequest from "../Service/auth";
import { Button, Stack } from "@mui/material";
// import btnStyles from "modules/common/buttons.styles.less";
import { useDispatch, useSelector } from "react-redux";
import { resetChat, setChat } from "../store/chat/chatReducers";
import { resetModal } from "../store/modal/modalReducers";
// import { useUserStore } from "@augurproject/comps";

export default function MyProfile({
  handleClose = () => {},
  profile,
  colorTheme,
  modalObj = { props: null, userId: null, open: false },
}) {
  //   const {
  //     userAccount,
  //   } = useUserStore();
  const [userProfile, setUserProfile] = React.useState(null);
  const dispatch = useDispatch();
  console.log("s-s-s>>>>>>>>>>>profile>>>>", profile, userProfile?.userId);
  const userId = useSelector((state) => state.profile.profile);
  const getProfile = async (userId) => {
    const response = await apiRequest({
      url: `users/profile/${userId}`,
      method: "GET",
    });
    if (response.success) {
      setUserProfile(response.data);
    }
  };

  React.useEffect(() => {
    getProfile(profile);
  }, [profile]);

  //   React.useEffect(() => {
  //     if (modalObj.open) {
  //       getProfile(modalObj.props.userId);
  //     } else {
  //       setUserProfile(profile);
  //     }
  //   }, [modalObj]);

  return (
    <Box sx={{ overflow: "hidden",
     }} >
      <Grid container wrap="nowrap">
        <Box width={"100%"}>
          <Typography gutterBottom variant="h6"
            sx={{
              color: colorTheme.palette.mode === "dark" ? "#fff" : "#000",
          
                          }}>
            {userProfile
              ? `${capitalizeFirstLetter(userProfile.userName)}'s Profile`
              : "Profile"}
          </Typography>
          {userProfile && userProfile.userId ? (
            <img
              style={{ width: "100%", height: 308 }}
              alt={userProfile.userName}
              src={FILE_SERVER_URL + userProfile.profile}
            />
          ) : (
            <Skeleton variant="rectangular" height={118} />
          )}
          {userProfile && userProfile.userId ? (
            <Box sx={{ p: 2 }}>
              <Typography gutterBottom variant="body2"
                sx={{
                  color: colorTheme.palette.mode === "dark" ? "#fff" : "#000",
              
                              }}>
                {capitalizeFirstLetter(userProfile.userName)}
              </Typography>
              <Typography
                display="block"
                variant="caption"
                color="text.secondary"
                sx={{
    color: colorTheme.palette.mode === "dark" ? "#fff" : "#000",

                }}
              >
                @{userProfile.userName}
              </Typography>
              <Typography variant="caption" color="text.secondary"
              >
                Created at: {moment(userProfile.createdAt).fromNow() || ""}
              </Typography>
              {/* {modalObj.open && ( */}
              {profile !== userId?.userId && (
                <Stack alignItems={"flex-end"} justifyContent={"flex-end"}>
                  <Button
                    onClick={() => {
                      dispatch(resetModal());
                      dispatch(resetChat());
                      dispatch(
                        setChat({
                          open: true,
                          receiverId: userProfile.userId,
                        })
                      );
                      handleClose();
                    }}
                    variant="contained"
                    // endIcon={<SendIcon />}
                    // className={btnStyles["btn-primary-clr"]}
                  >
                    Chat
                  </Button>
                </Stack>
              )}
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      </Grid>
    </Box>
  );
}
