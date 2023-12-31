import { CryptoInfoInterface, CryptoType } from "../models/Crypto"

const CryptoList: CryptoInfoInterface[] = [
    {
        name: "Bitcoin",
        id: "BTC",
        icon: (
            <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path fill="#FFF" fillRule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/></g></svg>    
        )
    },
    {
        name: "Binance",
        id: 'BNB',
        icon: (
            <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><circle cx="16" cy="16" r="16" fill="#F3BA2F"/><path fill="#FFF" d="M12.116 14.404L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26-2.26L10.52 16l-2.26 2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.259L16 26l-6.144-6.144-.003-.003 2.263-2.257zM21.48 16l2.26-2.26L26 16l-2.26 2.26L21.48 16zm-3.188-.002h.002V16L16 18.294l-2.291-2.29-.004-.004.004-.003.401-.402.195-.195L16 13.706l2.293 2.293z"/></g></svg>  
        )
    },
    {
        name: "Bitcoin Cash",
        id: 'BCH',
        icon: (
            <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" fill="#8dc351" r="16"/><path d="M21.207 10.534c-.776-1.972-2.722-2.15-4.988-1.71l-.807-2.813-1.712.491.786 2.74c-.45.128-.908.27-1.363.41l-.79-2.758-1.711.49.805 2.813c-.368.114-.73.226-1.085.328l-.003-.01-2.362.677.525 1.83s1.258-.388 1.243-.358c.694-.199 1.035.139 1.2.468l.92 3.204c.047-.013.11-.029.184-.04l-.181.052 1.287 4.49c.032.227.004.612-.48.752.027.013-1.246.356-1.246.356l.247 2.143 2.228-.64c.415-.117.825-.227 1.226-.34l.817 2.845 1.71-.49-.807-2.815a65.74 65.74 0 001.372-.38l.802 2.803 1.713-.491-.814-2.84c2.831-.991 4.638-2.294 4.113-5.07-.422-2.234-1.724-2.912-3.471-2.836.848-.79 1.213-1.858.642-3.3zm-.65 6.77c.61 2.127-3.1 2.929-4.26 3.263l-1.081-3.77c1.16-.333 4.704-1.71 5.34.508zm-2.322-5.09c.554 1.935-2.547 2.58-3.514 2.857l-.98-3.419c.966-.277 3.915-1.455 4.494.563z" fill="#fff" fillRule="nonzero"/></g></svg>
        )
    },
    {
        name: "Ethereum",
        id: 'ETH',
        icon: (
            <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#B06DDE"/><g fill="#FFF" fillRule="nonzero"><path fillOpacity=".602" d="M16.498 4v8.87l7.497 3.35z"/><path d="M16.498 4L9 16.22l7.498-3.35z"/><path fillOpacity=".602" d="M16.498 21.968v6.027L24 17.616z"/><path d="M16.498 27.995v-6.028L9 17.616z"/><path fillOpacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/><path fillOpacity=".602" d="M9 16.22l7.498 4.353v-7.701z"/></g></g></svg>
        )
    },
    {
        name: "Tether",
        id: 'USDT',
        icon: (
            <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fillRule="evenodd"><circle cx="16" cy="16" r="16" fill="#26A17B"/><path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"/></g></svg> 
        )
    },
    {
        name: "Yearn",
        id: 'YFI',
        icon: (
            <svg className='w-6' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><circle fill="#006AE3" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M15.21 22.36V9.754h1.372V22.36z"/><path d="M22.197 13.954l-4.24 1.124-.945-4.4 1.26-.284.498 2.084s1.145-1.878-.382-3.824c-.9-1-1.327-1.042-2.336-1.2-.888-.127-2.952.173-3.567 2.582-.26 1.552.033 2.7 2.033 4.203l-.112 1.673s-2.233-1.573-2.809-2.676c-.445-.873-1.21-2.597.17-4.997.742-1.2 2.206-2.351 4.785-2.23 1.296.054 4.463 1.64 3.972 5.342-.085.694-.445 1.618-.445 1.618l1.74-.387.378 1.372zm-2.421 9.864c-.776 1.179-2.27 2.29-4.843 2.103-1.297-.088-4.418-1.758-3.83-5.446.103-.69.488-1.603.488-1.603l-1.749.34-.342-1.379 4.27-1.012.83 4.424-1.27.252-.442-2.1s-1.194 1.845.279 3.833c.872 1.024 1.297 1.076 2.306 1.26.882.152 2.954-.096 3.633-2.487.3-1.543.036-2.7-1.921-4.258l.157-1.67s2.191 1.63 2.737 2.749c.418.888 1.136 2.633-.303 4.994z"/></g></g></svg>
        )
    }
]

export const getCryptoInfo = (cryptoId: CryptoType): CryptoInfoInterface => {
    const find = CryptoList.find(item => item.id == cryptoId)
    return find as CryptoInfoInterface
}