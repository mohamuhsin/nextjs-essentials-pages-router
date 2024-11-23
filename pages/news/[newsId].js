import { useRouter } from "next/router";

export default function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId;
    // send request to a backend API to fetch news item with the news ID.
    return <h1>The Detail Page</h1>;
}
