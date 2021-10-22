
//localStorage에 저장된 객체 불러오기
const userList = () => {
  const userdata = JSON.parse(localStorage.getItem("userdata"));
  console.log(userdata);
  
  const $tbody = $("#tb-userList tbody");
  $.each(userdata, (i, {id, password, name, phoneNumber, email}) => {
    $tbody.append(`<tr>
    <td>${id}</td>
    <td>${password}</td>
    <td>${name}</td>
    <td>${phoneNumber}</td>
    <td>${email}</td>`);
  });
};