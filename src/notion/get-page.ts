import { NotionPage } from 'models/notion';
import notion from './client';

export async function getPage(id: string): Promise<NotionPage> {
  const page = (await notion.pages.retrieve({
    page_id: id,
  })) as NotionPage['page'];
  const blocks = (await notion.blocks.children.list({
    block_id: id,

    // Max is 100
    page_size: 100,
  })) as NotionPage['blocks'];

  return {
    page,
    blocks,
    id: page.id,
    title: page.properties.title.title[0].plain_text,
  };
}
