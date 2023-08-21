import { Card } from "./card";
import Image from "next/image";

export default function Feed() {
  return (
    <div>
      <h1 className="head_text text-center">Linhas</h1>
      <br />
      <div className="flex flex-wrap justify-center gap-5">
        <div className="flex items-center bg-lime-600 backdrop-blur-lg w-[700px] rounded-lg pl-16 h-80">
          Crédito Turismo
        </div>
        <div className="bg-red-600 backdrop-blur-lg w-[200px] h-96 rounded-lg pl-16 ">
          Crédito de Giro
        </div>
        <div className="bg-blue-400 backdrop-blur-lg w-[280px] h-32 rounded-lg pl-16 ">
          Crédito de Giro
        </div>
        <div className="float bg-blue-400 backdrop-blur-lg w-[280px] h-32 rounded-lg pl-16 ">
          Crédito de Giro
        </div>
        <div className="bg-blue-400 backdrop-blur-lg w-[280px] h-32 rounded-lg pl-16 ">
          Crédito de Giro
        </div>
      </div>
    </div>
  );
}
