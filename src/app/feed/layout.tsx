// this page will render on every route which has feed in it it acts like a re-usable component

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <p>reusable component</p>
      <div>{children}</div>
    </>
  );
};

export default Layout;
