import { FC } from 'react';

interface IAboutPage {
  title: string;
}

const AboutPage: FC<IAboutPage> = (props) => {
  return <h1>{props.title}</h1>;
};

export default AboutPage;
