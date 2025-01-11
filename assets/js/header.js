// JavaScript
const icon = document.getElementById("icon");
const header = document.getElementById("header");
const headerContent = document.getElementById("headerContent");

icon.addEventListener("click", function () {
    if (header.style.height === "81.5px") {
        header.style.height = "183px"; // Mở rộng
        headerContent1.style.height = "79.5px"; // Hiển thị nội dung
        headerContent1.style.display = "block"; // Hiển thị nội dung
    } else {
        header.style.height = "81.5px"; // Thu lại
        headerContent1.style.height = "0"; // Ẩn nội dung
        headerContent1.style.display = "none"; // Hiển thị nội dung

    }
}
);