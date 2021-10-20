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
            <div class="relative z-1 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                  <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span class="block xl:inline">ເພີ່ມຄຸນຄ່າ</span>
                    <span class="block text-indigo-600 xl:inline">online </span>
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
        
        <div className="relative w-full bg-primary index-10">
          <div className="max-w-7xl  mx-auto -mt-20 py-10">
            <div className="grid grid-cols-4">
              {
                [...Array(4)].map(i => {
                  return (
                    <div className="card text-center">
                      <div className="w-full justify-center item-center">
                        <i>I</i>
                        <h5 className="card-title">Hello world</h5>
                        <p>kdsjadfklasdjfsaklfdjsak</p>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
        <section className="container  mx-auto">

          <div className="w-full flex items-center justify-center gap-4">
            {
              [...Array(4)].map(it => {
                return (
                  <div className="xl:w-1/4 sm:w-1/2 w-full 2xl:w-1/5 flex flex-col items-center rounded-lg">
                    <div class="card bordered">
                      <figure>
                        <img src="https://picsum.photos/id/1005/400/250" />
                      </figure>
                      <div class="card-body px-4 pt-5">
                        <h6 class="card-title text-sm text-justify">ພັດທະນາ Mobile App ຂ່າວສານ ດ້ວຍ Flutter + ນຳໃຊ້ Laravel 8 ຂຽນ API ແລະ ຖານຂໍ້ມູນ MySQL
                        </h6>
                        <p className="text-xs text-justify">ຫຼັກສູດນີ້ ເປັນຫຼັກສູດ ພັດທະນາ ໂມບາຍແອັບ ຂ່າວສານ ດ້ວຍ Flutter 2021 ໂດຍນຳໃຊ້ Laravel 8.xx ເພື່ອຂຽນ API ດຶງຂໍ້ມູນຈາກ MySQL.</p>
                        <div class="flex items-center mb-2 py-2">
                          <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />

                          <div class="pl-3">
                            <div class="font-small">
                              Jessica White
                            </div>
                            <div class="text-gray-600 text-sm">
                              (100K)
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center ml-2">
                          <svg class="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                          <svg class="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                          <svg class="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                          <svg class="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                          <svg class="w-3 h-3 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                        </div>
                        <div class="flex items-center card-actions">
                          <div>
                            <div className="justify-start">
                              asdfasd
                            </div>
                          </div>
                          <div>
                            <button class="btn btn-sm btn-secondary text-small rounded-lg">More info</button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </section>
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
