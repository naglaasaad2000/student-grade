function myFun() {
  let count = 0;
  const subItem = [];
  let sub = true;
  let name = prompt("enter name");
  while (sub && count <= 4) {
    count++;
    sub = prompt("enter subject");
    if (sub) {
      const mark = parseInt(prompt("enter mark"));
      subItem.push({ sub, mark });
    }
  }
  const des = subItem.map((item) => `${item.sub}: ${item.mark}`);

  var grades =
    (subItem[0].mark +
      subItem[1].mark +
      subItem[2].mark +
      subItem[3].mark +
      subItem[4].mark) /
    5;

  if (grades > 80 && grades <= 100) {
    var x = "you got A+";
  } else if (grades > 75 && grades <= 80) {
    var x = "you got A-";
  } else if (grades > 70 && grades <= 75) {
    var x = "you got A";
  } else if (grades > 65 && grades <= 70) {
    var x = "you got B";
  } else if (grades > 60 && grades <= 65) {
    var x = "you got C";
  } else if (grades > 50 && grades <= 60) {
    var x = "you got D";
  } else {
    var x = "you got F";
  }
  var total =
    subItem[0].mark +
    subItem[1].mark +
    subItem[2].mark +
    subItem[3].mark +
    subItem[4].mark;
  document.getElementById("h2-total").style.display = "block";
  document.getElementById("total").style.display = "block";
  document.getElementById("h2-avg").style.display = "block";
  document.getElementById("avg").style.display = "block";
  document.getElementById("h2-grade").style.display = "block";
  document.getElementById("grade").style.display = "block";
  document.getElementById("btn").style.display = "none";

  document.getElementById("body").style.backgroundImage =
    "url('./CSS/img/20230609_1831151.gif')";
  document.getElementById("total").innerHTML =
    name + "'s marks" + "<br>" + des.join("<br>") + "<br>" + "total=" + total;
  document.getElementById("avg").innerHTML = grades;

  document.getElementById("grade").innerHTML = x;
}
var a = 1;
var b = 5;
let array = [
  { a, b },
  { a, b },
];
console.log(array[0].a / 5);
