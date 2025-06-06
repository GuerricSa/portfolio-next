export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  answers?: Record<string, string | string[]>;
  token?: string;
}
