import { useTheme } from '../../context/ThemeContext';
import moonIcon from '../../assets/icons/moon.svg';
import sunIcon from '../../assets/icons/sun.svg';
import './ThemeToggle.css';

export function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <div className="slider round">
          <img src={moonIcon} alt="dark" className="slider-icon moon" />
          <img src={sunIcon} alt="light" className="slider-icon sun" />
        </div>
      </label>
    </div>
  );
} 