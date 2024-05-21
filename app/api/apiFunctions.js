export const handleSaveChanges = async (e,session, username, bio) => {
  e.preventDefault();

  try {
    const response = await fetch(
      `http://localhost:3000/api/users/${session?.user.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          bio: bio,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok", response.status);
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
