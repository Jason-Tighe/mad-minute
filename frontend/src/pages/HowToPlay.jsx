
export default function HowTo() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-400 to-indigo-400 flex flex-col items-center justify-center">
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border-2 border-indigo-400/50 w-96">
            <h1 className="text-white text-2xl font-bold mb-4 text-center">How to Play</h1>
            <ul className="text-gray-300 list-disc list-inside">
                <li className="mb-2">
                The goal of the game is to reach the target number by using the numbers and operations provided.
                </li>
                <li className="mb-2">
                Use the number keys (0-9) to input numbers, and the operation keys (+, -, *, /) to perform calculations.
                </li>
                <li>
                Press Enter to submit your answer. If you reach the target number, you score a point!
                </li>
                <li>
                Multiplying by 0 or dividing by 0 will result in an error to keep the game fair.
                </li>
            </ul>
            </div>
        </div>
        );
}