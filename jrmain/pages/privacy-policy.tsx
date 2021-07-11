const RemotePrivacyPolicy = (await import('jrprofile/pages/privacy-policy'))
  .default;

const PrivacyPolicy = () => {
  return <RemotePrivacyPolicy />;
};

export default PrivacyPolicy;
