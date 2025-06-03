export interface Tag {
  text: string;
  color: string;
}

export interface Card {
  title: string;
  titleColor: string;
  backgroundColor: string;
  backgroundImage?: {
    src: string;
    alt: string;
  };
  description: string;
  content: string;
  included?: Array<string>;
  tags: Tag[];
}

export interface HorizontalAccordionProps {
  title?: string;
  subtitle: string;
  cards: Card[];
}
