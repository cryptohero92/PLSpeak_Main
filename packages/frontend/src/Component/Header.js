import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/logo 1.png";
import { Card, Modal, TextField } from "@mui/material";
import { ButtonBase, Stack } from "@mui/material";
import { borderRadius } from "@mui/system";
import Connect from "./Login";
import girl from "../assets/Girl.png";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "./Context";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// import { useTheme } from '@mui/material/styles';
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import apiRequest, { cookies } from "../Service/auth";
import FileUpload from "./FileUpload";
import { FILE_SERVER_URL } from "../constants/portConstants";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../store/profile/profileActions";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 560,
};

const profilestyle = {
  position: "absolute",
  borderRadius: "4px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#1b2131",
  border: "1px solid #333333",
  boxShadow: 24,
  // p: 2
  // pt: 2,
  // px: 4,
  // pb: 3,
};

const Header = () => {
  const [data, setData] = React.useState("");
  console.log("data---->>>>>>", data);
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [registerOpen, setRegisterOpen] = React.useState(false);

  const handleProfileOpen = () => {
    setProfileOpen(true);
  };
  const handleProfileClose = () => {
    setProfileOpen(false);
  };

  const handleRegisterOpen = () => {
    setRegisterOpen(true);
  };
  const handleRegisterClose = () => {
    setRegisterOpen(false);
  };

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMarketsClick = () => {
    handleClose();
    navigate("/markets");
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const user = useSelector((state) => state.profile.profile);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [address, setAddress] = useState("");
  const [file, setFile] = useState(null);
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  console.log("user--->>>>>>.", user);
  const isSIDExists = cookies.get("SID");

  React.useEffect(() => {
    if (cookies.get("SID")) {
      dispatch(getProfile());
      connectWallet();
    }
  }, []);

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
    // connectWallet();
    // dispatch(getProfile());
  }, []);

  const connectWallet = async () => {
    console.log("file------>>>>>>>>");

    if (window.ethereum) {
      try {
        setAddress("");
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const connectedAddress = await signer.getAddress();
        setAddress(connectedAddress);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please install MetaMask or another Ethereum wallet extension");
    }
  };

  const handleCreate = async () => {
    // setLoading(true);
    // setError({ path: null });
    // let validName = userName ? /^[a-zA-Z\s]+$/.test(userName) : false;
    // if (!validName || !file) {
    //   setError({
    //     path: !validName ? "userName" : "file",
    //     message: !validName
    //       ? `Please enter ${userName ? "valid" : "your"} name`
    //       : "Please upload your profile picture!",
    //   });
    //   return;
    // }
    const formData = new FormData();
    formData.append("uploaded_file", file);
    formData.append("userName", data);
    formData.append("accountAddress", address);
    // let refId = await localStorage.getItem("refId");
    // if (refId) formData.append("referralId", refId);
    const response = await apiRequest({
      url: "auth/register",
      method: "POST",
      data: formData,
    });
    // setLoading(false);
    console.log("S-s-s>>>>>>>>>>>>>>>>>", response);
    if (response.success) {
      await cookies.set("SID", response.data.accessToken);
      await localStorage.setItem("userId", response.data.userId);
      await localStorage.setItem("profile", response.data.profile);
      await localStorage.setItem("userName", response.data.userName);
      await localStorage.removeItem("refId");
      setRegisterOpen(false);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };
  useEffect(() => {
    const getUser = async () => {
      let sid = await cookies.get("SID");
      if (sid) {
        setRegisterOpen(false);
      } else {
        login(address);
      }
    };
    if (address) getUser();
  }, [address]);

  const login = async (accountAddress) => {
    // setLoading(true);
    const response = await apiRequest({
      url: "auth/login",
      method: "POST",
      data: {
        accountAddress,
      },
    });
    // setLoading(false);
    console.log("response", response.success && response.data.data);
    if (response.success && response.data.data) {
      console.log("trueee");
      const { accessToken, ...rest } = response.data;
      await cookies.set("SID", response.data.accessToken);
      await localStorage.setItem("userId", response.data.userId);
      await localStorage.setItem("profile", response.data.profile);
      await localStorage.setItem("userName", response.data.userName);
      // updateUserAccount(rest);
      setRegisterOpen(false);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      console.log("false");
      setRegisterOpen(true);
    }
  };
  const onLogout = () => {
    console.log("logout");
    cookies.remove("SID");
    localStorage.removeItem("userData");
    window.location.reload();
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: theme.palette.mode === "dark" ? "#060b1f" : "#E5E5E5",
          boxShadow: "unset",
        }}
      >
        <Stack direction={"row"} width={"100%"}>
          <Stack
            px={5}
            direction={"row"}
            width={"100%"}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Box
                onClick={() => navigate("/")}
                pl={{ xs: 10, md: 0 }}
                component="img"
                sx={{
                  height: "60px",
                  width: "200px",
                  py: "20px",
                  cursor: "pointer",
                }}
                alt="The house from the offer."
                src={logo}
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Stack direction={"row"} spacing={5} alignItems={"center"}>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "50px",
                        color: "#5147CE",
                        border: "1px solid #5147CE",
                        height: "28px",
                        textTransform: "none",
                      }}
                    >
                      Toggle Theme
                    </Button>
                    {/* <Button variant='contained' sx={{ borderRadius: "50px", color: "#fff", height: "28px", bgcolor: "#47C6CE", textTransform: 'none' }} onClick={handleOpenModal}>Login</Button> */}
                    <Avatar
                      onClick={handleClick}
                      // sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      alt="Remy Sharp"
                      src={girl}
                      sx={{
                        width: { xs: 38, md: 52 },
                        height: { xs: 38, md: 52 },
                      }}
                    />
                  </Stack>
                </MenuItem>
              </Menu>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Stack
                  sx={{
                    bgcolor: theme.palette.mode === "dark" ? "#262c42" : "#fff",
                  }}
                >
                  {!isSIDExists && (
        <MenuItem
          sx={{
            bgcolor:
              theme.palette.mode === "dark" ? "#262c42" : "#fff",
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
            fontWeight: "500",
            fontSize: "13px",
            fontStyle: "normal",
            fontFamily: "'Poppins', sans-serif",
          }}
          onClick={handleOpenModal}
        >
          Login
        </MenuItem>
      )}
                  {/* <MenuItem
                    sx={{
                      bgcolor:
                        theme.palette.mode === "dark" ? "#262c42" : "#fff",
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",

                      fontWeight: "500",

                      fontSize: "13px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    onClick={handleOpenModal}
                  >
                    Login
                  </MenuItem> */}
                  <MenuItem
                    sx={{
                      bgcolor:
                        theme.palette.mode === "dark" ? "#262c42" : "#fff",
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",
                      fontWeight: "500",
                      fontSize: "13px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    onClick={handleClose}
                  >
                    Feeds
                  </MenuItem>
                  <MenuItem
                    sx={{
                      bgcolor:
                        theme.palette.mode === "dark" ? "#262c42" : "#fff",
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",
                      fontWeight: "500",
                      fontSize: "13px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    onClick={handleMarketsClick}
                  >
                    All Markets
                  </MenuItem>
                  <MenuItem
                    sx={{
                      bgcolor:
                        theme.palette.mode === "dark" ? "#262c42" : "#fff",
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",
                      fontWeight: "500",
                      fontSize: "13px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    onClick={handleClose}
                  >
                    Activity
                  </MenuItem>
                  <MenuItem
                    sx={{
                      bgcolor:
                        theme.palette.mode === "dark" ? "#262c42" : "#fff",
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",
                      fontWeight: "500",
                      fontSize: "13px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    onClick={handleClose}
                  >
                    Liquidity
                  </MenuItem>
                  <MenuItem
                    sx={{
                      bgcolor:
                        theme.palette.mode === "dark" ? "#262c42" : "#fff",
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",
                      fontWeight: "500",
                      fontSize: "13px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                    onClick={onLogout}
                  >
                    Logout
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <Button
                      sx={{
                        textTransform: "none",
                        gap: 2,
                      }}
                      onClick={colorMode.toggleColorMode}
                      color="inherit"
                      spacing={1}
                    >
                      <Typography
                        sx={{
                          fontWeight: "500",
                          // bgcolor: theme.palette.mode === "dark" ? "#262c42" : "#fff",
                          color:
                            theme.palette.mode === "dark" ? "#fff" : "#000",
                          fontSize: "13px",
                          fontStyle: "normal",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                        component={"span"}
                      >
                        {theme.palette.mode === "dark"
                          ? "Light Mode"
                          : "Dark Mode"}
                      </Typography>
                      {theme.palette.mode === "dark" ? (
                        <Brightness7Icon />
                      ) : (
                        <Brightness4Icon />
                      )}
                    </Button>
                  </MenuItem>
                </Stack>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: -1, display: { xs: "flex", md: "none" } }}
            >
              <Box
                onClick={() => navigate("/")}
                pl={{ xs: 10, md: 0 }}
                component="img"
                sx={{
                  height: "60px",
                  width: "200px",
                }}
                alt="The house from the offer."
                src={logo}
              />
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>

            <Box sx={{ flexGrow: 0 }}>
              <Stack direction={"row"} spacing={5} alignItems={"center"}>
                {/* <Tooltip title="Open settings"> */}
                {/* <Button variant='outlined' sx={{ borderRadius: "50px", color: "#5147CE", border: "1px solid #5147CE", height: "28px", textTransform: 'none', display: { xs: 'none', md: 'flex' } }}>Deposit</Button> */}
                {/* </Tooltip> */}
                <Button
                  variant="contained"
                  onClick={
                    address && cookies.get("SID")
                      ? handleProfileOpen
                      : connectWallet
                  }
                  sx={{
                    borderRadius: "50px",
                    color: "#ffffff",
                    border: "1px solid #5147CE",
                    height: "45px",
                    textTransform: "none",
                    maxWidth: "200px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    background:
                      "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",

                    display: { xs: "none", md: "flex" },
                  }}
                  endIcon={<SportsVolleyballIcon />}
                >
                  {address
                    ? address.substring(0, 5) + "..." + address.substring(10, 5)
                    : "Login"}
                </Button>

                {/* <Button variant='contained' sx={{ borderRadius: "50px", color: "#fff", height: "28px", bgcolor: "#47C6CE", textTransform: 'none', display: { xs: 'none', md: 'flex' } }} onClick={handleOpenModal}>Login</Button> */}
                <Avatar
                  onClick={handleClick}
                  // sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  alt="Remy Sharp"
                  src={FILE_SERVER_URL + user?.profile}
                  sx={{
                    width: { xs: 38, md: 52 },
                    height: { xs: 38, md: 52 },
                    curser: "pointer",
                  }}
                />
              </Stack>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}></MenuItem>
              </Menu>
            </Box>
          </Stack>
        </Stack>
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box sx={style} style={{ borderRadius: 20 }}>
            <Connect />
          </Box>
        </Modal>

        <Modal
          open={profileOpen}
          onClose={handleProfileClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box
            sx={{
              ...profilestyle,
              width: 450,

              bgcolor: theme.palette.mode === "dark" ? "#262c42" : "#E5E5E5",
            }}
          >
            <Stack padding={2}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography></Typography>
                <Typography
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                    fontWeight: "500",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                  fontWeight={"bold"}
                >
                  Account
                </Typography>
                {/* <IconButton> */}
                <CloseOutlinedIcon
                  onClick={handleProfileClose}
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",
                    fontSize: "30px",
                    cursor: "pointer",
                  }}
                />
                {/* </IconButton> */}
              </Stack>
              <Stack py={2}>
                <Divider />
              </Stack>

              <Box
                sx={{
                  // backgroundColor: "#1b2131",
                  borderRadius: 3,
                  borderColor: "#000",
                  borderWidth: 1,
                  borderStyle: "solid",
                  marginTop: 2,
                  padding: 2,
                  spacing: 4,
                }}
              >
                <Typography
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#000",

                    fontWeight: "400",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  connected with MetaMask on Pulsechain
                </Typography>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1}
                  mt={2}
                >
                  <SportsVolleyballIcon
                    onClick={handleProfileClose}
                    sx={{
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "400",
                      color: theme.palette.mode === "dark" ? "#fff" : "#000",

                      fontSize: "22px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {address
                      ? address.substring(0, 5) +
                        "..." +
                        address.substring(10, 5)
                      : "Connect Wallet"}
                  </Typography>
                </Stack>
                <Stack
                  width={"100%"}
                  direction={"row"}
                  spacing={1}
                  paddingTop={1}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "50px",
                      color: "#ffffff",
                      // border: "1px solid #5147CE",
                      fontWeight: "500",
                      fontSize: "13px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                      height: "50px",
                      textTransform: "none",
                      maxWidth: "200px",
                      background:
                        "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Copy Address
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleProfileOpen}
                    sx={{
                      borderRadius: "50px",
                      color: "#ffffff",
                      // border: "1px solid #5147CE",
                      height: "50px",
                      fontWeight: "500",
                      fontSize: "13px",
                      fontStyle: "normal",
                      fontFamily: "'Poppins', sans-serif",
                      background:
                        "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",
                      textTransform: "none",
                      maxWidth: "200px",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",

                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    View on Etherscam
                  </Button>
                </Stack>
              </Box>
              <Stack
                width={"100%"}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                direction={"row"}
                justifyContent={"end"}
                spacing={1}
                paddingTop={1}
              >
                <Button
                  variant="contained"
                  onClick={handleProfileOpen}
                  sx={{
                    borderRadius: "50px",
                    color: "#ffffff",
                    // border: "1px solid #5147CE",
                    height: "50px",
                    textTransform: "none",
                    maxWidth: "200px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    fontWeight: "500",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontFamily: "'Poppins', sans-serif",
                    background:
                      "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",

                    display: { xs: "none", md: "flex" },
                  }}
                >
                  Faucet 10k USDC
                </Button>
                <Button
                  variant="contained"
                  onClick={handleProfileOpen}
                  sx={{
                    borderRadius: "50px",
                    color: "#ffffff",
                    // border: "1px solid #5147CE",
                    height: "50px",
                    textTransform: "none",
                    maxWidth: "200px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    fontWeight: "500",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontFamily: "'Poppins', sans-serif",
                    background:
                      "linear-gradient(rgb(171, 0, 251) 16%, rgb(98, 86, 250) 100%)",

                    display: { xs: "none", md: "flex" },
                  }}
                >
                  Switch Wallet
                </Button>
              </Stack>
            </Stack>

            <Stack
              sx={{
                bgcolor: theme.palette.mode === "dark" ? "#000" : "#F6F7F8",

                height: "25px",
                borderRadius: " 0px 0px 4px 4px",
                // alignItems:"center"
                justifyContent: "center",
                padding: 2,
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  color: theme.palette.mode === "dark" ? "#fff" : "#000",
                  fontSize: "13px",
                  fontStyle: "normal",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Your transactions will appear here
              </Typography>
            </Stack>
          </Box>
        </Modal>
        <Modal
          open={registerOpen}
          onClose={handleRegisterClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box
            sx={{
              ...profilestyle,
              width: 450,
              bgcolor: theme.palette.mode === "dark" ? "#262c42" : "#000",
            }}
          >
            <Stack padding={2}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography></Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    color: "#fff",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                  fontWeight={"bold"}
                >
                  Let's create your profile!
                </Typography>
                {/* <IconButton> */}
                <CloseOutlinedIcon
                  onClick={handleRegisterClose}
                  sx={{
                    color: "#fff",
                    fontSize: "30px",
                    cursor: "pointer",
                  }}
                />
                {/* </IconButton> */}
              </Stack>
            </Stack>

            <Stack
              spacing={2}
              sx={{
                bgcolor: theme.palette.mode === "dark" ? "#000" : "#E5E5E5",
                borderRadius: " 0px 0px 4px 4px",
                // alignItems:"center"
                justifyContent: "center",
                padding: 3,
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  color: "#fff",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontFamily: "'Poppins', sans-serif",
                }}
                fontWeight={"bold"}
              >
                Your name*
              </Typography>
              <TextField
                id="outlined-basic"
                label="Enter your name"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setData(e.target.value);
                }}
              />
            </Stack>
            <Stack
              spacing={2}
              sx={{
                bgcolor: theme.palette.mode === "dark" ? "#000" : "#E5E5E5",
                height: "25px",
                borderRadius: " 0px 0px 4px 4px",
                // alignItems:"center"
                justifyContent: "center",
                padding: 3,
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  color: "#fff",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontFamily: "'Poppins', sans-serif",
                }}
                fontWeight={"bold"}
              >
                Upload Profile*
              </Typography>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                href="#file-upload"
                onChange={(event) => {
                  const files = event.target.files;
                  if (files.length > 0) {
                    setFile(files[0]);
                  }
                }}
              >
                Upload a file
                <VisuallyHiddenInput type="file" />
              </Button>
            </Stack>
            {file && (
              <Stack
                sx={{
                  bgcolor: theme.palette.mode === "dark" ? "#000" : "#E5E5E5",
                  height: "55px",
                  borderRadius: " 0px 0px 4px 4px",
                  // alignItems:"center"
                  justifyContent: "center",
                  padding: 3,
                }}
              >
                <div>
                  <img
                    width="100"
                    height={100}
                    src={URL.createObjectURL(file)}
                    alt="Thumb"
                  />
                </div>
              </Stack>
            )}
            <Stack
              sx={{
                bgcolor: theme.palette.mode === "dark" ? "#000" : "#E5E5E5",
                height: "25px",
                borderRadius: " 0px 0px 4px 4px",
                // alignItems:"center"
                justifyContent: "center",
                padding: 3,
              }}
            >
              <Button variant="contained" onClick={handleCreate}>
                Create
              </Button>
            </Stack>
          </Box>
        </Modal>
      </AppBar>
    </>
  );
};
export default Header;
