import Head from 'next/head';

export default function Meta({
    name = 'Midnight Hacks',
    title = 'Midnight Hacks',
    description = 'A hackathon dedicated to kickstarting student\'s journeys into the coding world!',
    image = 'https://midnighthacks.tech/midnight-hacks-logo.jpg',
    url = 'https://midnighthacks.tech'
  }) {
    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta name="twitter:title" content={title} />
            <meta name="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={name} />
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta name="twitter:description" content={description} />
            <meta property="og:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={image} />

            <script async defer data-website-id="f3500e20-c36f-4f37-bb04-232583348397" src="https://ce02c2f058d3.up.railway.app/umami.js"></script>
        </Head>
    );
}