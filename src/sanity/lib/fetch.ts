import type { QueryParams } from "@sanity/client";
import { client } from "@/sanity/lib/client";

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  const isDevelopment = process.env.NODE_ENV === "development";

  return client
    .withConfig({ useCdn: true })
    .fetch<QueryResponse>(query, params, {
      cache: isDevelopment ? undefined : "force-cache",
      next: { tags },
    });
}
