const API_URL = `http://localhost:3000`;

export async function getMenu() {
  const res = await fetch(`${API_URL}/Menu`);

  if (!res.ok) throw Error("Failed to get menu");
  const data = await res.json();
  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/received/${id}`);

  if (!res.ok) {
    const errorMessage = `Failed to get order. Status: ${res.status}, ${res.statusText}`;
    throw Error(errorMessage);
  }

  const data = await res.json();
  return data;
}
export async function getOrder2() {
  const res = await fetch(`${API_URL}/received`);

  if (!res.ok) {
    const errorMessage = `Failed to get order. Status: ${res.status}, ${res.statusText}`;
    throw Error(errorMessage);
  }

  const data = await res.json();
  return data;
}
