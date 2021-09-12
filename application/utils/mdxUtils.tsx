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

export function getArtistPost(filename: string): Post {
  const fullPath = join(ARTISTS_PATH, `${filename}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
}

export function getTextPost(filename: string): Post {
  const fullPath = join(TEXTS_PATH, `${filename}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
}

export function getExhibitionPost(filename: string): Post {
  const fullPath = join(EXHIBITONS_PATH, `${filename}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
}

export function getInterviewPost(filename: string): Post {
  const fullPath = join(INTERVIEWS_PATH, `${filename}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
}


export function getArtistItems(filePath: string, fields: string[] = []): Items {
  const slug = filePath.replace(/\.mdx?$/, '');
  const { data, content } = getArtistPost(slug);

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

export function getTextItems(filePath: string, fields: string[] = []): Items {
  const slug = filePath.replace(/\.mdx?$/, '');
  const { data, content } = getTextPost(slug);

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
  console.log(fields);
  return items;
}

export function getExhibitionItems(filePath: string, fields: string[] = []): Items {
  const slug = filePath.replace(/\.mdx?$/, '');
  const { data, content } = getExhibitionPost(slug);

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
  console.log(fields);
  return items;
}


export function getInterviewItems(filePath: string, fields: string[] = []): Items {
  const slug = filePath.replace(/\.mdx?$/, '');
  const { data, content } = getInterviewPost(slug);

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
  console.log(fields);
  return items;
}


export function getAllArtistPosts(fields: string[] = []): Items[] {
  const filePaths = getItemFilePaths(ARTISTS_PATH);
  const posts = filePaths
    .map((filePath) => getArtistItems(filePath, fields))
    .sort((post1, post2) => (post1.order < post2.order ? -1 : 1));
  return posts;
}

export function getAllTexts(fields: string[] = []): Items[] {
  const filePaths = getItemFilePaths(TEXTS_PATH);
  const posts = filePaths
    .map((filePath) => getTextItems(filePath, fields))
    .sort((post1, post2) => (post1.order < post2.order ? -1 : 1));
  return posts;
}


export function getAllExhibitions(fields: string[] = []): Items[] {
  const filePaths = getItemFilePaths(EXHIBITONS_PATH);
  const posts = filePaths
    .map((filePath) => getExhibitionItems(filePath, fields))
    .sort((post1, post2) => (post1.order < post2.order ? -1 : 1));
  return posts;
}

export function getAllInterviews(fields: string[] = []): Items[] {
  const filePaths = getItemFilePaths(INTERVIEWS_PATH);
  const posts = filePaths
    .map((filePath) => getInterviewItems(filePath, fields))
    .sort((post1, post2) => (post1.order < post2.order ? -1 : 1));
  return posts;
}



