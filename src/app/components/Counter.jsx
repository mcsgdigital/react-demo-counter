'use client';
import { useCallback, useState } from "react";
import Buttons from "./Buttons";

export default function Counter() {
    const [count, setCount] = useState(0);
    const objTest = { name: "test" };

    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount((prev) => prev - 1);
    }, []);

    return (
        <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
            <main className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center py-16 md:py-32 px-16 bg-white dark:bg-black">
                <h1 className="text-4xl font-bold mb-8">Counter</h1>
                <h3 className="text-2xl font-semibold mb-4">
                    Current Count: {count}
                </h3>
                <Buttons onIncrement={increment} onDecrement={decrement} />
            </main>
        </div>
    );
}