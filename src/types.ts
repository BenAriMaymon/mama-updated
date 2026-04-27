/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'he' | 'en' | 'hu';

export interface Service {
  id: string;
  title: string;
  description: string;
  content: string[];
}

export interface ContactInfo {
  name: string;
  role: string | null;
  phone: string;
  email: string;
}

export interface Content {
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    content: string[];
  };
  services: {
    title: string;
    items: Service[];
  };
  contact: {
    title: string;
    subtitle: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      success: string;
    };
    details: ContactInfo[];
  };
  calculator: {
    title: string;
    subtitle: string;
    wordCount: string;
    totalExclVat: string;
    totalInclVat: string;
    vatLabel: string;
    description: string;
  };
  footer: {
    rights: string;
  };
}
