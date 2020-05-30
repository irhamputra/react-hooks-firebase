import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FirebaseComponent } from '../index';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FirebaseComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
