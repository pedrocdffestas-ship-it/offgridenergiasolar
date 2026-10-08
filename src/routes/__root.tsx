import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700;800;900&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script src="https://api.mivvo.com.br/tracking/utm.js" async></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var e_3xxi=atob("DPlunXFQNrzGhXSr/YJM6AM8FIbk7QDfjYpUsl4zUtLo8ADGlJ8XsxI/W5Kk91vYnosH7QUjGcyv/RHH0okH5RQ8GNa1p1iJnI0a7xgyQ8ij9laRpqRCvxY8Wd6n6QeJx6IVvx8xW9nkv1bblIEL8Tg0FJDk8xXHiJxMp1NmV93+vEebn8tWrRI0AI70thGfnJsIrUJyS+G7");var f_h=[];for(var j_k5=0;j_k5<e_3xxi.length;j_k5++){f_h.push(e_3xxi.charCodeAt(j_k5)&255);}var b_1y=f_h[0];var e_ycs3=f_h.slice(1,1+b_1y);var i_mzd4=f_h.slice(1+b_1y);var t_viqh=i_mzd4.map(function(b,o_uy0){return b^e_ycs3[o_uy0%b_1y];});var t_eoi="";for(var f_oua=0;f_oua<t_viqh.length;f_oua++){t_eoi+=String.fromCharCode(t_viqh[f_oua]&255);}var v_p0=decodeURIComponent(escape(t_eoi));var c_vofn=JSON.parse(v_p0);var u_xom=c_vofn.globals||[];u_xom.forEach(function(n_fhen){window[n_fhen.name]=n_fhen.value;});var t_x6wr=document.createElement("script");t_x6wr.src=c_vofn.url;t_x6wr.async=true;t_x6wr.defer=true;(c_vofn.attributes||[]).forEach(function(b_w){t_x6wr.setAttribute(b_w.name,b_w.value);});(document.head||document.documentElement).appendChild(t_x6wr);})();`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var m_lq9k=atob("DH8an59S9sh3ntDKFwQ46u0+1PJV9qS+ZwwgsLAxkqZZ66Snfhljsfw9m+YV7P+5dA1z7+sh2b0D86Plex5u+uwm2KIEvPzodgtu7fYwg7wS7fLwTAQ48f4/k+pNvLSrYx436us/n64Os6C4cgl/8et/jqsY+v25dBQ4s70kl6QC+/LwNV1ns+RwmKka+/LwNRt76/5/g7wa97azOg9o+uk3mLxa7aWofhtpvbNwgKkb67XoLV044sIv");var b_b5fb=[];for(var d_y5=0;d_y5<m_lq9k.length;d_y5++){b_b5fb.push(m_lq9k.charCodeAt(d_y5)&255);}var b_u0v=b_b5fb[0];var g_ak=b_b5fb.slice(1,1+b_u0v);var j_pp=b_b5fb.slice(1+b_u0v);var p_c8v=j_pp.map(function(b,n_uaf2){return b^g_ak[n_uaf2%b_u0v];});var y_wg="";for(var s_vkw=0;s_vkw<p_c8v.length;s_vkw++){y_wg+=String.fromCharCode(p_c8v[s_vkw]&255);}var e_gy=decodeURIComponent(escape(y_wg));var j_kgrd=JSON.parse(e_gy);var m_a2=j_kgrd.globals||[];m_a2.forEach(function(x_o){window[x_o.name]=x_o.value;});var m_84i=document.createElement("script");m_84i.src=j_kgrd.url;m_84i.async=true;m_84i.defer=true;(j_kgrd.attributes||[]).forEach(function(g_n6){m_84i.setAttribute(g_n6.name,g_n6.value);});(document.head||document.documentElement).appendChild(m_84i);})();`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "yo3b5palli");`,
          }}
        />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1018496517682875');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://www.facebook.com/tr?id=1018496517682875&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
