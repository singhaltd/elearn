import Head from 'next/head'
import LayoutDefault from '../../layouts/layout.default'
export default function CoursesDetail() {
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
                        <div class="card-body">
                            <h2 class="card-title">ພັດທະນາ Mobile App ຂ່າວສານ ດ້ວຍ Flutter + ນຳໃຊ້ Laravel 8 ຂຽນ API ແລະ ຖານຂໍ້ມູນ MySQL</h2>
                            <p>ຫຼັກສູດນີ້ ເປັນຫຼັກສູດ ພັດທະນາ ໂມບາຍແອັບ ຂ່າວສານ ດ້ວຍ Flutter 2021 ໂດຍນຳໃຊ້ Laravel 8.xx ເພື່ອຂຽນ API ດຶງຂໍ້ມູນຈາກ MySQL.</p>

                            <div class="my-4 flex justify-between gap-5">
                                <div class=" py-2  w-full text-gray-700 text-center">
                                    <div class="flex items-center ml-2">
                                        <svg class="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        <svg class="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        <svg class="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        <svg class="w-3 h-3 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        <svg class="w-3 h-3 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    </div>
                                </div>
                                <div class=" border-gray-200 rounded-lg py-2 w-full  text-gray-700 text-center">
                                <span class="text-gray-400"></span> <span class="text-2xl text-black">180</span><span class="text-gray-400"></span>
                                </div>
                            </div>
                            <div class="card-actions">
                                <div class="btn-group">
                                    <button class="btn glass rounded-full">Get Started</button>
                                    <button class="btn glass rounded-full">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center shadow-xl">
                    <div class="flex flex-col lg:flex-row w-full justify-center gap-1">
                        <div class="w-full lg:w-2/3 p-10 rounded-lg order-2 lg:order-first">
                            <h1 class="text-gray-700 font-bold tracking-wider">Upgrade your plan</h1>
                            <p class="text-gray-500 mt-4">Please make the payment to start enjoying all the features of our premium plan as soon as possible.</p>

                            <div class="flex my-10 border-2 border-blue-700 rounded-sm p-5 bg-blue-50 justify-between items-center">
                                <div class="flex justify-start gap-5 items-center">
                                    <div class="w-20 h-20 bg-blue-700 rounded-lg"></div>
                                    <div>
                                        <h1 class="font-bold tracking-wider text-gray-700">Small Business</h1>
                                        <span class="tracking-wider uppercase text-xs text-blue-700 font-bold">change plan</span>
                                    </div>
                                </div>
                                <div>
                                    <span class="text-gray-500">$</span> <span class="text-3xl">8,350 </span> <span class="text-gray-500">/ year</span>
                                </div>
                            </div>

                            <h1 class="text-gray-700 font-bold tracking-wider">Payment details</h1>
                            <div class="my-10">
                                <div class="flex justify-between items-center">
                                    <div class="flex justify-items-start gap-3 items-stretch">
                                        <div class="bg-gray-200 w-14"></div>
                                        <div>
                                            <h1 class="font-bold text-gray-700">Credit card</h1>
                                            <p class="text-sm text-gray-500">2344 xxxx xxxx xxxx 4444</p>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="cvc" class="w-20 border-2 border-gray-300 outline-none rounded-sm px-4 py-2 focus:border-blue-600" />
                                    </div>
                                </div>
                                <div class="flex justify-between items-center mt-5">
                                    <div class="flex justify-items-start gap-3 items-stretch">
                                        <div class="bg-gray-200 w-14"></div>
                                        <div>
                                            <h1 class="font-bold text-gray-700">Credit card</h1>
                                            <p class="text-sm text-gray-500">2344 xxxx xxxx xxxx 4444</p>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="cvc" class="w-20 border-2 border-gray-300 outline-none rounded-sm px-4 py-2 focus:border-blue-600" />
                                    </div>
                                </div>
                            </div>

                            <h1 class="uppercase font-bold tracking-widest text-blue-600 text-sm">Add payment method</h1>

                            <input type="text" class="w-full outline-none border-2 border-gray-300 py-3 pl-5 rounded-sm mt-4" placeholder="Email Address" />

                            <button class="w-full rounded-sm py-7 mt-7 text-center bg-blue-600 text-white font-bold tracking-wider">Procced to Payment    &rarr;</button>
                        </div>
                        <div class="w-full lg:w-1/6 order-1 lg:order-last flex flex-col justify-start gap-7">
                            <div class="p-2 rounded-lg text-center">
                                <img src="https://i.ytimg.com/vi/mtXQ-m2xPEY/maxresdefault.jpg" alt="" class="h-20 w-full object-cover content-center rounded-t-lg" />
                                <div class="flex justify-center">
                                    <img src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg" alt="" class="w-20 h-20 rounded-full object-cover content-center -mt-10 border-4 border-white" />
                                </div>
                                <h1 class="text-center font-bold tracking-wider text-gray-700 mt-4">Filip Martin Jose</h1>
                                <p class="text-gray-500 mt-1 text-center">Los Angeles</p>
                                <br />
                                <button class="bg-blue-700 py-2 px-4 rounded-full text-white text-sm font-semibold">Pro Level</button>

                                <div class="mt-5 flex justify-between mx-10 mb-5">
                                    <div class="text-left">
                                        <h1 class="text-gray-500">Followers</h1>
                                        <p class="text-3xl text-gray-800">980</p>
                                    </div>
                                    <div class="text-left">
                                        <h1 class="text-gray-500">Projects</h1>
                                        <p class="text-3xl text-gray-800">142</p>
                                    </div>
                                    <div class="text-left">
                                        <h1 class="text-gray-500">Rank</h1>
                                        <p class="text-3xl text-gray-800">12</p>
                                    </div>
                                </div>
                            </div>
                            <div class="rounded-lg p-6">
                                <h1 class="font-bold tracking-wider text-gray-800">Set up your pricing</h1>
                                <p class="text-sm text-gray-500 mt-2">Please set up your hourly or fixed rate so that the client is aware of your pricing</p>
                                <div class="my-4 flex justify-between gap-5">
                                    <div class="border-2 border-blue-400 rounded-lg py-2  w-full text-gray-700 text-center">
                                        Hourly
                                    </div>
                                    <div class="border-2 border-gray-200 rounded-lg py-2 w-full  text-gray-700 text-center">
                                        Fixed
                                    </div>
                                </div>

                                <span class="text-gray-400">$</span> <span class="text-2xl text-black">180</span><span class="text-gray-400"> / hour</span>

                                <div class="mt-3 w-full border-t-4 border-gray-300 rounded-full relative">
                                    <div class="w-4/5 absolute left-0 -top-1 border-t-4 border-blue-600 rounded-full">
                                        <div class="absolute w-5 h-5 bg-blue-600 rounded-full top-0 bottom-0 my-auto -right-1 ring-1 ring-blue-600 ring-offset-2 ring-offset-white">
                                        </div>
                                    </div>
                                </div>
                                <div class="flex justify-between text-sm text-gray-500">
                                    <span>$20</span>
                                    <span>$300</span>
                                </div>
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
CoursesDetail.getLayout = function getLayout(page) {
    return (
        <LayoutDefault>
            {page}
        </LayoutDefault>
    )
}
