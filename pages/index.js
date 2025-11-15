import Scrollbar from "./test/scrollbar"
import Footer from "@/comps/footer"
import { withLayout } from "@/lib/withLayout"; 

export default function Home() {
  return (
    <>
      <Footer />
      <div style={{ height: "300vh" }} />
      <Scrollbar />
    </>
  )
};
Home.displayName = "Home";
