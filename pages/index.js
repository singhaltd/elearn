import Head from 'next/head'
import LayoutDefault from '../layouts/layout.default'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Elearing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div class="relative bg-white overflow-hidden">
          <div class="max-w-7xl mx-auto">
            <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
              <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                  <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span class="block xl:inline">ເພີ່ມຄຸນຄ່າ</span>
                    <span class="block text-indigo-600 xl:inline">online business</span>
                  </h1>
                  <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                  </p>
                  <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div class="rounded-md shadow">
                      <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                        Get started
                      </a>
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3">
                      <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                        Live demo
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
          </div>
        </div>
        <div className="grid gap-4 items-center justify-center">

          {
            [...Array(4)].map(it => {
              return (
                <div>
                  <div className="xl:w-1/4 sm:w-1/2 w-full 2xl:w-1/5 flex flex-col items-center rounded-lg">
                    <div class="card bordered">
                      <figure>
                        <img src="https://picsum.photos/id/1005/400/250" />
                      </figure>
                      <div class="card-body">
                        <h2 class="card-title">Top image
                          <div class="badge mx-2 badge-secondary">NEW</div>
                        </h2>
                        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
                        <div class="justify-end card-actions">
                          <button class="btn btn-secondary">More info</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
        <div className="w-full flex items-center justify-center">
          <div className="xl:w-1/4 sm:w-1/2 w-full 2xl:w-1/5 flex flex-col items-center py-16 md:py-12 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg">
            <div className="w-full flex items-center justify-center">
              <div className="flex flex-col items-center">
                <img src="https://cdn.tuk.dev/assets/templates/olympus/profile.png" alt="profile" />
                <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-white">Ricardo Boveta</p>
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className>
                <p className="text-xs text-gray-300">Products</p>
                <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">28</p>
              </div>
              <div className="ml-12">
                <p className="text-xs text-gray-300">Revenue</p>
                <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">$2890</p>
              </div>
              <div className="ml-12">
                <p className="text-xs text-gray-300">Average</p>
                <p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">$169</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
Home.getLayout = function getLayout(page) {
  return (
    <LayoutDefault>
      {page}
    </LayoutDefault>
  )
}
