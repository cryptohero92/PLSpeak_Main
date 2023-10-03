import { Avatar } from "@mui/material";
import React, { memo, useEffect, useState } from "react";
import { red } from "@mui/material/colors";
// import apiRequest from "modules/services/auth";
import { FILE_SERVER_URL } from "../constants/portConstants";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { setModal } from "../store/modal/modalReducers";
// import { useUserStore } from "@augurproject/comps";

function UserAvatar({
  setModalOpen = (open) => {},
  disableUserProfile = false,
  userId = "",
  text = null,
  alt = "N/A",
  src = null,
  visibility = true,
  ...restProps
}) {
//   const { userAccount } = useUserStore();
  const dispatch = useDispatch();
//   const modalObj = useSelector((state) => state.modal.modalObj, shallowEqual);

  if (!text && !src) {
    return null;
  }
  console.log("s-s-s>>>>>>>>>>>>srccc>>", FILE_SERVER_URL + src, text);
  return src ? (
    <Avatar
      onClick={() => {
        if (!disableUserProfile) {
          dispatch(
            setModal({
              open: true,
              type: "profile",
              props: {
                userId,
              },
            })
          );
        }
      }}
      alt={alt}
      className="mt-1"
      src={FILE_SERVER_URL + src}
      {...restProps}
    />
  ) : (
    <Avatar
      sx={{ background: "linear-gradient(#ab00fb 16%, #6256fa 100%) !important" }}
      aria-label="recipe"
      onClick={() => {
        if (!disableUserProfile) {
          dispatch(
            setModal({
              open: true,
              type: "profile",
              props: {
                userId,
              },
            })
          );
        }
      }}
      {...restProps}
    >
      {text.length > 0 ? text[0].toUpperCase() : "N/A"}
    </Avatar>
  );
}

export default memo(UserAvatar);
