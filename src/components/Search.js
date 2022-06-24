import { BiCaretDown, BiSearch } from 'react-icons/bi'
const Search = () => {
	return (
		<div className="bg-slate-800 py-1 px-1">
			<div className="relative shadow-sm">
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<BiSearch />
					<label htmlFor="query" className="sr-only" />
				</div>
				<input type="text" name="query" className="pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full text-sm" />
				<div className='absolute inset-y-0 right-0 flex items-center'>
					<div>
						<button type="button"
							className='justify-center px-4 py-0 bg-blue-400 border-blue-400 border-2 text-sm text-white'>
							Sort By <BiCaretDown className="ml-2" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}


export default Search;