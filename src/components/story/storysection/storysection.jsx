import React from 'react';
import '@/styles/story/brandstory/storysection.css';  // 새로 추가할 CSS

export default function StorySection({ items }) {
  return (
    <div className="story-list">
      {items.map((item, idx) => (
        <div key={idx} className={`story-item ${item.iconPosition}`}>
          {/* 1) 로고 + 연도 아이콘  왼쪽 */}
          <div className="story-logo">
            <img src={item.icon} alt={`${item.year} icon`} />
            <div className="story-year">{item.year}</div>
          </div>

          {/* 2) 컨텐츠 박스 (배경 + 텍스트 + 썸네일) */}
          <div
            className="story-box"
            style={{ backgroundImage: `url(${item.bgImage})` }}
          >
            <div className="story-text">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
            <div className="story-thumb">
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
