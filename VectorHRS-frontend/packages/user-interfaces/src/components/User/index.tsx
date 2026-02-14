import React from 'react';
import Layout from '../Layout';
import DynamicTable from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const User: React.FC = () => {
  return (
    <Layout>
      <div className="dashboard">
        <div className="main-content">
        <DynamicTable resource={resources.User} includeHeader={['email', 'password','is_active']}  />
        </div>
      </div>
    </Layout>
  );
};

export default User;