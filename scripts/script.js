document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn form reload trang

  // Lấy giá trị từ form
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // Điều kiện kiểm tra
  if (!name || !phone) {
    alert("Vui lòng nhập đầy đủ họ tên và số điện thoại!");
    return;
  }

  // Regex kiểm tra số điện thoại: bắt đầu bằng số 0, có từ 8-11 số
  const phoneRegex = /^0\d{7,10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Số điện thoại không hợp lệ!");
    return;
  }

  // Gửi dữ liệu nếu hợp lệ
  fetch(
    "https://script.google.com/macros/s/AKfycbyFwdQE_PrZyzQOE7m6WlDHkvVdgdowkoDH-A2AmpPDk42chx1fY5DXCo82882HeIHL/exec",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify({ name, phone }),
    }
  )
    .then((response) => response.json())
    .then((data) =>
      alert(
        "Gửi thông tin thành công! Bộ phận chăm sóc khách hàng sẽ liên hệ với bạn trong thời gian sớm nhất. Quý khách cần đặt gấp vui lòng liên hệ Hotline: 090.2040.990"
      )
    )
    .catch((error) => alert("Lỗi: " + error));
});

document.querySelector(".btn-order").addEventListener("click", function () {
  const targetButton = document.querySelector(".btn-form"); // Tìm nút thứ 2
  if (targetButton) {
    targetButton.scrollIntoView({ behavior: "smooth" }); // Cuộn xuống mượt
  }
});

document.querySelector(".btn-order").addEventListener("click", function () {
  const targetButton = document.querySelector(".btn-form"); // Tìm nút thứ 2
  if (targetButton) {
    targetButton.scrollIntoView({ behavior: "smooth" }); // Cuộn xuống mượt
  }
});
