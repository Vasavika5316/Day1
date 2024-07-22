import ReactDOM from "react-dom/client";
import './styles.css';
// import {Sum} from './sumfunc.js';
// import {Details} from './details.js';
// import {Nest} from './nest.js';
// import {Array} from './array.js';
// import {Bool} from './bool.js';
import {Review} from './review.js';
const rootElement = document.getElementById('root')
const rootRef = ReactDOM.createRoot(rootElement)
// rootRef.render(<Sum/>)
// rootRef.render(<Details/>)
// rootRef.render(<div><Sum/><Details/></div>)
// rootRef.render(<Nest/>)
// rootRef.render(<Array/>)
// rootRef.render(<Bool/>)
rootRef.render(<Review/>)