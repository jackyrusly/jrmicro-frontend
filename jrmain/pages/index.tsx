import dynamic from 'next/dynamic';

const RemoteHeader = dynamic(() => import('jrcommon/components/Header'), {
  ssr: false,
});

const Index = () => {
  return (
    <div>
      <RemoteHeader />
    </div>
  );
};

export default Index;
