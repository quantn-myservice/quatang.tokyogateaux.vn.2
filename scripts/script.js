document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let formData = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
  };

  fetch(
    "https://script.google.com/macros/s/AKfycbzsr6866WbY0HwqcyWLR-gxl5P0C-rnuCZ7VSIGPhNTebfRMK5pVrRLjQkV2SlPZg0k/exec",
    {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((response) => response.json())
    .then((data) => alert("Gửi thành công!"))
    .catch((error) => alert("Lỗi: " + error));
});
