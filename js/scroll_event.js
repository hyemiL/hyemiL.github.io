// document.addEventListener('scroll', function() {
// var currentScrollValue = document.documentElement.scrollTop; //스크롤 위치 구하기
// var proDes1 =document.getElementById("programDescription1");
// var proDes2 =document.getElementById("programDescription2");
// console.log('currentScrollValue is ' + currentScrollValue); 
// });


//스크롤이벤트
document.addEventListener('scroll', function() {
  if(window.scrollY <= 550) {

  }
  else if(window.scrollY > 550 && window.scrollY < 1300) {
    document.querySelector('#aboutSection').classList.add('visible');
} else if(window.scrollY >= 1300 && window.scrollY < 2700) {
    document.querySelector('#interestSection').classList.add('visible');
} else {
  document.querySelector('#roadmapSection').classList.add('visible');
}
});


//interest page 사진 체인지
const pet = () => {
  document.addEventListener('click', function() {
    document.querySelector('.petpictures').classList.add('visible');
    document.querySelector('.p-box-pet').classList.add('visible');
    document.querySelector('.camerapictures').classList.remove('visible');
    document.querySelector('.p-box-camera').classList.remove('visible');
  });
}

const camera = () => {
  document.addEventListener('click', function() {
    document.querySelector('.camerapictures').classList.add('visible');
    document.querySelector('.p-box-camera').classList.add('visible');
    document.querySelector('.petpictures').classList.remove('visible');
    document.querySelector('.p-box-pet').classList.remove('visible');
  });
}