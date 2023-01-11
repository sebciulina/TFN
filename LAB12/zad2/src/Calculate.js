import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export function Add() {
    const [result, setResult] = useState("");
    let [searchParams] = useSearchParams();

    useEffect(() => {
        const x = parseInt(searchParams.get("x"));
        const y = parseInt(searchParams.get("y"));

        setResult(`${x + y}`);
    }, [searchParams]);

    return (
        <div>
            {result}
        </div>
    )
}

export function Sub() {
    const [result, setResult] = useState("");
    let [searchParams] = useSearchParams();

    useEffect(() => {
        const x = parseInt(searchParams.get("x"));
        const y = parseInt(searchParams.get("y"));

        setResult(`${x - y}`);
    }, [searchParams]);

    return (
        <div>
            {result}
        </div>
    )
}

export function Mul() {
    const [result, setResult] = useState("");
    let [searchParams] = useSearchParams();

    useEffect(() => {
        const x = parseInt(searchParams.get("x"));
        const y = parseInt(searchParams.get("y"));

        setResult(`${x * y}`);
    }, [searchParams]);

    return (
        <div>
            {result}
        </div>
    )
}

export function Div() {
    const [result, setResult] = useState("");
    let [searchParams] = useSearchParams();

    useEffect(() => {
        const x = parseInt(searchParams.get("x"));
        const y = parseInt(searchParams.get("y"));

        setResult(`${x / y}`);
    }, [searchParams]);

    return (
        <div>
            {result}
        </div>
    )
}