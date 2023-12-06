import './App.css';
import P from './components/paragraph'
import Button from './components/button';

function App() {
  return (
    <>
      <P text={'Green text'} color={'#008000'} />
      <Button label='Button 1'/>
      <hr />
      <P text={'yellow text'} color={'yellow'} />
      <Button label='Button 2'/>
      <hr />
      <P text={'Blue TEXT'} color={'#0000ff'} />
      <Button label='Button 3'/>
      <hr />
      <P text={'PINK text'} color={'pink'} />
      <Button label='Button 4'/>
      <hr />
    </>
  );
};

export default App;