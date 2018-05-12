import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const animationFrame = (callback) => {
  setTimeout(callback, 0);
};

global.requestAnimationFrame = animationFrame;

// eslint-disable-next-line no-unused-vars
const { requestAnimationFrame } = global;

configure({ adapter: new Adapter(), disableLifecycleMethods: true });
