import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    //if user hold command(mac) or control(windows) key
    if (event.metaKey || event.ctrlKey) {
      //not want to run any of the stuff above.
      //Instead, we're going to want to allow the browser to just do its normal thing,
      //which is open up a new tab and navigate to the clicked link
      return;
    }

    event.preventDefault(); //do not do a full page reload
    window.history.pushState({}, "", href);

    //this is going to communicate over to those route components that the URL has just changed.
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};
export default Link;
