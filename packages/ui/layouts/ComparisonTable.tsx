import React from 'react';
import clsx from 'clsx';

export interface ComparisonColumn {
  id: string;
  name: string;
  highlight?: boolean;
}

export interface ComparisonRow {
  id: string;
  feature: string;
  values: Record<string, React.ReactNode>;
}

export interface FeatureComparisonTableProps {
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  title?: string;
}

export const FeatureComparisonTable: React.FC<FeatureComparisonTableProps> = ({ columns, rows, title }) => {
  return (
    <div className="overflow-x-auto">
      {title && <h3 className="text-2xl font-bold text-secondary-900 mb-6">{title}</h3>}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-secondary-300 bg-secondary-50 px-4 py-3 text-left font-semibold text-secondary-900">
              Característica
            </th>
            {columns.map((col) => (
              <th
                key={col.id}
                className={clsx(
                  'border border-secondary-300 px-4 py-3 text-center font-semibold',
                  col.highlight ? 'bg-primary-50 text-primary-900' : 'bg-secondary-50 text-secondary-900'
                )}
              >
                {col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={row.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-secondary-50/50'}>
              <td className="border border-secondary-300 px-4 py-3 font-medium text-secondary-900">
                {row.feature}
              </td>
              {columns.map((col) => (
                <td
                  key={col.id}
                  className={clsx(
                    'border border-secondary-300 px-4 py-3 text-center',
                    col.highlight && 'bg-primary-50/50'
                  )}
                >
                  {row.values[col.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
