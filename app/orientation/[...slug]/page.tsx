import { notFound } from "next/navigation";
import { allOrientationPages } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

interface OrientationPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: OrientationPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allOrientationPages.find((page) => page.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: OrientationPageProps): Promise<Metadata> {
  const page = await getPostFromParams(params);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | SCiPNET`,
    description: `Orientation, part ${page.part}`,
  };
}

export async function generateStaticParams(): Promise<
  OrientationPageProps["params"][]
> {
  return allOrientationPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: OrientationPageProps) {
  const page = await getPostFromParams(params);

  if (!page) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert prose-zinc">
      <h1 className="mb-2">{page.title}</h1>

      <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
        Orientation, part {page.part}
      </p>

      <hr className="my-4" />
      <Mdx code={page.body.code} />
      <hr className="my-4" />
      <details>
        <summary>Attribution</summary>
        {page.attribution?.adapted && "Adapted from "}
        {`"${page.attribution?.ogTitle}" `}
        by{"  "}{page.attribution.author}, from the{" "}
        <a href="https://scp-wiki.wikidot.com">SCP Wiki</a>. Licensed under{" "}
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>.
      </details>
    </article>
  );
}
