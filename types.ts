export interface Breed {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  tags: string[];
  origin?: string;
}

export type ViewState = 'home' | 'quiz' | 'guide' | 'list' | 'calculator' | 'detail';

export interface QuizOption {
  value: string;
  label: string;
  subLabel: string;
  icon: string;
}

export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  description: string;
  options: QuizOption[];
}
