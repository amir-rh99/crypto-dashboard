import Card from "./components/Card";
import TransactionList from "./components/TransactionList";
import Wallet from "./components/Wallet";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <Card>
            <div className="grid grid-cols-2">
              <div>
                <h6 className="text-title font-medium text-lg mb-5">Total Balance</h6>
                <div className="flex flex-col gap-10">
                  <div>
                    <div className="text-3xl font-medium text-title mb-2">
                      $935,673.12
                    </div>
                    <span className="text-info">
                      19.42145265945 
                      <span> BTC</span>
                    </span>
                  </div>
                  <div className="flex gap-10">
                    <div className="flex gap-3">
                      <span className="bg-[#1D2335] w-12 h-12 inline-flex justify-center items-center rounded-lg">
                        <svg className="w-6 fill-[#2E64F1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.5-12.846c0-2.523-1.576-3.948-5.263-4.836v-4.44c1.14.234 2.231.725 3.298 1.496l1.359-2.196a9.49 9.49 0 00-4.56-1.776V6h-2.11v1.355c-3.032.234-5.093 1.963-5.093 4.486 0 2.64 1.649 3.925 5.19 4.813v4.58c-1.577-.234-2.886-.935-4.269-2.01L9.5 21.35a11.495 11.495 0 005.724 2.314V26h2.11v-2.313c3.08-.257 5.166-1.963 5.166-4.533zm-7.18-5.327c-1.867-.537-2.327-1.168-2.327-2.15 0-1.027.8-1.845 2.328-1.962zm4.318 5.49c0 1.122-.873 1.893-2.401 2.01v-4.229c1.892.538 2.401 1.168 2.401 2.22z" fillRule="evenodd"/></svg>
                      </span>
                      <div>
                        <h6 className="text-info">Income</h6>
                        <p className="text-title">$10,788.25</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="bg-[#212932] w-12 h-12 inline-flex justify-center items-center rounded-lg">
                        <svg className="w-6 fill-[#3D9FBB]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.5-12.846c0-2.523-1.576-3.948-5.263-4.836v-4.44c1.14.234 2.231.725 3.298 1.496l1.359-2.196a9.49 9.49 0 00-4.56-1.776V6h-2.11v1.355c-3.032.234-5.093 1.963-5.093 4.486 0 2.64 1.649 3.925 5.19 4.813v4.58c-1.577-.234-2.886-.935-4.269-2.01L9.5 21.35a11.495 11.495 0 005.724 2.314V26h2.11v-2.313c3.08-.257 5.166-1.963 5.166-4.533zm-7.18-5.327c-1.867-.537-2.327-1.168-2.327-2.15 0-1.027.8-1.845 2.328-1.962zm4.318 5.49c0 1.122-.873 1.893-2.401 2.01v-4.229c1.892.538 2.401 1.168 2.401 2.22z" fillRule="evenodd"/></svg>
                      </span>
                      <div>
                        <h6 className="text-info">Expense</h6>
                        <p className="text-title">$10,788.25</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h6 className="text-title font-medium text-lg mb-5">Wallet</h6>
                <div className="grid grid-cols-3 gap-10">
                  <div>
                    <img src="/images/chart.png" className="rounded-full" />
                  </div>

                  <div className="col-span-2">
                    <Wallet />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card>
            <div>
              <h6 className="text-title font-medium text-lg mb-5">Recent Transaction</h6>
              <TransactionList />
            </div>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <Card>
            <h6 className="text-title font-medium text-lg mb-5">Statistics</h6>
            <div>
              <img src="/images/chart2.png" className="w-full"/>
            </div>
          </Card>
        </div>
        <div>
          <Card>
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
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5">
        <Card>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span>
                  <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path fill="#FFF" fillRule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/></g></svg>
              </span>
              <img src="/images/chart3.png" alt="" />
            </div>
            <div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                  <span className="text-title text-sm font-medium">
                    Bitcoin
                  </span>
                  <span className="text-xs text-info font-medium">
                    BTC
                  </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-title text-sm">
                  $2,526.23
                </span>
                <span className="text-green-500 text-xs">
                4.56%
                </span>
              </div>
            </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span>
                  <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path fill="#FFF" fillRule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/></g></svg>
              </span>
              <img src="/images/chart3.png" alt="" />
            </div>
            <div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                  <span className="text-title text-sm font-medium">
                    Bitcoin
                  </span>
                  <span className="text-xs text-info font-medium">
                    BTC
                  </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-title text-sm">
                  $2,526.23
                </span>
                <span className="text-green-500 text-xs">
                4.56%
                </span>
              </div>
            </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span>
                  <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path fill="#FFF" fillRule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/></g></svg>
              </span>
              <img src="/images/chart3.png" alt="" />
            </div>
            <div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                  <span className="text-title text-sm font-medium">
                    Bitcoin
                  </span>
                  <span className="text-xs text-info font-medium">
                    BTC
                  </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-title text-sm">
                  $2,526.23
                </span>
                <span className="text-green-500 text-xs">
                4.56%
                </span>
              </div>
            </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span>
                  <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path fill="#FFF" fillRule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/></g></svg>
              </span>
              <img src="/images/chart3.png" alt="" />
            </div>
            <div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                  <span className="text-title text-sm font-medium">
                    Bitcoin
                  </span>
                  <span className="text-xs text-info font-medium">
                    BTC
                  </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-title text-sm">
                  $2,526.23
                </span>
                <span className="text-green-500 text-xs">
                4.56%
                </span>
              </div>
            </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span>
                  <svg className="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path fill="#FFF" fillRule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/></g></svg>
              </span>
              <img src="/images/chart3.png" alt="" />
            </div>
            <div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                  <span className="text-title text-sm font-medium">
                    Bitcoin
                  </span>
                  <span className="text-xs text-info font-medium">
                    BTC
                  </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-title text-sm">
                  $2,526.23
                </span>
                <span className="text-green-500 text-xs">
                4.56%
                </span>
              </div>
            </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
