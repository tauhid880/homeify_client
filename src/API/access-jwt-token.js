export const jwtToken = async (email) => {
  const res = await fetch(
    `https://homeify-server-orpin.vercel.app/jwt?email=${email}`
  );
  const data = await res.json();
  return data;
};
