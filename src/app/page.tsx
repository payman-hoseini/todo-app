'use client'
import { Provider } from "react-redux";
import TodoApp from "./components/todoApp";
import { store } from "./store/store";

export default function Home() {
  return (
    <>
    <Provider store={store}>
      <TodoApp />
    </Provider>
    </>
  );
}
