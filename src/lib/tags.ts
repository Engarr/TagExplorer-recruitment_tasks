export const QUERY_KEY_TAGS = 'TAGS';

type PropsType = {
  pageSize: number;
  page: number;
  sort: string;
  order: string;
};

export async function fetchTags({ pageSize, page, sort, order }: PropsType) {
  const tagsUrl = `//api.stackexchange.com/2.3/tags?order=${order}&sort=${sort}&site=stackoverflow&page=${page}&pagesize=${pageSize}&key=g4j7IaEQ7wNiTRG*M0dG5Q((
  `;
  const totalUrl = `//api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow&filter=total&key=g4j7IaEQ7wNiTRG*M0dG5Q((
  `;

  const [tagsResponse, totalResponse] = await Promise.all([
    fetch(tagsUrl),
    fetch(totalUrl),
  ]);

  if (!tagsResponse.ok || !totalResponse.ok) {
    throw new Error('Failed to fetch data');
  }

  const tagsData = await tagsResponse.json();
  const totalData = await totalResponse.json();

  return {
    tags: tagsData,
    total: totalData.total,
  };
}
