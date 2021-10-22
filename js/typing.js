
const text = document.querySelector("#typing_text");
const hello = "NEW\nDEVELOPER\nHYEMI LEE"
let i = 0;

function typing() {
  if(i < hello.length) {
    let txt = hello.charAt(i);
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    i++
  }
}
setInterval(typing, 200);
