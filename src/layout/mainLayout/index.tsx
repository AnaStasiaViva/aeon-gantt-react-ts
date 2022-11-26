import { useEffect } from 'react';
import { Header } from './Header';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import { Footer } from './Footer';

export function MainLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [pathname])

  return (
    <>
      <Header/>
      <main className={ styles.main }>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}
