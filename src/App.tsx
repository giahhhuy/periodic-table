import { useState } from 'react';
import { useTheme } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { elements } from './data/elements';
import './App.css';

function App() {
  const { darkMode } = useTheme();

  // Tạo ma trận cho bảng tuần hoàn
  const createPeriodicTable = () => {
    const table = Array(10).fill(null).map(() => Array(18).fill(null));
    
    elements.forEach(element => {
      const { period, group } = element;
      if (period <= 7) {
        table[period - 1][group - 1] = element;
      }
    });

    return table;
  };

  const periodicTable = createPeriodicTable();

  // Thêm document.documentElement.setAttribute
  if (darkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  const getElementClass = (element: any) => {
    if (!element) return 'empty-cell';
    
    const categoryClasses: { [key: string]: string } = {
      'Kim loại kiềm': 'alkali-metal',
      'Kim loại kiềm thổ': 'alkaline-earth',
      'Kim loại chuyển tiếp': 'transition-metal',
      'Kim loại sau chuyển tiếp': 'post-transition-metal',
      'Á kim': 'metalloid',
      'Phi kim': 'nonmetal',
      'Khí hiếm': 'noble-gas',
      'Lantan': 'lanthanide',
      'Actini': 'actinide'
    };

    return `element-card ${categoryClasses[element.category] || ''}`;
  };

  return (
    <div className="container">
      <ThemeToggle />
      <h1>Bảng Tuần Hoàn Các Nguyên Tố Hóa Học</h1>
      
      <div className="periodic-table">
        {periodicTable.map((row, rowIndex) => (
          row.map((element, colIndex) => (
            element ? (
              <div 
                key={`${rowIndex}-${colIndex}`}
                className={`element-card ${element.category}`}
              >
                <div className="atomic-number">{element.atomicNumber}</div>
                <div className="symbol">{element.symbol}</div>
                <div className="name">{element.vietnameseName}</div>
              </div>
            ) : (
              <div 
                key={`${rowIndex}-${colIndex}`} 
                className="empty-cell"
              />
            )
          ))
        ))}
      </div>

      {/* Lanthanides và Actinides */}
      <div className="special-elements">
        {elements
          .filter(element => element.period > 7)
          .map(element => (
            <div 
              key={element.atomicNumber}
              className={getElementClass(element)}
            >
              <div className="atomic-number">{element.atomicNumber}</div>
              <div className="symbol">{element.symbol}</div>
              <div className="name">{element.vietnameseName}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
