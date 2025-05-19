// BRStoreWay.jsx - 이미지 크기와 패딩 조정
"use client";

export default function BRStoreWaySection() {
  return (
    <div style={{ width: "100%", padding: "60px 0", backgroundColor: "white" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          gap: "0px",
        }}
      >
        {/* Store 섹션 */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "40px 40px 40px 40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px", // p와 이미지 사이 여백을 8px로 줄임
              gap: "16px",
            }}
          >
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "600",
                color: "#ff5484",
                marginBottom: "0",
                textAlign: "left",
              }}
            >
              Store
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#666",
                margin: "0 0 0 16px",
                textAlign: "left",
                whiteSpace: "pre-line",
                alignSelf: "flex-end",
              }}
            >
              내 주변 가까운{'\n'}베스킨라빈스 매장을 찾아보세요
            </p>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 0 10px 0", // p와 이미지 사이 여백을 8px로 줄임
            }}
          >
            <img
              src="/images/main/store_map.png"
              alt="스토어 맵"
              style={{
                width: "90%",
                maxWidth: "400px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
        </div>

        {/* BR Way 섹션 */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "40px 40px 40px 40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px", // p와 이미지 사이 여백을 8px로 줄임
              gap: "16px",
            }}
          >
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "600",
                color: "#ff5484",
                marginBottom: "0",
                textAlign: "left",
              }}
            >
              BR Way
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#666",
                margin: "0 0 0 16px",
                textAlign: "left",
                whiteSpace: "pre-line",
                alignSelf: "flex-end",
              }}
            >
              오랜 시간 우리 곁에 함께한{'\n'}베스킨라빈스의 이야기
            </p>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 0 10px 0", // p와 이미지 사이 여백을 8px로 줄임
            }}
          >
            <img
              src="/images/main/br_way.png"
              alt="BR Way"
              style={{
                width: "90%",
                maxWidth: "400px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
