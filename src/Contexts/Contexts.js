import { createContext } from "react";

const TasksContext = createContext({ products: [], setProducts: () => {} });

export default TasksContext;
