var audio = document.querySelector(".audio");

if(musik) {
    audio.src = musik;
} 

function mulai(){ 
  audio.play(); 
  document.querySelector(".open").style = "opacity: 0;"; 
  document.querySelector(".body").style = "overflow-y: scroll;"; 
  setTimeout(function () { 
  document.querySelector(".open").style.display = "none"; 
    }, 1000); 
  } 

function wa(isi) { 
window.open("https://api.whatsapp.com/send?text= Makasih ya udah inget ulang tahun aku, di hari spesial ini aku pengin " + isi); 
} 

async function tanya() { 
    var { 
      value: kado 
    } = await swal.fire({ 
        title: "Di hari spesial ini amaa pengen apa?", input: "text", showCancelButton: false, 
      }); 

  if (kado) {
     await swal.fire("Kirim jawabannya ke wa aku ya"); wa(kado); 
    } else { await swal.fire("kenapa di kosongi? isi dongg"); tanya(); } } 
