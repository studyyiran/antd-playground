import MyModal from "../../myModal";
import React from "react";

export default function (e) {
  MyModal.confirm({
    children: <div className='zao-center'>{e && e.message}</div>,
    footer: 'single',
    cancelText: '确认'
  })
}
