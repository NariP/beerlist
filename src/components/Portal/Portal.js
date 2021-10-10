import ReactDOM from 'react-dom';

const Portals = ({ children }) => {
  const globalPortals = document.getElementById('root-portals');
  return ReactDOM.createPortal(children, globalPortals);
};

export default Portals;
