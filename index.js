function movieSection(){
  document.getElementById('sec-2').style.display = 'none';
  document.getElementById('sec-3').style.display = 'none';
  document.getElementById('sec-4').style.display = 'none';
}

function genreclick(){
  document.getElementById('sec-2').style.display = "block";
  document.getElementById('sec-2').style.display = "flex";

}

function contactUsClick(){
  document.getElementById('sec-4').style.display = 'block';
  document.getElementById('sec-4').style.display = 'flex';
}

function contactus(){
  var name = document.getElementById("txt_name").value;
  alert("Thnak you "+name+" for contacting US");
}
