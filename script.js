function encriptarTexto(texto) {
    return texto
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
  }

  function desencriptarTexto(texto) {
    return texto
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
  }

  function btnEncriptar() {
    const texto = document.getElementById('texto').value.toLowerCase();
    const opcion = document.querySelector('input[name="opcion"]:checked').value;
    let resultado = '';

    if (opcion === 'encriptar') {
      resultado = encriptarTexto(texto);
      document.getElementById("texto").value = '';
    } else {
      resultado = desencriptarTexto(texto);
    }
    document.getElementById('resultado').value = resultado;

  }

  function copiarTexto() {
    const resultado = document.getElementById('resultado');
    resultado.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles: ' + resultado.value);
    document.getElementById("resultado").value = '';
    document.getElementById("texto").value = '';
  }