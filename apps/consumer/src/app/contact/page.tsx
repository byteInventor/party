import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Eco Farm School",
  description: "This is Contact Page for Eco Farm School",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Contact Us"
      /> */}

      <Contact />
    </>
  );
};

export default ContactPage;
