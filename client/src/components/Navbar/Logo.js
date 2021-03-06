import React from "react";

const Logo = ({active, ...props}) => {
    

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 150 45" {...props}>
      <image
        href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAAAaCAMAAAC5Fv9RAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAM1BMVEUAAACQr+yQr+yQr+yQr+yQr+yQr+yQr+yQr+yQr+yQr+yQr+yQr+yQr+yQr+yQr+wAAABjdqraAAAAD3RSTlMAEVV3iLuqZiIzRN2Z7sxHO+YQAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAw5JREFUSMfNV9my5CAIjSHuMfn/vx3Z1Gy301O3aoaHbtPAEfEA6WkSMTMs1oEP0/8g3u4qLv7rYKaU91H8L0IbAPOtD2AQ1mNe0orr+ffiqXmHL10whNJCiKU+vTv6i4uNFTv9RXYG6OVlglJ5cfJ6VvtdOKbm4wCc9ncprpxbPtmE79OD22eiHORwjCfAjB/39PbV7GNv6Ol5vNuzIun1eDkKaDxzXRCdbrHyiyy29Piyb/enuirAUjiVecXIRhxBLY1MZL8rWK/mPwloepATtxaPimnb91XTwyAOq259aEdv0oPUTLrtPdceFSB0iL3aTArycZue/Cmcnp5HEj4q8ChWwtKEhPk8zYKH0NLz2MVNgnRMz/SAcuMkgjRJyefeGiNPNMckARsnv3HuorO4siwXskMRFntND1i52hHloOhOEnIfXjbohbAs8rTIxIXKq1FOLDJb+zXLDkE5e0AZFYMTS9vCpcaPPZMzzQ783otzdIgI9TsDi7+Gs20USKNYa0J5RBkUgxNL4mCy1woOhatt4xOA3Nws4dkn9iAyVLg8UKw3oROKKkYnFuw0MFZMjdzh90InoJpbpzas07G4kkgk+wWpFwejMT0jSlMMTizYiBczTNWgs8CiKXHNcRzUAzU9xraSJEGD1m21TrHKaAEnFFWMTtxcuCOv0hCn3jho1vJVmqn1QD15zIQ/S6FZj4EKB0xWo31cHFFYMTittC3e68YGoZ1NMymSWpRmkUqoj9txYoR2Ul+6ES/8DYoqulOJkgTPgdIGwUnoCOZXp0VfDxYNXV6daGlrvakTSaA9v/5GMqIwePsziiqaU46yK10oFlUtY6l9C5nj1EGL+XP48ojI291LElqsgDY7dooVP9DQrbT9EcV3hTrx+WyDnuVyilK0eL40aOVafcUqX0dBo1uejQDMURblhGJUAd2JUVznN/3PKPUPwcpOgfX8YoEABX/axOgqRJt9k8tno5WRLiiqGJ2YhevSsamLoBu08WZ0+unEMx6e3kGrahbrWY0iTeULiioOTtP0B4TVPmH8XaEzAAAAAElFTkSuQmCC"
        x="4"
        y="9"
        width="143"
        height="26"
      />
    </svg>
  );
};

export default Logo;