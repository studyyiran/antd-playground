import React, { useEffect, useState } from "react";
import "./index.scss";
import { Modal } from "antd";

export default function() {
  const isConfirm = false;
  const [show, setShow] = useState(false);
  const [center, setCenter] = useState(false);
  useEffect(() => {
    if (!isConfirm) {
      return;
    }
    const modal = Modal.info();
    modal.update({
      title: "修改的标题",
      content: (
        <ul>
          <li>123123</li>
        </ul>
      ),
      onCancel: () => {
        console.log("onCancel");
      },
      wrapClassName: "za0",
      footer: null,
      mask: true,
      maskClosable: true,
      maskStyle: { background: "red" }
    });
    // modal.destroy();
  }, [isConfirm]);
  if (isConfirm) {
    return null;
  }

  function inputHandler(e) {
    console.log(Number(e.target.value.length) % 2);
    if (e.target.value.length % 2 === 0) {
      setCenter(true);
    } else {
      setCenter(false);
    }
  }
  const props = {
    hello: "123",
    style: { color: "red" }
  };
  const style = {
    position: "absolute",
    top: "0px",
    left: "0px"
  };
  return (
    <div>
      <div onClick={() => setShow(true)}>onpen</div>
      <Modal
        onCancel={() => {
          console.log("onCancel");
          setShow(false);
        }}
        wrapProps={{ wrapProps: "wrapProps" }}
        maskProps={{ maskProps: "maskProps" }}
        okButtonProps={props}
        centered={center}
        title={"enter new names please"}
        wrapClassName={"my-wrapClassName"}
        className={"my-className"}
        style={style}
        bodyStyle={{ padding: "0 0 0 10px" }}
        visible={show}
        destroyOnClose={false}
      >
        <input placeholder={"enterenter"} onChange={inputHandler} />
      </Modal>
    </div>
  );
}
