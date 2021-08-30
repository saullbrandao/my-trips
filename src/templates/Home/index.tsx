import { InfoOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

const HomeTemplate = ({ places }: MapProps) => (
  <>
    <NextSeo
      title="My Trips"
      description="A simple project to show in a map my favorite places in the world."
      canonical=""
      openGraph={{
        url: 'https://my-trips-saullbrandao.vercel.app/',
        title: 'My Trips',
        description:
          'A simple project to show in a map my favorite places in the world.',
        images: [
          {
            url: 'https://my-trips-saullbrandao.vercel.app/cover.png',
            width: 1280,
            height: 720,
            alt: 'My Trips'
          }
        ],
        site_name: 'My Trips'
      }}
    />
    <LinkWrapper href="/about">
      <InfoOutline size={32} aria-label="About" />
    </LinkWrapper>
    <Map places={places} />
  </>
)

export default HomeTemplate
