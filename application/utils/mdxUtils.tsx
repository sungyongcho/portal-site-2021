// utils/mdxUtils.ts
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';


type Items = {
  [key: string]: string;
};

type Post = {
  data: {
    [key: string]: string;
  };
  content: string;
};

const ARTISTS_PATH = join(process.cwd(), '/_mdx/artists');
const EXHIBITONS_PATH = join(process.cwd(), '/_mdx/exhibitions');
const TEXTS_PATH = join(process.cwd(), '/_mdx/texts');
const INTERVIEWS_PATH = join(process.cwd(), '/_mdx/interviews');


function getItemFilePaths(items_path: string): string[] {
  return (
    fs
      .readdirSync(items_path)
      // Only include md(x) files
      .filter((path) => /\.mdx?$/.test(path))
  );
}

export function getPost(artist_name: string): Post {
  const fullPath = join(ARTISTS_PATH, `${artist_name}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
}

export function getArtistItems(filePath: string, fields: string[] = []): Items {
  const slug = filePath.replace(/\.mdx?$/, '');
  const { data, content } = getPost(slug);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  })
  return items;
}

export function getAllArtistPosts(fields: string[] = []): Items[] {
  const filePaths = getItemFilePaths(ARTISTS_PATH);
  const posts = filePaths
    .map((filePath) => getArtistItems(filePath, fields))
    .sort((post1, post2) => (post1.order < post2.order ? -1 : 1));
  return posts;
}

export function getAllExhibitions(fields: string[] = []): Items[] {
  const filePaths = getItemFilePaths(ARTISTS_PATH);
  const posts = filePaths
    .map((filePath) => getArtistItems(filePath, fields))
    .sort((post1, post2) => (post1.order < post2.order ? -1 : 1));
  return posts;
}

export function getAllTexts(fields: string[] = []): Items[] {
  const filePaths = getItemFilePaths(ARTISTS_PATH);
  const posts = filePaths
    .map((filePath) => getArtistItems(filePath, fields))
    .sort((post1, post2) => (post1.order < post2.order ? -1 : 1));
  return posts;
}


export function getAllInterviews(fields: string[] = []): Items[] {
  const filePaths = getItemFilePaths(ARTISTS_PATH);
  const posts = filePaths
    .map((filePath) => getArtistItems(filePath, fields))
    .sort((post1, post2) => (post1.order < post2.order ? -1 : 1));
  return posts;
}



