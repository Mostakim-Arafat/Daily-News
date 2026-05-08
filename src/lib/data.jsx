

export const getNewsCatagory = async () => {
  const res1 = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const res2 = await res1.json()
  return res2.data.news_category
}

export const NewsData = async (Catagory_id) => {
    const res1 = await fetch(`https://openapi.programming-hero.com/api/news/category/${Catagory_id}`)
    const res2 = await res1.json()
    return res2.data
}
export const NewsDetail = async (detail_id) => {
    const res1 = await fetch(`https://openapi.programming-hero.com/api/news/${detail_id}`)
    const res2 = await res1.json()
    return res2.data[0]
}

