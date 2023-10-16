import logo from '../../assets/investment-calculator-logo.png';
import headerClasses from './Header.module.css';

export default function Header() {
  return (
    <header className={headerClasses.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
