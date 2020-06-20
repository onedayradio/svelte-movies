<script>
  import TodoItems from "../../components/TodoItems.svelte";
  import TodoItem from "../../components/TodoItem.svelte";
  import TodoItemInput from "../../components/TodoItemInput.svelte";

  let todoItemText;
  let todos = [];

  const addTodoItem = () => {
    const newTodoItem = {
      checked: false,
      text: todoItemText
    };
    todos = [...todos, newTodoItem];
    todoItemText = "";
  };

  const removeTodoItem = todoItem => {
    todos = [...todos.filter(item => item !== todoItem)];
  };
</script>

<svelte:head>
  <title>Todo List</title>
</svelte:head>

<div class="todo-page">
  <h1>Todo List</h1>
  <TodoItemInput bind:text={todoItemText} onClick={addTodoItem} />
  <TodoItems>
    {#each todos as todoItem}
      <TodoItem item={todoItem} onRemove={removeTodoItem} />
    {/each}
  </TodoItems>
</div>
