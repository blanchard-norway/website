import { NextPage, GetStaticProps } from 'next';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { Layout } from '../../components/layout';
import client from '../../../client';

interface ComponentProps {
  events: Array<any>;
}

const EventsWorkshops: NextPage<ComponentProps> = ({ events }) => {
  const portableComponents: PortableTextComponents = {
    block: {
      h1: ({ children }) => <h1 className="text-3xl">{children}</h1>,
      h2: ({ children }) => <h2 className="text-xl">{children}</h2>,
      h3: ({ children }) => <h3 className="text-lg">{children}</h3>,
      normal: ({ children }) => <p className="text-base">{children}</p>,
    },
  };

  return (
    <Layout>
      <section className="bluebg nopadding">
        <div className="container">
          <div className="row" style={{ paddingBottom: 10 }}>
            <div className="col-xs-12 breadcrumbs">
              <a href="/">HJEM</a>
              <span className="divider">{'//'}</span>KURS
            </div>
          </div>
        </div>
      </section>

      <section className="events-dates-locations">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="text-center">
                KOMMENDE Arrangementer og <span className="green-bg">KURS</span>
              </h2>
            </div>
          </div>
        </div>

        {events &&
          events.map((el, idx) => (
            <div
              key={idx}
              className={`row table upcoming-workshops ${
                idx % 2 === 0 ? 'bluebg' : ''
              }`}
            >
              <div className="col-lg-3 col-sm-2 image-column">
                <img
                  src={imageUrlBuilder(client)
                    .image(el.image)
                    .width(424)
                    .height(424)
                    .url()}
                  width={424}
                  height={424}
                  className="img-responsive"
                  alt={el.alt}
                />
              </div>
              <div className="col-lg-8 col-sm-7 right-line">
                <strong>{el.subtitle}</strong>
                <div className="title">{el.title}</div>
                <div suppressHydrationWarning={true}>
                  <PortableText
                    value={el.description}
                    components={portableComponents}
                  />
                </div>
              </div>
              <div className="col-lg-1 col-sm-3 text-right">
                <a href={el.link}>
                  <div className="btn btn-primary">MER INFO</div>
                </a>
              </div>
            </div>
          ))}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await client.fetch(
    `
      *[_type == "event"]
    `,
  );
  return {
    props: {
      events,
    },
  };
};

export default EventsWorkshops;
