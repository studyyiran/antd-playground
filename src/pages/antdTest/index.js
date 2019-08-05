import React from "react";
import Modal from "./components/modal";
import Tabs from "./components/tabs";
import Custom from "../form/custom";
import Normal from "../form/normal/index";
import Test from "../form/test/index";
export default function() {
  return <Test />;
  return <Normal />;
  return <Custom />;
  return <Modal />;
}
