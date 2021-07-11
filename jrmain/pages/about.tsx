const RemoteAbout = (await import('jrprofile/pages/about')).default;

export const getServerSideProps = () => {
  return {
    props: {
      title: 'About from Server Side Props',
    },
  };
};

export default RemoteAbout;
