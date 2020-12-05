const mapToHeadlineItem = (item) => ({
  source: { id: item.id, name: item.name },
  author: item.author,
  title: item.title,
  description: item.description,
  headlineUrl: item.url,
  imageUrl: item.urlToImage,
  publishedAt: item.publishedAt,
  content: item.content
});

const mapToTopHeadlines = (data) => data.map(mapToHeadlineItem);

export { mapToTopHeadlines };