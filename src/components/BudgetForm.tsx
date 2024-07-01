import { useMemo, useState } from "react";

const BudgetForm = () => {
  const [budget, setBudget] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
  };
  
  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0;
  }, [budget]);

  return (
    <form className="space-y-4">
      <div className="flex flex-col space-y-5">
        <label
          htmlFor="budget"
          className="text-4xl font-bold text-center text-blue-600"
        >
          Definir presupuesto
        </label>
        <input
          id="budget"
          type="number"
          className="w-full p-2 bg-white border border-gray-200"
          placeholder="Define tu presupuesto"
          name = "budget"
          value={budget}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        value="Definir presupuesto"
        className="w-full p-2 font-black text-white bg-blue-600 cursor-pointer hover:bg-blue-700 uppwercase disabled:opacity-50"
        disabled={isValid}
      />
    </form>
  );
};

export default BudgetForm;
