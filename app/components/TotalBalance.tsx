const TotalBalance = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-10">
      <div>
        <div className="text-2xl lg:text-3xl font-medium text-title lg:mb-2">
          $935,673.12
        </div>
        <span className="text-sm lg:text-base text-info">
          19.42145265945 
          <span> BTC</span>
        </span>
      </div>
      <div className="flex gap-10">
        <div className="flex gap-3">
          <span className="bg-[#1D2335] w-10 lg:w-12 h-10 lg:h-12 inline-flex justify-center items-center rounded-lg">
            <svg className="w-6 fill-[#2E64F1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.5-12.846c0-2.523-1.576-3.948-5.263-4.836v-4.44c1.14.234 2.231.725 3.298 1.496l1.359-2.196a9.49 9.49 0 00-4.56-1.776V6h-2.11v1.355c-3.032.234-5.093 1.963-5.093 4.486 0 2.64 1.649 3.925 5.19 4.813v4.58c-1.577-.234-2.886-.935-4.269-2.01L9.5 21.35a11.495 11.495 0 005.724 2.314V26h2.11v-2.313c3.08-.257 5.166-1.963 5.166-4.533zm-7.18-5.327c-1.867-.537-2.327-1.168-2.327-2.15 0-1.027.8-1.845 2.328-1.962zm4.318 5.49c0 1.122-.873 1.893-2.401 2.01v-4.229c1.892.538 2.401 1.168 2.401 2.22z" fillRule="evenodd"/></svg>
          </span>
          <div className="text-sm lg:text-base flex flex-col justify-between">
            <h6 className="text-info">Income</h6>
            <p className="text-title">$10,788.25</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="bg-[#212932] w-10 lg:w-12 h-10 lg:h-12 inline-flex justify-center items-center rounded-lg">
            <svg className="w-6 fill-[#3D9FBB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.5-12.846c0-2.523-1.576-3.948-5.263-4.836v-4.44c1.14.234 2.231.725 3.298 1.496l1.359-2.196a9.49 9.49 0 00-4.56-1.776V6h-2.11v1.355c-3.032.234-5.093 1.963-5.093 4.486 0 2.64 1.649 3.925 5.19 4.813v4.58c-1.577-.234-2.886-.935-4.269-2.01L9.5 21.35a11.495 11.495 0 005.724 2.314V26h2.11v-2.313c3.08-.257 5.166-1.963 5.166-4.533zm-7.18-5.327c-1.867-.537-2.327-1.168-2.327-2.15 0-1.027.8-1.845 2.328-1.962zm4.318 5.49c0 1.122-.873 1.893-2.401 2.01v-4.229c1.892.538 2.401 1.168 2.401 2.22z" fillRule="evenodd"/></svg>
          </span>
          <div className="text-sm lg:text-base flex flex-col justify-between">
            <h6 className="text-info">Expense</h6>
            <p className="text-title">$10,788.25</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TotalBalance