import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function ModalLoginFrm() {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <button
                type="button"
                onClick={openModal}
                className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
                Open dialog
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed  inset-0 z-99 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block bg-white z-99 w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    <h1 className="text-center">???????????????????????????????????????</h1>
                                </Dialog.Title>
                                <div className="mt-2">
                                    <div className="grid grid-cols-1 gap-5">
                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text">??????????????????</span>
                                            </label>
                                            <input type="text" placeholder="??????????????????" class="input input-info input-bordered" />
                                            {/* <label class="label">
                                <span class="label-text-alt">Please enter data</span>
                            </label> */}
                                        </div>
                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text">???????????????????????????</span>
                                            </label>
                                            <input type="text" placeholder="???????????????????????????" class="input input-info input-bordered" />

                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={closeModal}
                                    >
                                        ???????????????????????????????????????
                                    </button>
                                    
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
