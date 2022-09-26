import "././style.css";

const Empty = () => {
  return (
    <section className="emptySection">
      <div className="divList">
        <h2 className="title-3">Resumo financeiro</h2>
        <div className="buttonList">
          <button className="button-grey">Todos</button>
          <button className="button-grey">Entrada</button>
          <button className="button-grey">Despesas</button>
        </div>
      </div>
      <h2 className="launchH2">Você ainda não possui nenhum lançamento</h2>
      <ul className="emptyList">
        <li>
          <img src="../../NoCard.png" alt="" />
        </li>
        <li>
          <img src="../../NoCard.png" alt="" />
        </li>
        <li>
          <img src="../../NoCard.png" alt="" />
        </li>
      </ul>
    </section>
  );
};

export default Empty;
