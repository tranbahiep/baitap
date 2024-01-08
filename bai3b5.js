function userGuess() {
    var randomNum = Math.floor(Math.random() * 10) +1; // Lấy số ngẫu nhiên từ 1 đến 10
    var userGuess = parseInt(prompt("Hãy đoán số (Từ 1 đến 10):")); // Nhập số từ người dùng và chuyển thành kiểu số nguyên

    while (userGuess !== randomNum) {
        userGuess = parseInt(prompt("Số bạn đoán không đúng.Hãy đoán lại (Từ 1 đến 10):"));
    }

    alert("Chúc mừng! Bạn đã đoán đúng số " + randomNum);}
   userGuess();