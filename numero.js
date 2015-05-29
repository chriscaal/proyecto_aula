function xrep_checked() {
  if (document.getElementById('xrep').checked) {
	return 1;
  } else {
	return 0;
  }
}

function gen_na1() {
    var min = document.getElementById("xdesde2").value;
    var max = document.getElementById("xhasta2").value;
    var vec = document.getElementById("xveces2").value;
    var rep = xrep_checked();
    var dv = document.getElementById('id_generador');
    var s = document.createElement("script");
    s.src = 'http://numero-aleatorio.com/generadores/servicio-json/?desde='+min+'&hasta='+max+'&numero='+vec+'&repeticion='+rep+'&json=0';
    s.type = "text/javascript";
    dv.appendChild(s);
    try {
        setTimeout('document.getElementById("g1br").innerHTML=na_respuesta.join(", ")', 1000);
    } catch(err) {
        document.getElementById("g1br").innerHTML='Falta de servicio';
    }
}

gen_na1();