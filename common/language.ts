// a single accent object
export type Accent = {
  id: number;
  name: string;
  token?: string;
  clientId?: string;
};

export type SentenceCount = {
  currentCount: number;
  targetSentenceCount: number;
};

// a single accent object
export type Language = {
  id: number;
  name: string;
  sentenceCount: SentenceCount;
  is_contributable?: boolean;
  native_name: string;
  text_direction: string;
};

// single variant object
export type Variant = {
  id: number;
  name: string;
  token: string;
};

/*
  an object storing all
  accent/locale/variant data for a user
*/
export type UserLanguage = {
  locale: string;
  variant?: Variant;
  accents?: Accent[];
};
