import { Helmet } from 'react-helmet';

const HelmetComponent = ({ title: artistName }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{`${artistName} | Anghami`}</title>
    <meta name="description" content="Helmet application" />
  </Helmet>
);

export default HelmetComponent;
