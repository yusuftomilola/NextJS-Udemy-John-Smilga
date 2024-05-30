"use client";
import { createUser } from "@/utils/actions";
import { useFormState, useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={btnStyle} disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

function Form() {
  const [message, formAction] = useFormState(createUser, null);
  return (
    <form action={formAction} className={formStyle}>
      {message && <p>{message}</p>}
      <h2 className="text-2xl capitalize mb-4">Create User</h2>

      <input
        type="text"
        name="firstname"
        defaultValue="peter"
        required
        className={inputStyle}
      />

      <input
        type="text"
        name="lastname"
        defaultValue="smith"
        required
        className={inputStyle}
      />

      <SubmitBtn />
    </form>
  );
}

const formStyle = "max-w-lg flex flex-col gap-y-4 shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";

export default Form;
