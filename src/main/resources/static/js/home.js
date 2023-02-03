
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


  //envent click icon fillter điện thoại
  const textFillter = document.getElementById("textFillter");
  textFillter.style.display = 'none';
  if (textFillter.innerText == "") {
    console.log("null");
  } else {
    $("#locTheo").show();
    const nameList = textFillter.innerText.split("&");
    const   uniqueNames = [...new Set(nameList)];
    console.log("uniqueNames:" + uniqueNames);
    uniqueNames.forEach((item) => {
        if(item == ""){
            return;
        }else{
          const checkFillterDT = document.querySelectorAll('.check-hangDT');
          const checkFillterDTALL = document.querySelector('.checkHangDTALL');
          checkFillterDT.forEach((item1) => {
            if (item1.value == item) {
              item1.checked = true;
              checkFillterDTALL.checked = false;
              createElementI(item);
            }
          });
        }
    });
  }

  //envent click icon fillter all
  

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

// //create element i
// function createElementI(name) {
//   const i = document.createElement("i");
//   const parent = document.getElementById("fillterDT");
//   i.setAttribute("class", "fa fa-times locTheoText");
//   i.setAttribute("onclick", "deleteFillter('" + name + "')");
//   i.setAttribute("value", name);
//   i.innerText = name;
//   parent.appendChild(i);
// }



// //delete element i
// function deleteFillter(name) {
//   var brank = "";
//   uniqueNames = uniqueNames.filter(items => items !== name);
//   console.log("uniqueNames:"+uniqueNames);
//   uniqueNames.forEach((item) => {
//     if (item == "") {
//       return;
//     } else {
//       brank += item + "&";
//     }
//   });
//   console.log("brank:"+brank);
//   ajaxs(brank);
  
//   const i = document.querySelectorAll(".locTheoText");
//   const checkFillterDT = document.querySelectorAll('.check-hangDT');
//   const checkFillterDTALL = document.querySelector('.checkHangDTALL');
//   i.forEach((item) => {
//     if (item.getAttribute("value") == name) {
//       item.remove();
//       checkFillterDT.forEach((item1) => {
//         if (item1.value == name) {
//           item1.checked = false;
//         }
//       });
//     }
//   });
//   if (i.length == 1) {
//     $("#locTheo").hide();
//     checkFillterDTALL.checked = true;
//   }
// }



// function ajaxs(brank) {
//   $.ajax({
//     url: '/sanpham/dienthoai/' + brank,
//     type: 'GET',
//     dataType: 'html',
//     data: {
//       brank: brank,
//     },
//     success: function (e) {
//       location.href = '/sanpham/dienthoai/' + brank;
//     }
//   });
// }
//checkBoxDT
function checkBoxDT(name) {
  const checkFillterDT = document.querySelectorAll('.check-hangDT');
  checkFillterDT.forEach((item) => {
   if (item.value == name) {
     if (item.checked == true) {
      $("#locTheo").show();
      createElementI(name);
      getFillterDT(name);
     } 
    if (item.checked == false) {
      const i = document.querySelectorAll(".locTheoText");
      i.forEach((item1) => {
        if (item1.getAttribute("value") == name) {
          item1.remove();
          getFillterDTDelete(name);
        }
      });
      if (i.length == 1) {
        $("#locTheo").hide();
      }
    }
   }
  });
}
//envent icon fillter điện thoại
function fillterIconHangDT(name) {
  $(".checkHangDTALL").prop("checked", false);
  $("#locTheo").show();
  const checkFillterDT = document.querySelectorAll('.check-hangDT');
  checkFillterDT.forEach((item) => {
    var nameValue = item.getAttribute('value');
    if (nameValue == name) {
      item.checked = true;
    }
  });
  getFillterDT();
}
//createElementI
function createElementI(name) {
  const i = document.createElement("i");
  const parent = document.getElementById("fillterDT");
  i.setAttribute("class", "fa fa-times locTheoText");
  i.setAttribute("onclick", "deleteFillter('" + name + "')");
  i.setAttribute("value", name);
  i.innerText = name;
  parent.appendChild(i);
}
//delete element i
function deleteFillter(name) {

  var i = document.querySelectorAll(".locTheoText");
  const parent = document.getElementById("fillterDT");
  const checkFillterDT = document.querySelectorAll('.check-hangDT');
  i.forEach((item) => {
    if (item.getAttribute("value") == name) {
      parent.removeChild(item);
      checkFillterDT.forEach((item1) => {
        if (item1.value == name) {
          item1.checked = false;
        }
      });
    }
  });
  getFillterDTDelete();
}

//getFillterDT
function getFillterDT() {
  const checkFillterDT = document.querySelectorAll('.check-hangDT');
  checkFillterDT.forEach((item) => {
    if (item.checked == true) {
      ajax(item.value,"1");
    }
  });
}
function getFillterDTDelete(e) {
  const checkFillterDT = document.querySelectorAll('.check-hangDT');
  checkFillterDT.forEach((item) => {
    if (item.checked == false) {
      ajax(item.value,"0");
    }
  });
}
function ajax(brank,action){
  $.ajax({
    url: '/sanpham/dienthoai/'+brank+'?'+action,
    type: 'GET',
    data:{
      brank:brank,
      action:action
    },
    dataType: 'html',
    success: function (e) {
      window.location.replace('/sanpham/dienthoai/'+brank+'?'+action);
    }
  });
}