---
title: "How to show breadcrumbs in Tanstack Router"
description: "Learn how to implement dynamic breadcrumbs in TanStack Router"
date: "2025-04-02"
---

I've found a nice non-DRY way to compose breadcrumbs in TanStack Router.

Here's how you define the breadcrumbs you want for a particular page:

```tsx
export const Route = createFileRoute("/_authenticated/_layout/boards")({
  component: BoardsPage,
  loader: () => {
    return {
      breadcrumbs: linkOptions([
        {
          label: "Boards",
          to: "/boards",
        },
      ]),
    };
  },
  head(ctx) {
    return {
      meta: [{ title: "Boards" }],
    };
  },
});
```

You return a breadcrumbs field with an array of links. You can also fetch any necessary data to render that breadcrumb in the loader itself. All the previous breadcrumbs get linked automatically for you based on your route definitions.

Here's how to render the breadcrumbs:

```tsx
type BreadcrumbType = LinkProps & { label: string };

export function TsrBreadcrumbs() {
  const matches = useMatches();

  const breadcrumbs = matches
    .filter((match) => isMatch(match, "loaderData.breadcrumbs"))
    .flatMap((match) => match.loaderData?.breadcrumbs) as BreadcrumbType[];

  return breadcrumbs.map(({ label, ...linkProps }, index, arr) => {
    const isTail = index === arr.length - 1;

    if (isTail) {
      return { label };
    }

    return { label };
  });
}
```

You typically render it once in your app header, and voilà! You'll get dynamic breadcrumbs with a non-DRY configuration.
