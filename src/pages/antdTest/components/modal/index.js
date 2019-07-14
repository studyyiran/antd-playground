import React, { useEffect } from "react";
import { Modal } from "antd";

export default function() {
  useEffect(() => {
    return;
    const modal = Modal.info();
    modal.update({
      title: "修改的标题",
      content: (
        <ul>
          <li>123123</li>
        </ul>
      ),
      footer: null
    });
    // modal.destroy();
  }, []);
  return (
    <table>
      <div>123</div>
      <div>456</div>
    </table>
  );
  return (
    <Modal title="Basic Modal" visible={true}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}
