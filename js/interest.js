
//갤러리 구현
// 버튼을 누르면 다음 사진이 나오게
// translate이 -100vm으로 움직이게 해야 함
  
  
  // document.querySelector('.btn2').addEventListener('click', function(){
  //   document.querySelector('.container').style.transform = 'translate(-360px)';
  // });
  // document.querySelector('.btn1').addEventListener('click', swife()
  //   // document.querySelector('.container').style.transform = 'translate(-720px)';
  // );



  let num = 360;
  const swife = () => {
  document.querySelector('.container').style.transform = `translate(-${num}px)`;
  // num += num;
  num+=num;
};

const reswife = () => {
  document.querySelector('.container').style.transform = `translate(${num}px)`;
  num-=num;
};