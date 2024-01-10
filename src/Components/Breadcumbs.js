import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcumbs = () => {
  const location = useLocation();
  //console.log("loca", location);
  const pathnames = location.pathname.split("/").filter((x) => x);
  //console.log(pathnames);
  let breadcrumbsPath = "";

  return (
    <>
      <div className="breadcrumbs">
        {pathnames.length > 0 && <Link to="/">Home</Link>}
        {pathnames.map((name, index) => {
          breadcrumbsPath += `/${name}`;
          if (index === pathnames.length - 1) {
            return <span key={breadcrumbsPath}>/ {name}</span>;
          } else {
            return (
              <span key={breadcrumbsPath}>
                /<Link to={breadcrumbsPath}>{name}</Link>
              </span>
            );
          }
        })}
      </div>
    </>
    // <>
    //   <div className="breadcrumbs">
    //     {pathnames.length > 0 && <Link to="/">Home</Link>}
    //     {pathnames.map((name, index) => {
    //       breadcrumbsPath += `/${name}`;
    //       const isLast = index === pathnames.length - 1;
    //       return isLast ? (
    //         <span key={breadcrumbsPath}>/ {name}</span>
    //       ) : (
    //         <span key={breadcrumbsPath}>
    //           /<Link to={breadcrumbsPath}>{name}</Link>
    //         </span>
    //       );
    //     })}
    //   </div>
    // </>
  );
};

export default Breadcumbs;
