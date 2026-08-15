function About() {
  return (
    <div
      className="w-full bg-white/10 backdrop-blur-md 
    border border-white/30 rounded-2xl p-6 shadow-sm"
    >
      <div className="max-w-xl mx-auto space-y-4 mb-6">
        <h1 className="text-2xl text-white font-semibold text-center">
          Sobre o site
        </h1>
        <p className="text-white">
          Esse site está em fase exclusivamente de testes, fique a vontade para
          testar. Você pode apagar tarefas, adicionar tarefas e gerar um
          checklist em formato PDF.
        </p>
        <p className="text-white">
          Algumas das coisas que faltam é: adicionar um sistema de criar contas
          de usuários e também a opção de atualizar o nome das tarefas.
        </p>
        <p className="text-white">Teste a vontade.</p>
        <p className="text-white">Por: Peterson Odair</p>
      </div>
    </div>
  );
}

export default About;
