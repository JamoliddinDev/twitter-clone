import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import TwitterIcon from "@material-ui/icons/Twitter";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import TelegramIcon from "@material-ui/icons/Telegram";
function Form() {
  return (
    <div>
      <form action="#">
        <input type="text" placeholder="hello" />
      </form>
      <HomeIcon />
      <TwitterIcon />
      <AirplanemodeActiveIcon />
      <TelegramIcon />
    </div>
  );
}

export default Form;
