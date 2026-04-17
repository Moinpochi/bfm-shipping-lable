function generateLabel(){
  const rname = document.getElementById("rname").value;
  const raddress = document.getElementById("raddress").value;
  const rphone = document.getElementById("rphone").value;

  const sname = document.getElementById("sname").value;
  const saddress = document.getElementById("saddress").value;
  const sphone = document.getElementById("sphone").value;

  document.getElementById("showReceiver").innerHTML = `
    <div style="font-size:13px;color:#6b7280;margin-bottom:6px;">TO</div>
    ${rname}<br>
    ${raddress}<br>
    📞 ${rphone}
  `;

  document.getElementById("showSender").innerHTML = `
    <div style="font-size:13px;color:#6b7280;margin-bottom:6px;">FROM</div>
    ${sname}<br>
    ${saddress}<br>
    📞 ${sphone}
  `;
}

function downloadLabel(){
  html2canvas(document.getElementById("label"), {scale:2}).then(canvas=>{
    const link = document.createElement("a");
    link.download = "brand-label.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
