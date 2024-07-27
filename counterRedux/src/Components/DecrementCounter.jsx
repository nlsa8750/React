import React from 'react'

function DecrementCounter({onDecrement}) {
    return (
        <button
            type="button"
            className="bg-red-500 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
            onClick={onDecrement}
        >
            Decrease
        </button>

    )
}

export default DecrementCounter;