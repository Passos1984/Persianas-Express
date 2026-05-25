const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (e) {

  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const endereco = document.getElementById('endereco').value;
  const bairro = document.getElementById('bairro').value;
  const city = document.getElementById('cidade').value;
  const modelo = document.getElementById('modelo').value;
  const tecido = document.getElementById('tecido').value;
  const paleta = document.getElementById('paleta').value;
  const largura = document.getElementById('largura').value;
  const altura = document.getElementById('altura').value;
  const ambiente = document.getElementById('ambiente').value;
  const instalacao = document.getElementById('instalacao').value;
  const mensagemExtra = document.getElementById('mensagem').value;

  const mensagem =
`
*NOVO ORÇAMENTO - PERSIANAS EXPRESS*

👤 Nome: ${nome}
📞 Telefone: ${telefone}

📍 Endereço: ${endereco}
📍 Bairro: ${bairro}
📍 Cidade: ${city}

🪟 Modelo: ${modelo}
🧵 Material/Tecido: ${tecido}
🎨 Paleta de Cores: ${paleta}

📏 Largura: ${largura} CM
📏 Altura: ${altura} CM

🏠 Ambiente: ${ambiente}

🔧 Necessita instalação? ${instalacao}

📝 Detalhes:
${mensagemExtra ? mensagemExtra : 'Nenhum detalhe adicional.'}
`;

  const targetPhone = '5551981962819';

  const url = `https://wa.me/${targetPhone}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');

});