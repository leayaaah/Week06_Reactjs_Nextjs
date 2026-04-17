import React from 'react';
import { RecoilRoot } from 'recoil';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  return (
    <RecoilRoot>
      <div>
        <ComponentA />
        <ComponentB />
      </div>
    </RecoilRoot>
  );
}

export default App;