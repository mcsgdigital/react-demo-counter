import { memo } from "react";

const Buttons = memo( 
    function Butons({ onIncrement, onDecrement }) {
        
        return (
            <div className="flex space-x-4">
                <button
                    onClick={onIncrement}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Increment
                </button>
                <button
                    onClick={onDecrement}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Decrement
                </button>
            </div>
        );
    }
)

export default Buttons;