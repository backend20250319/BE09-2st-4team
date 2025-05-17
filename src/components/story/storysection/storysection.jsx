import React from 'react';
import '@/styles/story/brandstory/storysection.css'; // CSS 파일

export default function StorySection({ items }) {
  return (
    <div className="story-list">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`story-item ${item.iconPosition} ${item.offsetClass || ''}`}
        >
          {/* 1) 로고 + 연도 아이콘 */}
          <div className="story-logo">
            <img src={item.icon} alt={`${item.year} icon`} />
            <div className="story-year">{item.year}</div>
          </div>

          {/* 2) 콘텐츠 박스 */}
          <div
            className="story-box"
            style={{ backgroundImage: `url(${item.bgImage})` }}
          >
            <div className="story-text">
              <h3>{item.title}</h3>
              <p>
                {item.desc.split('\n').map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
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
