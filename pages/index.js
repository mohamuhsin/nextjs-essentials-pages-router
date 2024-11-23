// our domain/

import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <h1>Home Page</h1>
            <ul>
                <li>
                    <Link href="/news/nextjs-is-a-great-framework">
                        NextJs is great framework
                    </Link>
                </li>
                <li>
                    <Link href="/news/something-else">Something else</Link>
                </li>
            </ul>
        </>
    );
}
