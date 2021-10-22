

//이메일 자동완성
$('#select_domain').change(function() {
  if($(this).val=="") {
    $('#email_domain').val("");
    // $('#email_domain').prop("readonly", false);
  } else {
    $('#email_domain').val($(this).val());
  }
})

// 핸드폰 번호 숫자만 입력되게


//web-storage 이용한 회원가입
const $id = $(id);
const $password = $(pwd);
const $name = $(username);
const $phoneFirstNumber = $(phoneFirstNumber);
const $phoneMiddleNumber = $(phoneMiddleNumber);
const $phoneLastNumber = $(phoneLastNumber);
const $email = $(email);



re_pwd.onblur = () => {
  if(!(pwd.value==re_pwd.value)) {
  alert("비밀번호 불일치");
  }
}



$(join_btn).click(()=> {

  if($id.val()=="" || $password.val()=="" || $name.val()=="")
    return;

  const userInfo = new UserInfo(
    $id.val(), $password.val(), $name.val(),
    $("#phoneFirstNumber option:selected").val()+$phoneMiddleNumber.val()+$phoneLastNumber.val(),
    $email.val()+'@'+$("#email_domain").val()
  );
  const userdata = JSON.parse(localStorage.getItem("userdata")) || [];
  userdata.push(userInfo);
  localStorage.setItem("userdata", JSON.stringify(userdata));

  alert("회원가입에 성공하셨습니다!");

  $id.val('');
  $password.val('');
  $name.val('');
  $phoneMiddleNumber.val('');
  $phoneLastNumber.val('');
  $email.val('');
  $("#email_domain").val('');
    
  });
  
  class UserInfo {
    constructor(id, password, name, phoneNumber, email) {
      this.id = id;
      this.password = password;
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.email = email;
    }
  }

