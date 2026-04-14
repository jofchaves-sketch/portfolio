function scrollToSection() {
    document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' });
  }

  const projetos = [
    {
      nome: "E-commerce Fashion",
      descricao: "Loja virtual moderna com foco em UX"
    },
    {
      nome: "App de Agendamento",
      descricao: "Sistema intuitivo para gestão de clientes"
    },
    {
      nome: "Dashboard Analytics",
      descricao: "Visualização de dados elegante e funcional"
    }
  ];

  const container = document.getElementById("lista-projetos");

  projetos.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <h3>${p.nome}</h3>
      <p>${p.descricao}</p>
    `;

    container.appendChild(div);
  });