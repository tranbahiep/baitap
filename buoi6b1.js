function validateForm() {
  const ho = document.forms["form"]["ho"].value;
  const ten = document.forms["form"]["ten"].value;
  const sdt = document.forms["form"]["sdt"].value;
  const selectBook = document.forms["form"]["sach"].value;
  const checkBooks = document.forms["form"]["sothich"];

  if (ho === "") {
    alert("Vui lòng nhập họ");
    return false;
  }
  if (ten === "") {
    alert("Vui lòng nhập tên");
    return false;
  }
  if (sdt === "") {
    alert("Vui lòng nhập số điện thoại");
    return false;
  }
  if (selectBook === "") {
    alert("Vui lòng chọn sách");
    return false;
  }
  if (!checkBooks[0].checked && !checkBooks[1].checked && !checkBooks[2].checked && !checkBooks[3].checked) {
    alert("Vui lòng chọn ít nhất một sở thích");
    return false;
  }

  return true;
}