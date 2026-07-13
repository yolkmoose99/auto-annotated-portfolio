import dynamic from 'next/dynamic';
import Head from 'next/head';

import { DynamicComponent } from '@/components/components-registry';
import { PageComponentProps } from '@/types';
import { allContent } from '@/utils/content';
import { seoGenerateMetaDescription, seoGenerateMetaTags, seoGenerateTitle } from '@/utils/seo-utils';
import { resolveStaticProps } from '@/utils/static-props-resolvers';

// The scatter homepage touches window/document, so it must render client-side only.
const ScatterHome = dynamic(() => import('@/components/ScatterHome'), { ssr: false });

const Page: React.FC<PageComponentProps & { isRoot?: boolean }> = (props) => {
    const { global, isRoot, ...page } = props;
    const { site } = global;
    const title = seoGenerateTitle(page, site);
    const metaTags = seoGenerateMetaTags(page, site);
    const metaDescription = seoGenerateMetaDescription(page, site);

    return (
        <>
            <Head>
                <title>{title}</title>
                {metaDescription && <meta name="description" content={metaDescription} />}
                {metaTags.map((metaTag) => {
                    if (metaTag.format === 'property') {
                        // OpenGraph meta tags (og:*) should be have the format <meta property="og:…" content="…">
                        return <meta key={metaTag.property} property={metaTag.property} content={metaTag.content} />;
                    }
                    return <meta key={metaTag.property} name={metaTag.property} content={metaTag.content} />;
                })}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {site.favicon && <link rel="icon" href={site.favicon} />}
            </Head>
            {isRoot ? <ScatterHome /> : <DynamicComponent {...props} />}
        </>
    );
};

export function getStaticPaths() {
    const allData = allContent();
    const paths = allData.map((obj) => obj.__metadata.urlPath).filter(Boolean);
    return { paths, fallback: false };
}

export function getStaticProps({ params }) {
    const allData = allContent();
    const urlPath = '/' + (params.slug || []).join('/');
    const isRoot = !params.slug || params.slug.length === 0;
    if (isRoot) {
        // still need `global` (site config) for <Head>, but skip normal page resolution
        const props = resolveStaticProps(urlPath, allData);
        return { props: { ...props, isRoot: true } };
    }
    const props = resolveStaticProps(urlPath, allData);
    return { props };
}

export default Page;
