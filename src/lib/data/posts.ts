export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // The full body of the post (HTML string)
  date: string;
  readTime: string;
  tags: string[];
};

// We use basic HTML strings for the content right now. 
// In a larger app, you might use MDX or a Headless CMS (like Sanity/Contentful).
export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-react-server-components",
    title: "Understanding React Server Components",
    excerpt: "A deep dive into how RSCs change the paradigm of web development and why you should care. We explore the benefits, the caveats, and when to use them over traditional client components.",
    content: `
      <p>React Server Components (RSC) represent a fundamental shift in how we build applications with React. For years, we've thought of React purely as a client-side library. Even with frameworks like Next.js introducing SSR (Server-Side Rendering), the mental model was still that components ultimately hydrated and lived in the browser.</p>
      
      <h3>What changes with RSC?</h3>
      <p>With Server Components, we can write components that exclusively run on the server and never ship any JavaScript to the client. This means zero impact on your bundle size.</p>
      
      <h3>The Benefits</h3>
      <ul>
        <li><strong>Zero Bundle Size:</strong> Heavy libraries like markdown parsers or date formatters running on the server don't add a single byte to the client.</li>
        <li><strong>Direct Backend Access:</strong> You can query your database or internal microservices directly from your React component without creating an API endpoint first.</li>
        <li><strong>Automatic Code Splitting:</strong> Client components imported inside server components are automatically code-split by the framework.</li>
      </ul>
      
      <p>In conclusion, while there involves a slight learning curve regarding the "use client" directive, adapting to Server Components is crucial for modern frontend architecture.</p>
    `,
    date: "April 4, 2026",
    readTime: "8 min read",
    tags: ["React", "Next.js", "Architecture"],
  },
  {
    slug: "css-grid-vs-flexbox",
    title: "CSS Grid vs Flexbox in Modern Layouts",
    excerpt: "When to use which tool, and how they can be combined to build completely responsive, flawless web designs without relying on bloated CSS frameworks.",
    content: `
      <p>A common question among junior frontend developers is: "Should I use Grid or Flexbox?" The correct answer is: <strong>Both.</strong></p>
      
      <h3>The Rule of Thumb</h3>
      <p>Flexbox is meant for one-dimensional layouts (a row, OR a column). Grid is meant for two-dimensional layouts (rows AND columns).</p>
      
      <h3>When to use Flexbox</h3>
      <ul>
        <li>Aligning a tiny icon next to some text</li>
        <li>A simple navigation row where items group to the left and right</li>
        <li>Stacking a series of cards in a column</li>
      </ul>

      <h3>When to use Grid</h3>
      <ul>
        <li>Defining an overarching page layout (Sidebar left, Header top, Main content right)</li>
        <li>Creating a responsive gallery of images where items span multiple rows or columns</li>
      </ul>
      
      <p>When you start nesting Flexbox inside Grid cells, you unlock the true power of CSS.</p>
    `,
    date: "March 15, 2026",
    readTime: "6 min read",
    tags: ["CSS", "Design", "Tutorial"],
  },
  {
    slug: "my-journey-into-web-development",
    title: "My Journey Into Web Development",
    excerpt: "From writing my first line of HTML to deploying full-stack Next.js applications. A personal reflection on the learning process and the resources that helped me the most.",
    content: `
      <p>My journey into code wasn't a straight line. Like many, I started by pasting HTML snippets into MySpace themes without really understanding what the <code>tags</code> meant.</p>
      
      <h3>The Turning Point</h3>
      <p>The real shift happened during my Computer Science degree. While my algorithms classes were interesting, I craved visual results. I discovered CSS and JavaScript, and suddenly I was painting with logic.</p>
      
      <p>Learning React was a massive paradigm shift. Understanding state, props, and component lifecycles broke my brain initially. But once it clicked, I was building things 10x faster than I ever could with Vanilla DOM manipulation.</p>
      
      <p>Today, I'm specializing entirely in the modern frontend stack (Next.js, Tailwind, TypeScript), and I couldn't be happier with the things I am able to build.</p>
    `,
    date: "February 28, 2026",
    readTime: "5 min read",
    tags: ["Career", "Personal", "Learning"],
  },
  {
    slug: "optimizing-nextjs-performance",
    title: "Optimizing Next.js App Performance",
    excerpt: "Practical tips and techniques for squeezing every ounce of performance out of your Next.js applications, from image optimization to dynamic imports.",
    content: `
      <p>Next.js is already incredibly fast out of the box, but as your app scales, you can easily introduce performance bottlenecks. Here are my top strategies for keeping a 100 Lighthouse score.</p>
      
      <h3>1. Always use the next/image Component</h3>
      <p>Never use the standard HTML <code>img</code> tag. The Next.js image component automatically converts your images to WebP, resizes them correctly for the user's device, and prevents layout shift (CLS) by enforcing width/height attributes.</p>
      
      <h3>2. Dynamic Imports for Heavy Client Components</h3>
      <p>If you have a massive modal wrapper or a rich text editor that isn't needed until the user clicks a button, don't load it immediately! Use <code>next/dynamic</code> to defer the loading of that component until the interaction happens.</p>
      
      <h3>3. aggressively leverage caching</h3>
      <p>With the App Router, data requests are cached by default. Don't fight it. Understand how <code>revalidate</code> times work and serve static data wherever absolutely possible.</p>
    `,
    date: "January 14, 2026",
    readTime: "10 min read",
    tags: ["Next.js", "Performance", "Web Dev"],
  }
];
