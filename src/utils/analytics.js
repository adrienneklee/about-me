import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-MN9FPEG5CX'); // ⬅️ Replace with your Measurement ID
};

export const trackPageview = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
};