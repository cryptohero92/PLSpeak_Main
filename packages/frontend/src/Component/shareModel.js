import React, { useEffect, useState, useRef } from "react";
// import Styles from "./shareModel.styles.less.d";
// import "../../../../comps/";
import { CLIENT_URL, NODE_SERVER } from "../constants/portConstants";
import CustomModal from "./customModal";
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
import { Box, Modal } from "@mui/material";
const CLIENT_URL_PREFIX = `${CLIENT_URL}/#!/market?`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

};
const ShareModel = ({
  modalTitle = "Share your comment!",
  open,
  setOpen = (val) => {},
  marketId = "",
  msg = "",
  link = null,
}) => {
  const [openReferral, setOpenReferral] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState([""]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [removeItem, setRemoveItem] = useState(false);
  const [error, setError] = useState({ path: null });
  const shareUrl = link ? link : CLIENT_URL_PREFIX + marketId;
  return (
    <>
    

<Modal
        open={open}
        onClose={() => setOpen(false)}
      
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="modal-header">
            <h5 className="modal-title fs-4 fw-500">{modalTitle}</h5>
            <button
              type="button"
              onClick={() => setOpen(false)}
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div style={{ fontSize: 14 }}>Message: {msg}</div>
            <div className="m-2 mt-4 mb-4">
              <input
                // className={`${Styles["input-style"]}`}
                value={shareUrl}
              ></input>
            </div>
            <div className="d-flex gap-3 justify-content-end">
              <FacebookShareButton
                url={shareUrl}
                title={`Checkout my comment: ${msg}`}
                // quote={msgTitle}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <WhatsappShareButton
                url={shareUrl}
                title={`Checkout my comment: ${msg}`}
                // title={msgTitle}
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>

              <TwitterShareButton
                url={shareUrl}
                title={`Checkout my comment: ${msg}`}
                // title={msgTitle}
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>

              <EmailShareButton
                url={shareUrl}
                title={`Checkout my comment in plspeak`}
                // subject={msgTitle}
                body={msg}
                className="Demo__some-network__share-button"
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
            </div>
          </div>
        </Box>
      </Modal>
     
    </>
  );
};
export default ShareModel;
