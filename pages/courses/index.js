import Head from 'next/head'
import LayoutDefault from '../../layouts/layout.default'
export default function Courses() {
    return (
        <div>
            <Head>
                <title>Elearing</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div class="flex items-center w-full px-4 py-10 bg-cover card bg-base-200">
                    <div class="card w-full glass lg:card-side text-neutral-content">
                        <figure class="p-6">
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
      
                <section className="mx-auto max-w-7xl">

                    <div className="w-full grid grid-cols-4 gap-4">
                        {
                            [...Array(10)].map(it => {
                                return (

                                    <div class="card bordered">
                                        <figure>
                                            <img src="https://picsum.photos/id/1005/400/250" />
                                        </figure>
                                        <div class="card-body px-4 pt-5">
                                            <h6 class="card-title text-sm">ພັດທະນາ Mobile App ຂ່າວສານ ດ້ວຍ Flutter + ນຳໃຊ້ Laravel 8 ຂຽນ API ແລະ ຖານຂໍ້ມູນ MySQL
                                            </h6>
                                            <p className="text-xs">ຫຼັກສູດນີ້ ເປັນຫຼັກສູດ ພັດທະນາ ໂມບາຍແອັບ ຂ່າວສານ ດ້ວຍ Flutter 2021 ໂດຍນຳໃຊ້ Laravel 8.xx ເພື່ອຂຽນ API ດຶງຂໍ້ມູນຈາກ MySQL.</p>
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
                                                    <button class="btn btn-sm btn-secondary text-small rounded-full">More info</button>
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
Courses.getLayout = function getLayout(page) {
    return (
        <LayoutDefault>
            {page}
        </LayoutDefault>
    )
}
