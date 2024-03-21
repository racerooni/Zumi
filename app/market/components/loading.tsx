import {PulseLoader} from "react-spinners"

const Loading = () => {
    return (
        <PulseLoader color="#ffbb00" size={24} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
    )
}

export default Loading;