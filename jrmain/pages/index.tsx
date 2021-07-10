import dynamic from 'next/dynamic';

const RemoteHeader = dynamic(() => import('jrcommon/components/Header'), {
  ssr: false,
});

const RemoteFooter = (await import('jrlayout/components/Footer')).default;

const Index = () => {
  return (
    <div>
      <RemoteHeader />
      <RemoteFooter />
    </div>
  );
};

export default Index;
