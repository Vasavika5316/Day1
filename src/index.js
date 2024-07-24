import ReactDOM from "react-dom/client";
import './styles.css';
// import { FetchingData } from "./fetchingdata";
// import {Sum} from './sumfunc.js';
// import {Details} from './details.js';
// import {Nest} from './nest.js';
// import {Array} from './array.js';
// import {Bool} from './bool.js';
// import {Review} from './review.js';
// import {Names} from './names.js';
// import { CardList } from './cardList.js';
// import {Classc} from './class.js'
// import { Hooks } from "./hooks";
// import {Incdec} from './incdec.js'
// import {Cart} from './cart.js'
// import { Inout } from "./inout";
// import { Product } from "./product";
// import { HookUseref } from "./hook_useref";
// import {Login} from './login.js';
// import {Tabs} from './tabFunc.js'
// import {Register} from './register.js'
// import { LogNReg } from "./lognreg";
import { ProductList } from "./productlist";
const rootElement = document.getElementById('root')
const rootRef = ReactDOM.createRoot(rootElement)
// rootRef.render(<Sum/>)
// rootRef.render(<Details/>)
// rootRef.render(<div><Sum/><Details/></div>)
// rootRef.render(<Nest/>)
// rootRef.render(<Array/>)
// rootRef.render(<Bool/>)
// rootRef.render(<Review/>)
// rootRef.render(<Names/>)
// rootRef.render(<CardList/>)
// rootRef.render(<Classc/>)
// rootRef.render(<Hooks/>)
// rootRef.render(<Incdec/>)
// rootRef.render(<Cart/>)
// rootRef.render(<Inout/>)
// rootRef.render(<Product/>)
// rootRef.render(<HookUseref/>)
// rootRef.render(<Login/>)
// rootRef.render(<Tabs/>)
// rootRef.render(<Register/>)
// rootRef.render(<LogNReg/>)
// rootRef.render(<FetchingData/>)
rootRef.render(<ProductList/>)