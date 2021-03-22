import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Profile = () => {
  return (
    <Svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 12.1537C14.75 12.1537 17 9.97293 17 7.30756C17 4.64218 14.75 2.46143 12 2.46143C9.25 2.46143 7 4.64218 7 7.30756C7 9.97293 9.25 12.1537 12 12.1537ZM12 14.5768C8.625 14.5768 2 16.1518 2 19.4231V21.8462H22V19.4231C22 16.1518 15.375 14.5768 12 14.5768Z"
        fill="#444444"
      />
    </Svg>
  );
};

export default Profile;
