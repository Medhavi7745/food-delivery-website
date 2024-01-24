const a = [
  { name: "Dum Aloo", price: 460, taken: false },
  { name: "Chhole Bhature", price: 150, taken: false },
  { name: "Chaat Platter", price: 110, taken: false },
  { name: "Makke Di roti Sarso Da Saag", price: 410, taken: false },
  { name: "Hara Dhania Cholia", price: 240, taken: false },
  { name: "Hara Bhara Kebab", price: 250, taken: false },
  { name: "Gajar Ka Halwa", price: 560, taken: false },
  { name: "Bhutte Ki Khees", price: 360, taken: false },
  { name: "Mawa Bati", price: 600, taken: false },
  { name: "Agra Ka Petha", price: 560, taken: false },
  { name: "Litti Chokha", price: 260, taken: false },
  { name: "Dhuska", price: 450, taken: false },
  { name: "Rasgulla", price: 550, taken: false },
  { name: "Mitha Khaja", price: 425, taken: false },
  { name: "Rugra", price: 320, taken: false },
  { name: "Idli Vada", price: 160, taken: false },
  { name: "Masala Dosa", price: 200, taken: false },
  { name: "Hyderabadi Biryani", price: 400, taken: false },
  { name: "Uttapam", price: 125, taken: false },
  { name: "Mysore Pak", price: 470, taken: false },
  { name: "Dal Bati Churma", price: 160, taken: false },
  { name: "Vada Pav", price: 60, taken: false },
  { name: "Dhokla", price: 200, taken: false },
  { name: "Jalebi Fafda", price: 415, taken: false },
  { name: "Modak", price: 390, taken: false },
  { name: "Bamboo Shoot Dish", price: 250, taken: false },
  { name: "Banana Stem Dish", price: 270, taken: false },
  { name: "Kosu", price: 295, taken: false },
  { name: "Dhekiya Xaak", price: 150, taken: false },
  { name: "Ooti", price: 310, taken: false },
];
var tabs = document.getElementsByClassName("cont");
function showTabs(n) {
  for (var tab = 0; tab < tabs.length; tab++) {
    document.getElementById("mapind").style.display = "none";
    document.getElementById("flav").style.display = "none";
    if (tab != n) {
      tabs[tab].style.display = "none";
    }
  }
  tabs[n].style.display = "block";
  document.getElementsByClassName("text")[0].style.display = "none";
}
function check() {
  window.alert("Thank you for choosing Us");
  window.href = "delights.html";
}
function showimg() {
  document.getElementById("mapind").style.display = "visible";
}
function add(elem) {
  const y = document.getElementById("item").innerHTML;
  document.getElementById("item").innerHTML = Number(y) + 1;
  const p = document.getElementById("count").innerHTML;
  document.getElementById("count").innerHTML = Number(p) + 1;
  const b = document.getElementById("total").innerHTML;
  document.getElementById("total").innerHTML =
    Number(b) + a[Number(elem.id)].price;
  if (a[Number(elem.id)].taken === true) {
    document.getElementById("q" + elem.id).innerHTML++;
  } else {
    const x = document.createElement("tr");
    x.id = "t" + elem.id;
    const x1 = document.createElement("td");
    x1.innerHTML = a[Number(elem.id)].name;
    x.appendChild(x1);
    const x2 = document.createElement("td");
    x2.innerHTML = a[Number(elem.id)].price;
    x.appendChild(x2);
    const x3 = document.createElement("td");
    x3.id = "q" + elem.id;
    x3.innerHTML = 1;
    x.appendChild(x3);
    const x4 = document.createElement("td");
    const an = document.createElement("button");
    an.innerHTML = "Remove";
    an.setAttribute("onclick", "remove(this)");
    an.id = "r" + elem.id;
    x4.appendChild(an);
    x.appendChild(x4);
    const x5 = document.createElement("td");
    const ant = document.createElement("button");
    ant.innerHTML = "Increase";
    ant.setAttribute("onclick", "increase(this)");
    ant.id = "s" + elem.id;
    x5.appendChild(ant);
    x.appendChild(x5);
    const x6 = document.createElement("td");
    const anti = document.createElement("button");
    anti.innerHTML = "Decrease";
    anti.setAttribute("onclick", "decrease(this)");
    anti.id = "u" + elem.id;
    x6.appendChild(anti);
    x.appendChild(x6);
    document.getElementById("tab").appendChild(x);

    a[Number(elem.id)].taken = true;
  }
}

function remove(elem) {
  const b = document.getElementById("total").innerHTML;
  document.getElementById("total").innerHTML =
    Number(b) -
    Number(document.getElementById("q" + Number(elem.id.slice(1))).innerHTML) *
      a[Number(elem.id.slice(1))].price;
  a[Number(elem.id.slice(1))].taken = false;
  const y = document.getElementById("item").innerHTML;

  document.getElementById("item").innerHTML =
    Number(y) -
    Number(document.getElementById("q" + elem.id.slice(1)).innerHTML);
  const p = document.getElementById("count").innerHTML;

  document.getElementById("count").innerHTML =
    Number(p) -
    Number(document.getElementById("q" + elem.id.slice(1)).innerHTML);
  const c = document.getElementById("t" + elem.id.slice(1));
  c.parentNode.removeChild(c);
}
function increase(elem) {
  const y = document.getElementById("item").innerHTML;
  document.getElementById("item").innerHTML = Number(y) + 1;
  const p = document.getElementById("count").innerHTML;
  document.getElementById("count").innerHTML = Number(p) + 1;
  const b = document.getElementById("total").innerHTML;
  document.getElementById("total").innerHTML =
    Number(b) + a[Number(elem.id.slice(1))].price;
  const z = document.getElementById("q" + elem.id.slice(1)).innerHTML;
  document.getElementById("q" + elem.id.slice(1)).innerHTML = Number(z) + 1;
}
function decrease(elem) {
  const z = document.getElementById("q" + elem.id.slice(1)).innerHTML;
  if (Number(z) > 0) {
    document.getElementById("q" + elem.id.slice(1)).innerHTML = Number(z) - 1;
    const y = document.getElementById("item").innerHTML;
    document.getElementById("item").innerHTML = Number(y) - 1;
    const p = document.getElementById("count").innerHTML;
    document.getElementById("count").innerHTML = Number(p) - 1;
    const b = document.getElementById("total").innerHTML;
    document.getElementById("total").innerHTML =
      Number(b) - a[Number(elem.id.slice(1))].price;
  }
}
var q;
function show1(elem) {
  q = elem.src;
  elem.src = "./images/5star.jpg";
}
function hide(elem) {
  elem.src = q;
}
function show2(elem) {
  q = elem.src;
  elem.src = "./images/4star.jpg4star.jpg";
}
