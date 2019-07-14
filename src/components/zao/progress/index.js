import React from 'react';
import './index.scss';

function Progress({
  currentProgress,
  list = ['入学档案', '训练营公约', '个性宣言', '领取学生证'],
  lineColor = '#FFFFFF',
  fontColor = '#FFFFFF',
  disabledColor = 'rgba(255,255,255,0.5)',
  normalColor = '#FFFFFF',
}) {
  currentProgress = Number(currentProgress);
  const RenderFunc = stepFinish => (
    <div
      style={{ background: stepFinish ? normalColor : disabledColor }}
      className="zao-view circle_inner"
    />
  );
  return (
    <div className="zao-view top-progress-component">
      {list.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className="item">
              <div className="zao-view circle_container">
                <div
                  style={{ borderColor: index === currentProgress ? normalColor : 'transparent' }}
                  className="zao-view circle_out"
                >
                  {RenderFunc(index <= currentProgress)}
                </div>
              </div>
              <div
                style={index <= currentProgress ? { color: normalColor, fontWeight: currentProgress === index ? '600' : 'normal'} : { color: disabledColor }}
              >
                {item}
              </div>
            </div>
            {index !== list.length - 1 ? (
              <div style={{ background: lineColor }} className="zao-view circle_line" />
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Progress;
