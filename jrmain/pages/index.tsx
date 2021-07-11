import dynamic from 'next/dynamic';

const RemoteHeader = (await import('jrlayout/components/header')).default;
const RemoteFooter = (await import('jrlayout/components/footer')).default;

const RemoteCard = dynamic(() => import('jrcommon/components/card'), {
  ssr: false,
});

const Index = () => {
  return (
    <>
      <style jsx>{`
        .margin {
          margin: 1em 0;
        }
      `}</style>

      <RemoteHeader />

      <div className="margin">
        <RemoteCard>
          <h2>Card Example</h2>
        </RemoteCard>
      </div>

      <RemoteFooter />
    </>
  );
};

export default Index;
