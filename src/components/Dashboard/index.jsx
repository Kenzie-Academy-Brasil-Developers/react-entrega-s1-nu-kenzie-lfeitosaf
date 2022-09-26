import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import "../../App.css";
import TotalMoney from "./TotalMoney";
import Empty from "./Empty";

const Dashboard = ({ setRenderHome }) => {
  const [cards, setCards] = useState([]);

  return (
    <div>
      <Header setRenderHome={setRenderHome} />
      <div className="mainContainer">
        <div className="divForm">
          <Form setCards={setCards} />
          {cards.length !== 0 ? <TotalMoney cards={cards} /> : <></>}
        </div>
        {cards.length !== 0 ? (
          <List cards={cards} setCards={setCards} />
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
