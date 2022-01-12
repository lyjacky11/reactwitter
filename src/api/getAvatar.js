const AVATAR_URL = "https://avatars.dicebear.com/api/initials"

export const getAvatar = (displayName) => {
    try {
        return (`${AVATAR_URL}/${displayName}.svg`);
    }
    catch (err) {
        return err;
    }
}