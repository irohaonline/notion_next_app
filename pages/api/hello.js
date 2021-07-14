// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Client } = require('@notionhq/client');
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export default async (req, res) =>{
  const listUsersResponse = await notion.users.list()
  res.status(200).json(listUsersResponse)
}
