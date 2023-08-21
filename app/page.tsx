import { categories } from "@/constants"


async function Home() {
  const news: NewsResponse = await fetchNews(categories.join(','))
  return (
    <div>
      homePage
    </div>
  )
}
