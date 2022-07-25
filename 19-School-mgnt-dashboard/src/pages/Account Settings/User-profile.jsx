import React from "react";
import { Row } from "reactstrap";

import Breadcrumb from '../../components/Common/Breadcrumb';

const UserProfile = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <Breadcrumb breadcrumbItem="Home" title="User Profile" />
        </Row>
        <h1> User Profile </h1>
      </div>
    </React.Fragment>
  );
};

export default UserProfile;
