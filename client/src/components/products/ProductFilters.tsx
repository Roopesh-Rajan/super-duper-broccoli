import { Filter } from 'lucide-react';
import { Button } from '../ui/Button';

interface ProductFiltersProps {
  filters: {
    category: string;
    search: string;
  };
  onFilterChange: (filters: { category: string; search: string }) => void;
}

const categories = [
  'All',
  'Running',
  'Basketball',
  'Football',
  'Training',
  'Lifestyle'
];

export function ProductFilters({ filters, onFilterChange }: ProductFiltersProps) {
  return (
    <div className="flex items-center gap-4">
      <Filter className="w-5 h-5" />
      <div className="flex gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filters.category === category ? 'primary' : 'outline'}
            size="sm"
            onClick={() => onFilterChange({ ...filters, category })}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}