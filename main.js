function validaFormulario() {
    let numeroA = parseInt(document.getElementById("numeroA").value);
    let numeroB = parseInt(document.getElementById("numeroB").value);
  
    if (numeroB > numeroA) {
      alert("Formulário válido! Número B é maior que o número A.");
      return true;
    } else {
      alert("Formulário inválido! Número B deve ser maior que o número A.");
      return false;
    }
  }