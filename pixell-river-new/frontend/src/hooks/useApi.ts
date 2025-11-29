import { useSession } from "@clerk/clerk-react";

export function useApi() {
  const { session } = useSession();

  const api = async (path: string, options: any = {}) => {
    const token = await session?.getToken();

    console.log("TOKEN FROM CLERK:", token);

    return fetch(`http://localhost:4000${path}`, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  return api;
}
