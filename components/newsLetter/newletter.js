import style from './newsLetter.module.css';
export default function NewsLetter() {
	return (
		<>
				<div className="bg-gray-50 border flex flex-col lg:w-1/3 m-auto md:w-2/3 sm:w-11/12 w-full">
					<div className="ml-6">
						<p className="font-medium text-3xl">Our Newsletter</p>
					</div>
					<div className="xl:w-1/2 lg:w-2/5 md:w-1/2 sm:w-1/2 w-3/5 mb-7 ml-6 mt-9   ">
						<p className="font-bold text-2xl"> Sign up to receive the latest updates,directly from our company </p>
					</div>
					<div class="mt-5  ml-6">
						<form action="#" method="POST">
							<div className="w-3/5">
								<input type="text" name="first_name" placeholder="First Name"  class="bg-gray-200 block h-14 mt-1 rounded-2xl w-full pl-4 "/>
							</div>

							<div className="w-3/5">
								<input type="text" name="last_name" placeholder="Last Name" class=" bg-gray-200 block h-14 mt-1 rounded-2xl  w-full pl-4 "/>
							</div>

							<div class="mt-1 flex rounded-md shadow-sm mb-12">
								<input type="text" name="company_website" id="company_website" class=" bg-gray-200 block h-14 pl-4 rounded-l-2xl rounded-none w-4/5 " placeholder="Email Address" />
								<span class={`inline-flex items-center px-3 border px-5 ${style.email}`}>
									<img src="/tick.svg"></img>
								</span>
							</div>
						</form>
					</div>
				</div>		

		</>
	)
}