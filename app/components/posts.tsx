import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:space-x-0 border border-slate-200 p-4 rounded-md shadow-md ">
              <p className="text-blue-500 dark:text-neutral-100 tracking-tight font-bold">
                {post.metadata.title}
              </p>
              <p className="w-[100px] tabular-nums text-sm text-slate-500">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className='text-slate-600'>
                {post.metadata.summary}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
