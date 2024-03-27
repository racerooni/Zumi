interface ItemsDisplayProps{
    children: React.ReactNode;
}

const ItemsDisplay: React.FC<ItemsDisplayProps> = ({children}) => {
    
    return (
        <div className="grid grid-cols-6 gap-4 justify-between px-12">
            {children}
        </div>
    )
}

export default ItemsDisplay;