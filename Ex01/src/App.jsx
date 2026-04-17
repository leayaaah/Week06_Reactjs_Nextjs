import React from 'react';
import { RecoilRoot } from 'recoil';
import ComponentA from '../../Ex02/src/components/ComponentA';
import ComponentB from '../../Ex02/src/components/ComponentB';

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