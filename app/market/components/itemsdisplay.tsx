interface ItemsDisplayProps{
    children: React.ReactNode;
}

const ItemsDisplay: React.FC<ItemsDisplayProps> = ({children}) => {
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-between px-12 ">
            {children}
        </div>
    )
}

export default ItemsDisplay;