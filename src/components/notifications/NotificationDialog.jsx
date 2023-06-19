import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
export default function MyModal({ openModal, closeModal, isOpen }) {
	return (
		<>
			<Transition
				appear
				show={isOpen}
				as={Fragment}>
				<Dialog
					as='div'
					className='relative z-10'
					onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<div className='fixed inset-0 bg-black bg-opacity-25 blur-md' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-75 scale-100'
								leaveTo='opacity-0 scale-95'>
								<Dialog.Panel className='w-72 max-w-md transform overflow-hidden rounded-2xl   text-left align-middle shadow-xl transition-all'>
									<div className=' flex  items-center bg-white justify-center px-4 pt-5 pb-4 sm:p-6 sm:pb-4 h-40'>
										⚠️😨 Please refill fields
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
