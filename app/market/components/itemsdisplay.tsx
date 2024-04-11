interface ItemsDisplayProps{
    children: React.ReactNode;
}

const ItemsDisplay: React.FC<ItemsDisplayProps> = ({children}) => {
    
    return (
        <div className="grid grid-cols-4 gap-4 justify-between px-12 flex-wrap">
            {children}
        </div>
    )
}

export default ItemsDisplay;