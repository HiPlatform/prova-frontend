import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'jest-fetch-mock';

const animationFrame = (callback) => {
  setTimeout(callback, 0);
};

global.requestAnimationFrame = animationFrame;
global.fetch = fetchMock;

// eslint-disable-next-line no-unused-vars
const { requestAnimationFrame } = global;

configure({ adapter: new Adapter(), disableLifecycleMethods: true });
