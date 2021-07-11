const RemoteAbout = (await import('jrprofile/pages/about')).default;

const About = () => {
  return <RemoteAbout />;
};

export default About;
