import React from "react";
import "./MailList.css";
import {
  Redo,
  MoreVert,
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  Settings,
  Inbox,
  People,
  LocalOffer,
} from "@mui/icons-material";
import { IconButton, Checkbox } from "@mui/material";
import Section from "../../Layout/Section/Section";
import MailRow from "./MailRow";

function MailList() {
  return (
    <div className="mailList">
      <div className="mailList__settings">
        <div className="mailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="mailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" selected />
        <Section Icon={People} title="Social" />
        <Section Icon={LocalOffer} title="Promotions" />
      </div>
      <div className="mailList__List">
        <MailRow
          title="Twitch"
          subject="Hey Fellow Streamer"
          description="This is a test"
          time="10pm"
        />
        <MailRow
          title="Twitch"
          subject="Hey Fellow Streamer"
          description="This is a test"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default MailList;
