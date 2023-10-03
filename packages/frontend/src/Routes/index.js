import * as React from "react";
import routes from "./RoutesConstants";
import PrivateRoute from "./PraivateRoute";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import CommonRoute from "./CommonRoute";
import { CircularProgress, LinearProgress, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserId,
  wsConnect,
  wsDisconnect,
} from "../store/socket/socketReducers";

function Router() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.profile.profile?.userId);
  React.useEffect(() => {
    dispatch(wsConnect());
    console.log("Socket should be connected from App.tsx");
    return () => {
      dispatch(wsDisconnect());
    };
  }, [dispatch, userId]);
  return (
    <Suspense
      fallback={
        <Stack
          direction={"row"}
          height={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CircularProgress />
        </Stack>
      }
    >
      <Routes>
        {routes.map(
          (
            { element: Component, path, isAuthenticated, isCommon, ...rest },
            i
          ) => {
            return (
              <Route
                {...rest}
                path={path}
                element={
                  isCommon ? (
                    <Component />
                  ) : isAuthenticated ? (
                    <PrivateRoute>
                      <Component />
                    </PrivateRoute>
                  ) : (
                    <CommonRoute>
                      {" "}
                      <Component />
                    </CommonRoute>
                  )
                }
              />
            );
          }
        )}
      </Routes>
    </Suspense>
  );
}

export default Router;
