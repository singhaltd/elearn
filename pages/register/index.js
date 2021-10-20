import Head from 'next/head'
import LayoutDefault from '../../layouts/layout.default'
export default function Register() {
    return (
        <div>
            <Head>
                <title>Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="py-20">
                <section className="max-w-2xl mx-auto">
                    <div className="grid grid-cols-2 gap-5">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">ຊື່ແທ້</span>
                            </label>
                            <input type="text" placeholder="ຊື່ແທ້" class="input input-info input-bordered" />
                            {/* <label class="label">
                                <span class="label-text-alt">Please enter data</span>
                            </label> */}
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">ນາມສະກຸນ</span>
                            </label>
                            <input type="text" placeholder="ນາມສະກຸນ" class="input input-info input-bordered" />

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="username" class="input input-info input-bordered" />

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">ເບີໂທລະສັບ</span>
                            </label>
                            <input type="text" placeholder="username" class="input input-info input-bordered" />

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">ລະຫັດຜ່ານ</span>
                            </label>
                            <input type="text" placeholder="username" class="input input-info input-bordered" />

                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">ຢືນຢັນລະຫັດຜ່ານ</span>
                            </label>
                            <input type="text" placeholder="username" class="input input-info input-bordered" />

                        </div>
                    </div>
                    <div className="my-9">
                        <div class="btn-group">
                            <button class="btn w-1/2 btn-secondary border-r-2 rounded-full">ນັກຮຽນ</button>
                            <button class="btn w-1/2 btn-secondary rounded-full">ອາຈານ</button>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div>asdfasd
                        </div>
                        <div>
                            <button className="btn btn-secondary rounded-full justify-end">Login</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

Register.getLayout = function getLayout(page) {
    return (
        <LayoutDefault>
            {page}
        </LayoutDefault>
    )
}
