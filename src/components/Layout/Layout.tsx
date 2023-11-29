import { FC } from 'react';
import Header from '../Header/Header';
import scss from './Layout.module.scss';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={scss.container}>
      <Header />
      <main className={scss.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
