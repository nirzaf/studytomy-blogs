import { Framework, getAllFrameworks } from './framework-utils';

export interface ComparisonCriteria {
  name: string;
  key: keyof Framework;
  description: string;
}

export const comparisonCriteria: ComparisonCriteria[] = [
  {
    name: 'Learning Curve',
    key: 'learningCurve',
    description: 'How easy it is to learn and master the framework'
  },
  {
    name: 'Performance',
    key: 'performance',
    description: 'Runtime performance and optimization capabilities'
  },
  {
    name: 'Bundle Size',
    key: 'bundleSize',
    description: 'Size of the framework and its impact on application bundle'
  },
  {
    name: 'Ecosystem',
    key: 'ecosystem',
    description: 'Available libraries, tools, and community resources'
  }
];

export function generateComparisonTable(): string {
  const frameworks = getAllFrameworks();
  const headers = ['Feature', ...frameworks.map(f => f.name)];
  
  const rows = comparisonCriteria.map(criteria => {
    const values = frameworks.map(f => f[criteria.key]);
    return [criteria.name, ...values];
  });

  return [
    headers.join(' | '),
    headers.map(() => '---').join(' | '),
    ...rows.map(row => row.join(' | '))
  ].join('\n');
}