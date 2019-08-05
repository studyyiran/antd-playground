import React from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;
/*
1）key tab 都为必填
 */
export default function() {
  return (
    <div>
      <p>start</p>
      <Tabs defaultActiveKey="1">
        <TabPane key="1" tab="Tab 1">story1</TabPane>
        <TabPane key="2" tab="Tab 2" />
        <TabPane key="3" tab="Tab 3" />
      </Tabs>
      <p>end</p>
    </div>

  );
}
