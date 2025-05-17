export default function InfoWindow(store) {
  return `
  
  <div class="marker_container">
  <div class="marker_inner">
    <div class="marker_header">
      <h3 class="marker_title">
        <span class="marker_type">BR ${
          store.store_type === "A" ? "BR31" : "100flavor"
        }</span>${store.store_name}
      </h3>
      <button class="marker_button" id="closeButton">
        <img
          classNaeme="marker_button_img"
          src="/images/store/map/btn_close.png"
        />
      </button>
    </div>
    <div class="marker_content">
      <table class="marker_table">
        <tbody>
          <tr>
            <th>매장주소</th>
            <td>${
              store.addr_si + " " + store.addr_gugun + " " + store.addr_road
            }</td>
          </tr>
          <tr>
            <th>전화번호</th>
            <td>${store.local_no}</td>
          </tr>
          <tr>
            <th>운영시간</th>
            <td>${store.opertion_time}</td>
          </tr>
          <tr>
            <th>매장서비스</th>
            <td>${store.service_info}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`;
}
