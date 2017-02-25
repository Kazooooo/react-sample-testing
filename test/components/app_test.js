import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App', () => {
  // initialize a component variable
  let component;

  beforeEach(() => {
    // substitute an instance of App every single time before running a test
    component = renderComponent(App);
  });

  // Use 'it' to test a single attribute of a target
  it('shows a comment box', () => {
    // Use 'expect' to make an 'assertion' about a target
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
