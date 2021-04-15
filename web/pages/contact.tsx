/**
 * Copyright 2021 Weasel, Inc. All rights reserved.
 */

import Head from 'next/head';
import ContactForm from '@/components/contact-form';
import FooterCta from '@/components/footer-cta';

interface PageContent {
  title: string;
  subtitle: string;
}

const content: PageContent = {
  title: 'Contact Us',
  subtitle: 'We like to hear what you think'
};

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Weasel - Contact Us</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <section className="bg-gradient-to-b from-dark-blue-900 to-light-blue-900">
        <div className="wsl-min-h-screen-1 container mx-auto flex flex-col justify-center">
          <div className="p-8 space-y-2 text-center">
            <h2 className="text-white text-4xl font-extrabold">
              {content.title}
            </h2>
            <p className="text-xl text-white">{content.subtitle}</p>
          </div>
          <section className="py-8 min-h-[25vh] flex items-center">
            <div className="p-8 md:px-24 lg:px-8 mx-auto rounded-xl bg-dark-blue-700">
              <ContactForm></ContactForm>
            </div>
          </section>
        </div>
      </section>
      <section className="py-8 min-h-[25vh] flex items-center bg-dark-blue-800">
        <div className="container mx-auto px-8 md:px-24 lg:px-8">
          <FooterCta></FooterCta>
        </div>
      </section>
    </>
  );
}
