import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-6 text-slate-800 tracking-tighter">Latest Posts</h1>
      <BlogPosts />
    </section>
  )
}
