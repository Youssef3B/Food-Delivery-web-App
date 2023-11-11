const API_URL = `http://localhost:3000`;

export async function getFavorite() {
  const res = await fetch(`${API_URL}/Favorite`);
  if (!res.ok) throw new Error("Failed to get favorite");
  const data = await res.json();
  return data;
}
