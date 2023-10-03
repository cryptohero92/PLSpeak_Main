import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { red } from "@mui/material/colors";
import UserAvatar from "./UserAvatar";
import { capitalizeFirstLetter } from "../helpers/functions";

export default function UserAvatarGroup({
  isLike = false,
  isDisLike = false,
  users = [],
  max = 4,
  rightText = (users, max) => {},
}) {
  if (users.length == 0) {
    return null;
  }
  return (
    <Box position={"relative"}>
      <Stack direction={"row"} position={"relative"} alignItems={"center"}>
        <Stack direction={"row"} alignItems={"center"}>
          {[...users].splice(0, max).map((user, idx) => {
            console.log("s--s>>>>>>>imax>>>>>", idx, max, user);
            return idx < max - 1 ? (
              isLike || isDisLike ? (
                <>
                  <UserAvatar userId={user.userId} text={user.text} src={user.src} />
                  {idx === users.length - 1 && (
                    <Stack pl={2}>
                      <Typography variant="body2" color="text.primary">
                        {user.text}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {isDisLike ? "disliked this" : "liked this"}
                      </Typography>
                    </Stack>
                  )}
                </>
              ) : (
                <UserAvatar userId={user.userId} text={user.text} src={user.src} />
              )
            ) : isLike || isDisLike ? (
              <Stack pl={2}>
                <Typography variant="body2" color="text.primary">
                  {capitalizeFirstLetter(user.name)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {[...users].splice(max, users.length - 1).length} more {isDisLike ? "disliked" : "liked"} this
                </Typography>
              </Stack>
            ) : null;
          })}
        </Stack>
      </Stack>
    </Box>
  );
}
