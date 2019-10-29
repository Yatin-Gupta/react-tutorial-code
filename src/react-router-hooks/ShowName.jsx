import React from "react";
import { useParams, useHistory, useLocation, Link } from "react-router-dom";

function ShowName(props) {
  const { firstName, lastName } = useParams();
  const history = useHistory();
  const location = useLocation();
  return (
    <div>
      <Link
        to={{
          pathname: "/router-dome/John/Doe"
        }}
      >
        John Doe
      </Link>
      Comes to path - {location.pathname} <br />
      {firstName} - {lastName}
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default ShowName;
