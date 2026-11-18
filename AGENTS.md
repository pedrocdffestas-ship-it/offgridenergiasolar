<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Render the supplied sales-page sections as React components on the existing index route; preserve TanStack routing to keep SSR and navigation compatible.
- Store extracted HTML images as asset pointers, not base64 markup, to keep page source and downloads small.
- Keep carousel and sticky-CTA lifecycle listeners in a cleanup-safe client hook; never execute uploaded scripts directly.
