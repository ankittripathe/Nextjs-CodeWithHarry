export default function AboutCatchAll({ params }) {
  const { slug } = params; // slug is an array, e.g. ["hitler"] or ["a","b"]
  console.log(slug);
  // return <h1>Slug: {Array.isArray(slug) ? slug.join('/') : slug}</h1>;
  return <h1>Slug: {Array.isArray(slug) ? slug.join('/') : slug}</h1>;
}
