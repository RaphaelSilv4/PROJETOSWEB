document.getElementById('consultarBtn').addEventListener('click', async () => {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    
    if (cep.length !== 8) {
      document.getElementById('infoCep').innerText = 'Por favor, insira um CEP válido de 8 dígitos.';
      return;
    }
    
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      
      if (data.erro) {
        document.getElementById('infoCep').innerText = 'CEP não encontrado. Verifique e tente novamente.';
      } else {
        document.getElementById('infoCep').innerHTML = `
          <strong>Logradouro:</strong> ${data.logradouro} <br>
          <strong>Bairro:</strong> ${data.bairro} <br>
          <strong>Cidade:</strong> ${data.localidade} <br>
          <strong>Estado:</strong> ${data.uf}
        `;
      }
    } catch (error) {
      document.getElementById('infoCep').innerText = 'Erro ao consultar o CEP. Tente novamente mais tarde.';
    }
  });