import { useContext } from "react";
import BudgetForm from "./components/BudgetForm";
import { BudgetContext } from "./reducers/context/BudgetContext";

function App() {
  const context = useContext(BudgetContext);  
  console.log(context)
  return (
    <>
      <div className="bg-blue-600 max-h-72">
        <h1 className="text-4xl font-black text-center text-white uppercase">
          Planificador de Gastos
        </h1>
      </div>
      <div className="max-w-3xl p-10 mx-auto mt-10 bg-white rounded-lg shadow-lg">
        <p>Formulario aquí</p>
        <BudgetForm />
      </div>
    </>
  );
}

export default App;
