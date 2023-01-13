import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from './App'
import './index.css'
import { store } from "./redux/app/store";
const root=createRoot(document.getElementById('root'))

console.log(store.getState())
root.render(
  <Provider store={store}>
  <App/>
  </Provider>
)