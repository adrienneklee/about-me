import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-MN9FPEG5CX'); 
};

export const trackPageview = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
};