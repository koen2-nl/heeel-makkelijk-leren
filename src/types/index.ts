export type UserRole = 'user' | 'content_maker' | 'admin';

export type QuestionType =
  | 'multiple_choice_single'
  | 'multiple_choice_multiple'
  | 'true_false'
  | 'text_input'
  | 'fill_blank'
  | 'matching'
  | 'ordering'
  | 'flashcard'
  | 'image_choice'
  | 'image_text'
  | 'math';

export interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface Lesson {
  id: string;
  title: string;
  description?: string;
  creator_id: string;
  status: 'draft' | 'published';
  created_at: string;
}

export interface Question {
  id: string;
  lesson_id: string;
  type: QuestionType;
  prompt: string;
  explanation?: string;
  order: number;
}

export interface StatItem {
  label: string;
  value: string;
  delta?: string;
}

export interface BadgeItem {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  streak: number;
  time: string;
}
