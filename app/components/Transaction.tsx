const Transaction = () => {
  return (
    <div>
        <div className="mb-5">
        <span>Buy</span>
        </div>
        <div className="flex justify-center items-center gap-5 font-semibold">
        <span>
            <span className="text-title mx-1">1</span>
            <span className="text-info text-xs">BTC</span>
        </span>
        <span>
            <svg  className="w-5 h-5 stroke-title" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
        </span>
        <span>
            <span className="text-title mx-1">42,565.20</span>
            <span className="text-info text-xs">USD</span>
        </span>
        </div>
    </div>
  )
}

export default Transaction