import toml from 'toml';

export async function getResume() {
  let res = await fetch('/src/lib/toml/resume.toml');
  let tomlData = await res.text();
  let data = toml.parse(tomlData);
  return data;
}
