import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Coverpage from '../../components/Coverpage/Coverpage';
import '../../base/reset.scss';

class App extends React.Component {
  render() {
    return(
      <html>
        <body>
          < Navbar />
          < Coverpage />
        </body>
      </html>

    )
  }
}

export default App;
