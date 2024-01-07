import logo from './logo.svg';
import './App.css';
import Headers from './Components/Headers';
import Pages from './Components/Pages';
import Footers from './Components/Footers';
import Welcomes from './Components/Welcomes';
import Greets from './Components/Greets';
import Messages from './Components/Messages';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClicks from './Components/ClassClicks';
import Topit from './Components/Topit';



function App() {
  return (
    <div  >
      < Topit />
      <p className='rohit1'>hello Rohit 12sap</p>
      <ClassClicks />
      <FunctionClick />
      <Counter />
      <Messages />
      <Greets  name=" Shree" helloname="good Boy">
        |<p>A footer is an additional navigation component. It can hold links, buttons,
           company info, copyrights, forms, and many other elements. 

        </p>
         </Greets>
         <Greets name="swapnil" helloname="care Boy"><button>swapnil_Button</button>

         </Greets>
      <Greets  name=" Abhishek" helloname=" best Boy"/>

       < Headers />
       < Welcomes />
      <Pages />
      <Footers />
  
    </div>
  );
}

export default App;
