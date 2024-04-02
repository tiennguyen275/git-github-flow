var countdownElement = document.getElementById("countdown");
var startButton = document.getElementById("startButton");

// Hàm đếm ngược
function countdown(count) {
  countdownElement.innerText = count;
  if (count === 0) {
    countdownElement.innerText = "Blast off!";
    startButton.style.display = "inline-block"; // Hiển thị lại nút khi countdown kết thúc
  } else {
    setTimeout(function() {
      countdown(count - 1);
    }, 1000); // Đợi 1 giây trước khi giảm count và gọi lại countdown với giá trị mới
  }
}

// Sự kiện khi nhấp vào nút "Start Countdown"
startButton.onclick = function() {
  startButton.style.display = "none"; // Ẩn nút khi countdown bắt đầu
  countdown(4); // Bắt đầu countdown từ 4
};
