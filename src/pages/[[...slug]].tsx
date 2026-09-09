import dynamic from 'next/dynamic';
import Head from 'next/head';

import { ConfigModel } from '.stackbit/models/Config';
import { ThemeStyleModel } from '.stackbit/models/ThemeStyle';

import { DynamicComponent } from '@/components/components-registry';
import { WORK_PAGES, CV_DATA } from '@/components/scatterWorkCore';
import { PageComponentProps } from '@/types';
import { allContent } from '@/utils/content';
import { seoGenerateMetaDescription, seoGenerateMetaTags, seoGenerateTitle } from '@/utils/seo-utils';
import { resolveStaticProps } from '@/utils/static-props-resolvers';

// These all touch window/document, so they must render client-side only.
const ScatterHome = dynamic(() => import('@/components/ScatterHome'), { ssr: false });
const ScatterCvPage = dynamic(() => import('@/components/ScatterCvPage'), { ssr: false });
const ScatterProjectPage = dynamic(() => import('@/components/ScatterProjectPage'), { ssr: false });

type SpecialProps = {
    global: { site: any; theme: any };
    isRoot?: boolean;
    isCv?: boolean;
    workSlug?: string | null;
};

const Page: React.FC<(PageComponentProps & SpecialProps)> = (props) => {
    const { global, isRoot, isCv, workSlug, ...page } = props;
    const { site } = global;

    // The three special routes (homepage, CV, each work) don't have a normal
    // markdown "page" object to pull SEO fields from, so their <title> is
    // set directly here instead of via seoGenerateTitle.
    let title = site?.title || 'Kitman Yeung';
    let metaTags: ReturnType<typeof seoGenerateMetaTags> = [];
    let metaDescription: string | undefined;

    if (isCv) {
        title = 'CV — Kitman Yeung';
    } else if (workSlug && WORK_PAGES[workSlug]) {
        title = WORK_PAGES[workSlug].title + ' — Kitman Yeung';
    } else {
        // covers both the homepage and every ordinary content page —
        // both have real page data to pull SEO fields from, same as before.
        title = seoGenerateTitle(page as any, site);
        metaTags = seoGenerateMetaTags(page as any, site);
        metaDescription = seoGenerateMetaDescription(page as any, site);
    }

    return (
        <>
            <Head>
                <title>{title}</title>
                {metaDescription && <meta name="description" content={metaDescription} />}
                {metaTags.map((metaTag) => {
                    if (metaTag.format === 'property') {
                        return <meta key={metaTag.property} property={metaTag.property} content={metaTag.content} />;
                    }
                    return <meta key={metaTag.property} name={metaTag.property} content={metaTag.content} />;
                })}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {site?.favicon && <link rel="icon" href={site.favicon} />}
            </Head>
            {isRoot ? (
                <ScatterHome />
            ) : isCv ? (
                <ScatterCvPage data={CV_DATA} />
            ) : workSlug && WORK_PAGES[workSlug] ? (
                <ScatterProjectPage data={WORK_PAGES[workSlug]} />
            ) : (
                <DynamicComponent {...(props as PageComponentProps)} />
            )}
        </>
    );
};

export function getStaticPaths() {
    const allData = allContent();
    const paths = new Set<string>(allData.map((obj) => obj.__metadata.urlPath).filter(Boolean));

    // Every work in WORK_PAGES gets a real route here even if it has no
    // matching content markdown file yet (new works added straight to the
    // WORK_PAGES data don't need a markdown file to be reachable).
    paths.add('/cv');
    Object.keys(WORK_PAGES).forEach((slug) => paths.add('/projects/' + slug));

    return { paths: Array.from(paths), fallback: false };
}

export function getStaticProps({ params }) {
    const slugArr: string[] = params.slug || [];
    const isRoot = slugArr.length === 0;
    const isCv = slugArr.length === 1 && slugArr[0] === 'cv';
    const workSlug = slugArr.length === 2 && slugArr[0] === 'projects' ? slugArr[1] : null;
    const isSpecialWork = !!(workSlug && WORK_PAGES[workSlug]);
    const allData = allContent();

    // The CV and work pages are rendered entirely from WORK_PAGES/CV_DATA and
    // don't need (or, for brand-new works, always have) a matching markdown
    // file — so they skip resolveStaticProps and just carry the site config.
    if (isCv || isSpecialWork) {
        const site = allData.find((obj) => obj.__metadata.modelName === ConfigModel.name);
        const theme = allData.find((obj) => obj.__metadata.modelName === ThemeStyleModel.name);
        return {
            props: {
                global: { site, theme },
                isRoot: false,
                isCv,
                workSlug: isSpecialWork ? workSlug : null
            }
        };
    }

    // The homepage ('/') and every other ordinary page still resolve through
    // the existing content system exactly as before.
    const urlPath = '/' + slugArr.join('/');
    const props = resolveStaticProps(urlPath, allData);
    return { props: { ...props, isRoot, isCv: false, workSlug: null } };
}

export default Page;
