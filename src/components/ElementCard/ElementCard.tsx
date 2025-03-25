import { Element } from '../../types/Element';
import './ElementCard.css';

interface ElementCardProps {
  element: Element;
  onClick: (element: Element) => void;
}

export function ElementCard({ element, onClick }: ElementCardProps) {
  return (
    <div 
      className={`element-card ${element.category.toLowerCase().replace(' ', '-')}`}
      onClick={() => onClick(element)}
    >
      <div className="atomic-number">{element.atomicNumber}</div>
      <div className="symbol">{element.symbol}</div>
      <div className="name">{element.vietnameseName}</div>
      <div className="atomic-mass">{element.atomicMass}</div>
    </div>
  );
} 