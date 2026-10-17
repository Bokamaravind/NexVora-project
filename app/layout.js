import { Newsreader, Public_Sans } from 'next/font/google';
import './globals.css';
import ScrollProgress from '../components/ScrollProgress';
import CursorGlow from '../components/CursorGlow';

const serif = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: 'NexVora — Building Intelligent Solutions',
  description:
    'NexVora builds AI agents, automations, machine learning models, and full-stack websites. Packages from ₹999.',
};

export const viewport = {
  themeColor: '#04060D',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <ScrollProgress />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
