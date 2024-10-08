import type { Metadata } from "next";
import TodoPage from "./components/todo/todoPage";

export default function IndexPage() {
  return <TodoPage />;
}

export const metadata: Metadata = {
  title: "Todo list",
};
