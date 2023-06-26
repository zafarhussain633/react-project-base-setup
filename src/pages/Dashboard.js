import React from "react";
import DashboardComp from "components/dashboard";
import ProtectedLayout from "Layout/ProtectedLayout";

const Dashboard = () => {
  return (
    <ProtectedLayout>
      <DashboardComp />
    </ProtectedLayout>
  );
};

export default Dashboard;
