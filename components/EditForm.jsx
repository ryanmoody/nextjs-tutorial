import { editTask } from "@/utils/actions";

const EditForm = ({ task }) => {
  const { id, completed, content } = task;

  return (
    <form
      action={editTask}
      className="max-w-small p-12 border border-base-300 rounded-lg"
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered w-full"
      />
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block btn-sm">
        Edit
      </button>
    </form>
  );
};

export default EditForm;
