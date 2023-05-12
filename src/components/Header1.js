import React from "react";

const Header1 = () => {
    const savedTime    = new Date();
const formatedDate = new Date(savedTime).toLocaleString(
  "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
);
    return (
        <div className="header">
            <div>
                {formatedDate}
            </div>
        </div>
    )
}

export default Header1;