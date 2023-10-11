const Search = () => {
  return (
    <div className="relative flex items-center w-full">
        <input type="text" placeholder="Search" className="bg-card px-4 pr-10 py-2 text-sm rounded-full text-info outline-none placeholder:text-info w-full" />
        <svg className="w-5 h-5 stroke-info absolute right-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    </div>
  )
}

export default Search