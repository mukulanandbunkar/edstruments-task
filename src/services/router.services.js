import Login from "../Component/Pages/Login/Login"
import TaskContainer from "../Component/Pages/TaskContainer/TaskContainer"

export const routers =  [
      {
        path: "/tasks/:userName",
        Component:  TaskContainer,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/",
        Component: Login,
      }
    ]