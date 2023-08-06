import "./style.css";
import { RECTANGLE as RECTANGLE_0 } from "./RECTANGLE_0";
import { TEXT } from "components/TEXT";

export const FRAME = () => {
  return (
    <div className="FRAME_4130_502">
      <RECTANGLE_0 />
      <TEXT
        characters="Você ainda não tem tarefas cadastradas
Crie tarefas e organize seus itens a fazer"
        className="TEXT_4130_504"
      />
    </div>
  );
};
