import Head from 'next/head'
import Link from 'next/link';
import DefaultButton from '../app/components/buttons/DefaultButton';

const App = props => {
  return (
    <div className="container">
      <div className="col-lg-8 col-xl-8 offset-xl-1 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
        
      </div>
      <div className="col-lg-4  col-xl-4 offset-xl-1 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
        <div className="betting_table"></div>
      </div>
    </div>
  );
}

export default App;