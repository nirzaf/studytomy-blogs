export interface Framework {
  name: string;
  description: string;
  learningCurve: 'Easy' | 'Moderate' | 'Steep';
  performance: 'Good' | 'Excellent';
  bundleSize: 'Very Small' | 'Small' | 'Moderate' | 'Large';
  ecosystem: 'Growing' | 'Large' | 'Very Large';
  backing: string;
}

export const frameworks: Record<string, Framework> = {
  react: {
    name: 'React',
    description: 'A JavaScript library for building user interfaces',
    learningCurve: 'Moderate',
    performance: 'Good',
    bundleSize: 'Moderate',
    ecosystem: 'Very Large',
    backing: 'Meta'
  },
  vue: {
    name: 'Vue',
    description: 'The Progressive JavaScript Framework',
    learningCurve: 'Easy',
    performance: 'Good',
    bundleSize: 'Small',
    ecosystem: 'Large',
    backing: 'Independent'
  },
  angular: {
    name: 'Angular',
    description: 'Platform for building mobile and desktop web applications',
    learningCurve: 'Steep',
    performance: 'Good',
    bundleSize: 'Large',
    ecosystem: 'Large',
    backing: 'Google'
  },
  svelte: {
    name: 'Svelte',
    description: 'Cybernetically enhanced web apps',
    learningCurve: 'Easy',
    performance: 'Excellent',
    bundleSize: 'Very Small',
    ecosystem: 'Growing',
    backing: 'Independent'
  }
};

export function getFrameworkData(id: keyof typeof frameworks) {
  return frameworks[id];
}

export function getAllFrameworks() {
  return Object.values(frameworks);
}