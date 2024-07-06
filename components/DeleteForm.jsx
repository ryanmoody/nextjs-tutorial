"use client";

import { useFormStatus } from "react-dom";

import { deleteTask } from "@/utils/actions";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-xs btn-error" disabled={pending}>
      {pending ? "Pending..." : "Delete"}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton />
    </form>
  );
};

export default DeleteForm;
