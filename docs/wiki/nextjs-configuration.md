# Next.js Configuration
The `next.config.ts` file serves as the central orchestration point for the LegalOrbis application's runtime behavior, build-time optimizations, and infrastructure-level security. It configures the Next.js compiler, image processing pipeline, HTTP headers, and URL routing logic to ensure high performance and SEO compliance.

### Image Optimization

LegalOrbis utilizes the Next.js Image component with a highly optimized configuration to serve assets efficiently across varying device types.

*   **Formats**: The system prioritizes `image/avif` followed by `image/webp` to provide superior compression over standard JPEG/PNG [next.config.ts:5-5]().
*   **Sizing Grid**: A comprehensive range of `deviceSizes` (from 640 to 3840 pixels) and `imageSizes` (from 16 to 384 pixels) is defined to allow the server to generate precise srcsets for responsive images [next.config.ts:6-7]().
*   **SVG Security**: SVGs are permitted but restricted via a strict Content Security Policy (CSP). They are executed in a `sandbox` with `script-src 'none'` to prevent XSS attacks through malicious image files [next.config.ts:9-10]().

**Image Processing Flow**

```mermaid
graph TD
    ["Source Image (SVG/JPG/PNG)"] --> ["Next.js Image Loader"]
    subgraph "Optimization Pipeline"
        ["Next.js Image Loader"] --> ["Format Conversion (AVIF/WebP)"]
        ["Format Conversion (AVIF/WebP)"] --> ["Resizing (deviceSizes/imageSizes)"]
    end
    ["Resizing (deviceSizes/imageSizes)"] --> ["Cached Optimized Asset"]
    ["Cached Optimized Asset"] --> ["Client Browser"]
    
    subgraph "Security Layer"
        ["SVG Source"] --> ["CSP Sandbox"]
        ["CSP Sandbox"] --> ["script-src 'none'"]
    end
```
Sources: [next.config.ts:4-11]()

### Compiler & Build Optimizations

The configuration includes several flags to reduce bundle size and improve developer experience.

*   **Console Stripping**: In production environments, the compiler automatically removes all `console.log` statements to keep the client-side logs clean and slightly reduce bundle size [next.config.ts:19-21]().
*   **Modular Imports**: For `lucide-react`, the config uses `modularizeImports` to transform member imports into direct file paths, preventing the inclusion of the entire icon library in the bundle [next.config.ts:23-27]().
*   **Package Optimization**: The `experimental.optimizePackageImports` property is used for heavy libraries like `framer-motion`, `@radix-ui/react-accordion`, and `@radix-ui/react-dialog`. This ensures that only the specific components used are loaded by the browser [next.config.ts:29-36]().

Sources: [next.config.ts:18-36]()

### HTTP Security Headers

LegalOrbis implements a robust security posture through global HTTP headers applied to all routes [next.config.ts:38-60]().

| Header | Value | Purpose |
| :--- | :--- | :--- |
| `X-Frame-Options` | `DENY` | Prevents clickjacking by forbidding the site from being rendered in an iframe. |
| `X-Content-Type-Options` | `nosniff` | Prevents the browser from interpreting files as a different MIME type than declared. |
| `Referrer-Policy` | `origin-when-cross-origin` | Limits referrer information sent to other sites. |
| `Permissions-Policy` | `camera=(), microphone=(), ...` | Disables access to sensitive hardware features by default. |

Sources: [next.config.ts:43-58]()

### Caching Strategy

The configuration defines a tiered caching strategy based on the nature of the assets.

1.  **Static Assets (Immutable)**: Assets in `/_next/static/`, `/images/`, and root-level branding files (favicons, SVGs) are served with a `max-age` of 1 year (31,536,000 seconds) and the `immutable` directive [next.config.ts:80-150]().
2.  **SEO Metadata**: `sitemap.xml` and `robots.txt` are cached for 24 hours (86,400 seconds) to ensure crawlers receive updated routing information without overloading the server [next.config.ts:61-78]().

**Cache Policy Association**

```mermaid
graph LR
    ["nextConfig.headers()"] --> ["Immutable (1 Year)"]
    ["nextConfig.headers()"] --> ["Short-Term (24 Hours)"]

    ["Immutable (1 Year)"] --- ["/_next/static/**"]
    ["Immutable (1 Year)"] --- ["/images/**"]
    ["Immutable (1 Year)"] --- ["/favicon.ico"]
    ["Immutable (1 Year)"] --- ["/LegalOrbis.svg"]

    ["Short-Term (24 Hours)"] --- ["/sitemap.xml"]
    ["Short-Term (24 Hours)"] --- ["/robots.txt"]
```
Sources: [next.config.ts:61-151]()

### Redirect & Canonicalization Rules

The `redirects` function handles protocol enforcement, domain canonicalization, and URL sanitization [next.config.ts:157-202]().

*   **HTTPS Enforcement**: Detects the `x-forwarded-proto: http` header (typically from a proxy/load balancer) and redirects to the secure `https://www.legalorbisabogados.es` equivalent [next.config.ts:160-171]().
*   **WWW Canonicalization**: Redirects requests from the apex domain `legalorbisabogados.es` to the `www` subdomain to maintain SEO consistency [next.config.ts:173-183]().
*   **URL Sanitization**: Redirects common problematic characters like `/$` or `/&` back to the home page to prevent 404s from malformed links [next.config.ts:185-194]().
*   **Practice Areas Navigation**: Redirects the general `/areas-juridicas` path to the `#areas-juridicas` anchor on the home page, as the landing page for all areas is integrated into the main scroll view [next.config.ts:196-200]().

Sources: [next.config.ts:157-201]()
