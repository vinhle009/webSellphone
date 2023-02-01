$(document).ready(function () {
  const nav = document.querySelectorAll(".nav-menu");

  $(".checkHangDTALL").prop("checked", true);

  $("#locTheo").hide();
  $("#locTheoDelete").hide();

  $(".father-hoverdt").hide();
  $(".father-hovertablet").hide();
  $(".father-hoverphukien").hide();
  $("#menu-user").hide();

  const menuuser = document.querySelector(".user-of-me");

  menuuser.addEventListener("mouseover", (e) => {
    e.preventDefault();
    $("#menu-user").fadeIn("slow");
  });

  nav.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      e.preventDefault();
      const id = e.target.getAttribute("id");

      if (id === "dienthoai") {
        $(".father-hoverdt").fadeIn("slow");
        $(".father-hovertablet").hide();
        $(".father-hoverphukien").hide();
      }

      if (id === "tablet") {
        $(".father-hovertablet").fadeIn("slow");
        $(".father-hoverdt").hide();
        $(".father-hoverphukien").hide();
      }

      if (id === "phukien") {
        $(".father-hoverphukien").fadeIn("slow");
        $(".father-hoverdt").hide();
        $(".father-hovertablet").hide();
      } else if (id == null) {
        $(".father-hoverdt").hide();
        $(".father-hovertablet").hide();
        $(".father-hoverphukien").hide();
      }
    });
  });

  document.getElementById("thugon").style.display = 'none';
  const course = document.querySelectorAll(".card");
  if (course.length > 6) {
    for (var i = 6; i < course.length; i++) {
      course[i].style.display = 'none';
    }
  } else {
    document.getElementById("xemthem").style.display = 'none';
  }


  $('#xemthem').click(xemThemCourse);
  $('#thugon').click(thuGonCourse);

});

//click xem thêm sản phẩm
function xemThemCourse(e) {
  e.preventDefault();
  const course = document.querySelectorAll(".card");
  for (var i = 6; i < course.length; i++) {
    $(course[i]).fadeIn("slow");
  }
  document.getElementById("xemthem").style.display = 'none';
  document.getElementById("thugon").style.display = 'block';
}

//click thu gọn sản phẩm
function thuGonCourse(e) {
  e.preventDefault();
  const course = document.querySelectorAll(".card");
  for (var i = 6; i < course.length; i++) {
    $(course[i]).fadeOut("slow");
  }
  document.getElementById("xemthem").style.display = 'block';
  document.getElementById("thugon").style.display = 'none';
}
//envent click slide next and prev
const items = document.querySelectorAll('.item');
for (var i = 5; i < items.length; i++) {
  items[i].style.display = 'none';
}

var prev = 0;
var next = 0;


function plus(n) {
  next = prev + n;

  if (next < 0) {
    next = 0;
  }
  if (next > 5) {
    next = 5;
  }
  const items = document.querySelectorAll('.item');
  for (var i = 0; i < items.length; i++) {
    items[i].style.display = 'none';
  }
  for (var i = next; i < next + 5; i++) {
    items[i].style.display = 'block';
  }
  prev = next;

}

//clic icon hãng điện thoại
function fillterIconHangDT(name){
  $(".checkHangDTALL").prop("checked", false);
  $("#locTheo").show();
  checkIconHangDT(name);
}
//check icon selected
function checkIconHangDT(name){
  const checkbox = document.querySelectorAll('.locTheoText');
  if(checkbox.length == 0){
    checkboxItemHangDT(name);
  }else{
      checkbox.forEach((item) => {
      if(item.getAttribute('value') == name){
        return;
      }else{
        checkboxItemHangDT(name);
      }
    });
  }
}

//checkbox hãng điện thoại
function checkboxItemHangDT(name){
  const checkbox = document.querySelectorAll('.check-hangDT');
  for (var i = 0; i < checkbox.length; i++) {
    if (checkbox[i].getAttribute('value') == name) {
      if (checkbox[i].checked == true) {
        checkbox[i].checked = false;
        deleteItemHangDT(name);
      } else {
        checkbox[i].checked = true;
        createItemHangDT(name);
      }
    }
  }
}
//click checkbox hãng điện thoại all
function checkboxItemHangDTALL(){
  const checkbox = document.querySelectorAll('.check-hangDT');
  const checkboxALL = document.querySelector('.checkHangDTALL');
  var sum =0;
  checkbox.forEach((item) => {
    if (item.checked == true) {
      sum++;
    }
  });
  if (sum == 0) {
    checkboxALL.checked = true;
    $("#locTheo").hide();
  } else {
    checkboxALL.checked = false;
  }
}
//create element i tên hãng điện thoại selected
function createItemHangDT(name){
  $("#locTheo").show();
  const item = document.createElement('i');
  const itemParent = document.querySelector('#fillterDT');
  item.className = 'fa fa-times locTheoText';
  item.setAttribute('onclick', 'deleteItemHangDT(\''+name+'\')');
  item.setAttribute('value', name);
  item.innerHTML = name;
  itemParent.appendChild(item);
}
//remove element i tên hãng điện thoại selected
function deleteItemHangDT(name){
  const itemParent = document.querySelector('#fillterDT');
  const item = document.querySelectorAll('.locTheoText');
  checkboxItemHangDTALL();
  for (var i = 0; i < item.length; i++) {
    if (item[i].getAttribute('value') == name) {
      itemParent.removeChild(item[i]);
      checkboxItemHangDT(name);
    }
  }
}
//click bộ lộc hãng điện thoại
function checkBoxDT(name) {
  $("#locTheo").show();
  const checkItem = document.querySelectorAll('.check-hangDT');
  checkItem.forEach((item) => {
    if (name == item.getAttribute('value')) {
      if (item.checked == true) {
        $(".checkHangDTALL").prop("checked", false);
        createItemHangDT(name);
      }

      if (item.checked == false) {
        deleteCheckHangDT(name);
        if (sumCheck() == 0) {
          $(".checkHangDTALL").prop("checked", true);
        }
      }
    }
  });
}
// envent kiểm tra số lượng checkbox được check
function sumCheck() {
  var sumCheck = 0;
  const checkFillterDT = document.querySelectorAll('.check-hangDT');
  for (var i = 0; i < checkFillterDT.length; i++) {
    if (checkFillterDT[i].checked == true) {
      sumCheck++;
    }
  }
  return sumCheck;
}
//envent xóa tên hãng điện thoại
function deleteCheckHangDT(name) {
  const ds = document.querySelectorAll('.locTheoText');
  const courses = document.querySelectorAll(".card");
  ds.forEach((item) => {
    if (item.innerText == name) {
      item.remove();
      const checkFillterDT = document.querySelectorAll('.check-hangDT');
      checkFillterDT.forEach((item) => {
        if (name == item.getAttribute('value')) {
          item.checked = false;
        }
      });
      if (sumCheck() == 0) {
        $(".checkHangDTALL").prop("checked", true);
      }
    }
  });

  const dss = document.querySelectorAll('.locTheoText');
  
  if (dss.length == 0) {
    $("#locTheo").hide();
    document.getElementById("thugon").style.display = 'none';
    document.getElementById("xemthem").style.display = 'block';
  }
}