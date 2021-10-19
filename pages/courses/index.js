import Head from 'next/head'
import LayoutDefault from '../../layouts/layout.default'
export default function Course({ stars }) {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div class="flex items-center w-full px-4 py-10 bg-cover card bg-base-200">
                    <div class="card glass lg:card-side text-neutral-content">
                        <figure>
                            <img src="https://picsum.photos/id/1005/300/200" class="rounded-lg shadow-lg" />
                        </figure>
                        <div class="max-w-md card-body">
                            <h2 class="card-title">Glass</h2>
                            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
                            <div class="card-actions">
                                <button class="btn glass rounded-full">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {stars}
            </main>
        </div>
    )
}
Course.getLayout = function getLayout(page) {
    return (
        <LayoutDefault>
            {page}
        </LayoutDefault>
    )
}

Course.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }
