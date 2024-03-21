interface MarketNavBarProps {
    children: React.ReactNode;
}

const MarketNavBar: React.FC<MarketNavBarProps> = ({children}) => {
    return (
        <nav className=" top-0 mb-4 h-14 bg-yellow-300 flex justify-center items-center">
            {children}
        </nav>
    )
}

export default MarketNavBar;