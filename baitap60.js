let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header li a');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header li a[href="#${id}"]`).classList.add('active');
        }
    });
});
let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('.navbar-icons li a');

window.addEventListener('scroll', () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLink.forEach(link => {
                link.classList.remove('action');
            });
            document.querySelector(`.navbar-icons li a[href="#${id}"]`).classList.add('action');
        }
    });
});
function myFunction(){
    document.getElementById("portfolio").classList.toggle("show");
}
window.onclick = function(event){
    if(event.target.matches('.navbar-icon')){
        var portfolio = document.getElementsByClassName("portfolio-content");
        var i;
        for(i=0;i<portfolio.length;i++){
            var openportfolio = portfolio[i];
            if(openportfolio.classList.contains("portfolio")){
                openportfolio.classList.remove(portfolio);
            }
        }
    }
}

function handleSubmit() {
    const form = document.getElementById('myForm');
    const errorNameMessage = document.getElementById('error-name-message');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const errorEmailMessage = document.getElementById('error-email-message');
    // Lấy giá trị từ các trường nhập liệu
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    if (name.trim() === '') {
        errorNameMessage.textContent = 'Vui lòng nhập họ và tên.';
        errorEmailMessage.textContent = '';
        errorMessage.textContent = '';
        successMessage.textContent = '';
      } else if (email.trim() === '') {
        errorNameMessage.textContent = '';
        errorEmailMessage.textContent = '';
        errorMessage.textContent = 'Vui lòng nhập địa chỉ email.';
        successMessage.textContent = '';
      } else if (!emailInput.checkValidity()) {
        errorNameMessage.textContent = '';
        errorEmailMessage.textContent = 'Vui lòng nhập một địa chỉ email hợp lệ.';
        errorMessage.textContent = '';
        successMessage.textContent = '';
      } else if (message.trim() === '') {
        errorNameMessage.textContent = '';
        errorEmailMessage.textContent = '';
        errorMessage.textContent = 'Vui lòng nhập tin nhắn.';
        successMessage.textContent = '';
      } else {
        // Thực hiện xử lý tùy chỉnh nếu các trường nhập liệu được điền đầy đủ và hợp lệ
        // Ví dụ: gửi dữ liệu đến máy chủ
      
        // Hiển thị thông báo thành công
        successMessage.textContent = 'Gửi thành công!';
        errorMessage.textContent = '';
        errorNameMessage.textContent = '';
        errorEmailMessage.textContent = '';
      
        // Reset các trường nhập liệu sau khi gửi
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
      }
}