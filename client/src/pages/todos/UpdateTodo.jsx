import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import TodoWrapper from "../../functions/todoWrapper";
import UserWrapper from "../../functions/userWrapper";
import "bootstrap/dist/css/bootstrap.min.css";

const todoWrapper = new TodoWrapper();

const UpdateTodo = () => {
  const [todoData, setTodoData] = useState({
    title: "",
    user: "",
    is_complete: false,
  });
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchTodo = async () => {
    try {
      const response = await todoWrapper.detailTodo("todos/", id);
      setTodoData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await todoWrapper.updateTodo("todos/", id, todoData);
      navigate("/tarefas/");
    } catch (error) {
      setError(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoData({ ...todoData, [name]: value });
  };

  return (
    <>
      <h1>Atualizar tarefa</h1>
      <form className="row" onSubmit={handleSubmit}>
        <div class="col-md-12 mb-3">
          <label htmlFor="title" className="form-label">
            Tarefa
          </label>
          
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            value={todoData.title}
            onChange={handleChange}
          />
        </div>
        <div class="col-md-4 mb-3">
          <label htmlFor="is_complete" className="form-label">
            Concluída?
          </label>
          <select
            value={todoData.is_complete ? "true" : "false"}
            name="is_complete"
            id="is_complete"
            className="form-select"
            onChange={handleChange}
          >
            <option value="false">Não</option>
            <option value="true">Sim</option>
          </select>
        </div>
        <div>
          <button type="submit" className="btn btn-success">
            Cadastrar
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdateTodo;
