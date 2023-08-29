import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import FirstForm from "./components/FirstForm";

function Profile() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SoftBox py={3}>
        <FirstForm />
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}
export default Profile;
